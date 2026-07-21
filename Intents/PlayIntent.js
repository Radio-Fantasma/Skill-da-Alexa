module.exports = {

    canHandle(handlerInput) {

        const req = handlerInput.requestEnvelope.request;

        return req.type === "IntentRequest"
            && req.intent.name === "PlayIntent";
    },

    handle(handlerInput) {

        return handlerInput.responseBuilder

            .speak("Reproduzindo Rádio Fantasma.")

            .addAudioPlayerPlayDirective(
                "REPLACE_ALL",
                "https://antom.tailf176e0.ts.net/listen/radio_fantasma/radio.mp3?date=1784650634805",
                "radiofantasma",
                0
            )

            .getResponse();

    }

};