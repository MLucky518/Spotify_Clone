import React from "react";
import { Container } from "react-bootstrap";

const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=d0448ed2436749559bd44f4796881acd&response_type=code&show_dialog=true&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const Login = () => {
    return (
        <div>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "100vh" }}
            >
                <a className="btn btn-success btn-lg" href={AUTH_URL}>
                    Login with Spotify
                </a>
            </Container>
        </div>
    );
};

export default Login;
