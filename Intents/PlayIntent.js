module.exports = {

    canHandle(handlerInput) {

        const req = handlerInput.requestEnvelope.request;

        return req.type === "IntentRequest"
            && req.intent.name === "PlayIntent";
    },

    async handle(handlerInput) {
        const url = "https://antom.tailf176e0.ts.net/api/nowplaying";
        try {
            return handlerInput.responseBuilder

            .speak("Conectando a Rádio")
            
            .addAudioPlayerPlayDirective(
                "REPLACE_ALL",
                "https://antom.tailf176e0.ts.net/listen/radio_fantasma/radio.mp3?date=1784650634805",
                "radiofantasma",
                0
            )

            .getResponse();
        } catch (error) {
            return handlerInput.responseBuilder

            .speak("Infelizmente a Rádio esta fora do ar").getResponse();
        }
        
    }

};