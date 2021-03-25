import React from "react";

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback%20user-modify-playback-state`;

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
        </div>
    );
};

export default Login;
