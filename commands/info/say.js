module.exports = {
    name: "say",
    category: "entertainment",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {

            /* This takes the sentence sent, and makes it an array. In this case, a list of words. It 'splits' the list up wherever it sees space.*/
            let sentence = msg.content.split(" ");
            
            /* .shift(), alters the list. It removes the first thing in the list. This would be the "!say" word. If we assigned shift() to a variable. Like "let x = msg.shift()" ... "x" would be the word that was removed. This is handy for grabbing command words. If you used shift() again, it would remove the second, then the third, each time that you type it.*/
            sentence.shift();
        
            // Now join the list back together into a sentence with "join()" and set that as the new sentence.
            sentence = sentence.join(" ");
        
            message.channel.send(sentence);
        
    }
}