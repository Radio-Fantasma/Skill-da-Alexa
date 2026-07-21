module.exports = {

    canHandle(handlerInput) {

        const req = handlerInput.requestEnvelope.request;

        return req.type === "IntentRequest"
            && (
                req.intent.name === "AMAZON.StopIntent" ||
                req.intent.name === "AMAZON.CancelIntent"
            );

    },

    handle(handlerInput) {

        return handlerInput.responseBuilder

            .addAudioPlayerStopDirective()

            .getResponse();

    }

};