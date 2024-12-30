import './style.css';

const YourProfile = () => {
    const searchParams = new URL(document.location.toString()).searchParams;
    const code = searchParams.get("code");

    const linkUser = async () => {
        const res = await fetch("http://localhost:8080/linkuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({code: code})
        })
    };
    
    const getUser = () => {
        window.location.href = "https://osu.ppy.sh/oauth/authorize?client_id=37079&response_type=code"
    }

    if (code) {
        linkUser();
    }

    return (
        <div>
            <button onClick={getUser}>Link your osu!std account</button>
        </div>
    );
};

export default YourProfile;