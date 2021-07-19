module.exports = {
    names: ['handEmoji', 'he'],
    description: "This is a test emoji command.",
    execute(client, message, args, Discord) {
        message.channel.send('Look at this emoji :raised_hand:');
    }
}