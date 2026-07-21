const express = require("express");
const { ExpressAdapter } = require("ask-sdk-express-adapter");

const skill = require("./skill");

const app = express();

const adapter = new ExpressAdapter(skill, false, false);

app.post("/", adapter.getRequestHandlers());

app.listen(3000, () => {

    console.log("Alexa rodando.");

});