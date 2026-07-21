module.exports = {

    canHandle(handlerInput) {

        const req = handlerInput.requestEnvelope.request;

        return req.type === "IntentRequest"
            && req.intent.name === "PlayIntent";
    },

    handle(handlerInput) {

        return handlerInput.responseBuilder

            .speak("Reproduzindo Rádio Fantasma.")

            /*.addAudioPlayerPlayDirective(
                "REPLACE_ALL",
                STREAM_URL,
                TOKEN,
                0
            )*/

            .getResponse();

    }

};