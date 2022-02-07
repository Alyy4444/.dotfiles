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


// client.on('message', (message) => {
//     if (message.content === "!reminders") {
// 		if (reminders.length === 0) {
// 			message.reply("There are no reminders right now");
// 		} else {
// 			var txt = "";
// 			var list = reminders.forEach(function(value, index, array){
// 				var d = new Date();
// 				txt = txt + (index + 1) + ". " + value.remindermsg + " (reminding in " + msToTime(value.starttime+value.timetowait - d.getTime()) + ")\n";
// 			});
// 			message.reply("Here are your reminders: \n" + txt);
// 		}
// 	}

// 	if (message.content.startsWith('!remind ')) {
// 		var reminderMsg = message.content.substr(8,message.end);

// 		if (reminderMsg == "") {
// 			message.reply('Type !help to learn how to remind');
// 		} else if (reminderMsg.search(/[0-9]+(s|m|h|d){1}/) >= 0) {
// 			var time = reminderMsg.substring(0,reminderMsg.search(" ")).toLowerCase();
// 			var outputMsg = reminderMsg.substring(reminderMsg.search(" ") + 1, reminderMsg.end);
// 			var actualTime = 0;

// 			var magnitudes = time.split(/s|d|m|h/).filter(word => word != "");
// 			var typesOfTime = time.split(/[0-9]+/).filter(word => word != "");

// 			if ((magnitudes.length == typesOfTime.length) && (-1 == time.search(/a|b|c|e|f|g|i|j|k|l|n|o|p|q|r|t|u|v|w|x|y|z/))) {
// 				for (i = 0; i < magnitudes.length; i++) {
// 					switch (typesOfTime[i]) {
// 						case 's':
// 							actualTime += magnitudes[i]*1000;
// 							break;
// 						case 'm':
// 							actualTime += magnitudes[i]*60000;
// 							break;
// 						case 'h':
// 							actualTime += magnitudes[i]*3600000;
// 							break;
// 						case 'd':
// 							actualTime += magnitudes[i]*86400000;
// 							break;
// 						default:
// 					}
// 				}

// 				message.reply(`your reminder has been set for ` + msToTime(actualTime));
// 				var d = new Date();
// 				var reminder = {author: message.author, remindermsg: outputMsg, starttime: d.getTime(), timetowait: actualTime};
				
// 				reminders.push(reminder);
// 				reminders.sort(function(a, b){return (a.starttime+a.timetowait) - (b.starttime+b.timetowait)});

// 				setTimeout(function() 
// 					{ console.log('worked');
// 					  reminders.shift();
// 					  message.reply(`Hey ${msg.author}, This is a reminder of ` + outputMsg, {
// 						tts: true
// 					  });
// 					}, actualTime);
// 			} else {
// 				message.reply('You formatted the time incorrectly it should only have numbers and the letters s, m, h and d and it should look like: \'4d20h30s\' or \'2h30m\' ');
// 			}
// 		} else {
// 			message.reply('You probably formatted your reminder wrong, type !help to learn how to make reminders!')
// 		}
// 	}
// })
      








//pulling commands and events from these folders 
client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

client.login(config.Token)