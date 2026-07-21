module.exports = {

    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === "LaunchRequest";
    },

    handle(handlerInput) {

        return handlerInput.responseBuilder

            .speak("Conectando a Rádio")

            .addAudioPlayerPlayDirective(
                "REPLACE_ALL",
                "https://antom.tailf176e0.ts.net/listen/radio_fantasma/radio.mp3?date=1784650634805",
                "radiofantasma",
                0
            )

            .getResponse();
    }

};