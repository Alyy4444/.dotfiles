const Discord = require("discord.js")
const config = require("./Data/token.json")



const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on('ready', () => {
	client.channels.cache.get('940134865460944896').send('Hello! I\'m ready to remind! Type \'!help\' for help');
});

let bot = {
    client, 
    prefix: "!",
    owner: ["843255869906616320"]
}


    function msToTime(duration) {
        var milliseconds = parseInt((duration % 1000) / 100),
          seconds = parseInt((duration / 1000) % 60),
          minutes = parseInt((duration / (1000 * 60)) % 60),
          hours = parseInt((duration / (1000 * 60 * 60)) % 24);
          days = parseInt((duration / (1000 * 60 * 60 * 24)) % 365);
      
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
      
        if (days !== 0)
            return days + " days " + hours + ":" + minutes + ":" + seconds + "." + milliseconds;
        else
            return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
      }



//pulling commands and events from these folders 
client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

client.login(config.Token)