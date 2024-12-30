import './style.css';

const YourProfile = () => {
    const searchParams = new URL(document.location.toString()).searchParams;
    const code = searchParams.get("code");
    let isLinked = false;

    let user = {};
    const linkUser = async () => {
        isLinked = true;
        const res = await fetch("http://localhost:8080/linkuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({code: code})
        })
        user = await res.json();
        console.log(user);
    };

    
    if (code) {
        linkUser();
    }
    
    const getCode = () => {
        window.location.href = "https://osu.ppy.sh/oauth/authorize?client_id=37079&response_type=code"
    }

    const checkClears = async () => {
        const res = await fetch("http://localhost:8080/checkclears", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id: user.id})
        })
    }

    return (
        <div>
            {isLinked ? <button onClick={checkClears}>Check for DAN clears</button> : <button onClick={getCode}>Link your osu!std account</button>}
        </div>
    );
};

export default YourProfile;