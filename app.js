const express = require("express");
const body_parser = require("body-parser");
const https = require("https");
const http = require("http");
const cors = require("cors");


const app = express();
const PORT = 3000;
let server = {};

const startServer = async () => {

    server = http.createServer(app);
    server.listen(PORT, () => {
        console.log('Server started on port', PORT);
    });

    const corsOptions = {
        origin: 'localhost',
        methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
        credentials: true,
        preflightContinue: true,
        optioinsSuccessStatus: 200,
    }

    app.options('*', cors(corsOptions));
    app.use(cors(corsOptions));

    app.use(body_parser.json({
        type: ['application/json', 'text/plain'],
    }));

    app.use(body_parser.urlencoded({
        extended: true,
    }))
}

startServer().then(() => {
    console.log('Server started');
})
.catch(() => {
    console.log('Error starting application');
})

