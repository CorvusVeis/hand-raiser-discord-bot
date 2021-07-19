module.exports = {
    name: 'ping',
    description: "This is a test ping command.",
    execute(message, args) {
        message.channel.send('Test successful.');
    }
}