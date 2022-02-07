const Discord = require("discord.js")

module.exports = {
    name: "help",
    category: "info",
    devOnly: false,
    run: async ({client, message, args}) => {
        const help = new Discord.MessageEmbed()
        .setTitle("Commands for the bot")
		.addField('!hello', 'says hello to the bot')
		.addField('!say', 'will repeat what you say')
		.addField('!reminders', 'lists out your reminders')
		.setColor('#40bcaf')

		message.channel.send({ embeds: [help] })
    }
}
