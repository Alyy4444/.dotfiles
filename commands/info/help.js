const Discord = require("discord.js")

module.exports = {
    name: "help",
    category: "info",
    devOnly: false,
    run: async ({client, message, args}) => {
        const help = new Discord.MessageEmbed()
        .setTitle("Help Guide for Reminder Bot")
		.addField('!remind', 'type \'!remind (time) (your reminder)\' for reminders. Here\'s some examples \'!remind 1d1h10m30s eat your veggies!\', \'!remind 23h10s go to sleep\'')
		.addField('!hello', 'says hello to the bot')
		.addField('!say', 'will repeat what you say')
		.addField('!reminders', 'lists out your reminders')
		.addField('!info', 'says a info about the bot')
		.addField('!G5', 'says the member of the Group')
		.setColor('#40bcaf')

		message.channel.send({ embeds: [help] })
    }
}