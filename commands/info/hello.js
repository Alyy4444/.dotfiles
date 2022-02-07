module.exports = {
    name: "hello",
    category: "entertainment",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply("Hi")
    }
}