const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyAPI = new SpotifyWebApi({
        redirectUri: "http://localhost:3000/",
        clientId: "d0448ed2436749559bd44f4796881acd",
        clientSecret: "c199337782ef447d99c209045087b676",
        refreshToken,
    });

    spotifyAPI
        .refreshAccessToken()
        .then((data) => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn:data.body.expires_in
            })
        })
        .catch((err) => {
            console.log(err);
        });
});

app.post("/login", (req, res) => {
    const code = req.body.code;
    const spotifyAPI = new SpotifyWebApi({
        redirectUri: "http://localhost:3000/",
        clientId: "d0448ed2436749559bd44f4796881acd",
        clientSecret: "c199337782ef447d99c209045087b676",
    });

    spotifyAPI
        .authorizationCodeGrant(code)
        .then((data) => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

// REFACTOR LATER!!!

app.listen(3001);
