module.exports = {
    names: ['ping'],
    description: "This is a test ping command.",
    execute(client, message, args, Discord) {
        message.channel.send('Test successful.');
    }
}