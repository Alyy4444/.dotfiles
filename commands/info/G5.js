const Discord = require("discord.js")

module.exports = {
    name: "G5",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const G5 = new Discord.MessageEmbed()
        .setTitle("Group-5 Members")
		.setDescription(' Geffrey Raymundo, Donna Mae Ramos, Elisha Roman, Rayzell ann Padilla, Alric Rayo')
		.setColor('#40bcaf')

        message.channel.send({ embeds: [G5] })
    }
}