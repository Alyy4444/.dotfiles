const Discord = require("discord.js")

module.exports = {
    name: "info",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const info = new Discord.MessageEmbed()
        .setTitle("Info")
		.setDescription(' This bot is made by group 5 and its for school purposes only')
		.setColor('#40bcaf')

        message.channel.send({ embeds: [info] })
    }
}