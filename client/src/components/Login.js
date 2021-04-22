import React from "react";
import { Container } from "react-bootstrap";
import video from "../videos/headphones.mp4";
import Footer from "./Footer";
import Navbar from "./Navbar"

const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=d0448ed2436749559bd44f4796881acd&response_type=code&show_dialog=true&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const Login = () => {
    return (
        <div>
            <Navbar/>
            <Container
                className="d-flex flex-column justify-content-center align-items-center"
                style={{ minHeight: "89vh" }}
            >
                
                <div
                    style={{ minHeight: "50vh" }}
                    className="d-flex flex-column justify-content-center  align-items-center"
                >
                    <h1 style = {{fontSize: "4rem",color:"#acdbdf"}}>M-usic</h1>
                    <blockquote>For the love of music</blockquote>
                    <a
                        className="btn btn-success btn-lg "
                        style={{
                            background: "#acdbdf",
                            border: "1px solid black",
                            color:"#010101"
                        }}
                        href={AUTH_URL}
                    >
                        Login with Spotify
                    </a>
                </div>
                <div>
                    <video className="vid" src={video} muted loop autoPlay>
                        ....
                    </video>
                </div>
            </Container>
            
        </div>
    );
};

export default Login;
