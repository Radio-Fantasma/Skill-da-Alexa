const { STREAM_URL, TOKEN } = require("../Skill-da-Alexa/config");

module.exports = {

    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === "LaunchRequest";
    },

    handle(handlerInput) {

        return handlerInput.responseBuilder

            .speak("Ligando a Rádio Fantasma.")

            .addAudioPlayerPlayDirective(
                "REPLACE_ALL",
                STREAM_URL,
                TOKEN,
                0
            )

            .getResponse();
    }

};