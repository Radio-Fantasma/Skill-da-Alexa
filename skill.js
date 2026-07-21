const Alexa = require("ask-sdk-core");

const Launch = require("./Intents/LaunchRequest");
const Play = require("./Intents/PlayIntent");
const Stop = require("./Intents/StopIntent");
const Pause = require("./Intents/PauseIntent");
const Resume = require("./Intents/ResumeIntent");

module.exports = Alexa.SkillBuilders.custom()

.addRequestHandlers(
    Launch,
    Play,
    Stop,
    Pause,
    Resume
)

.create();