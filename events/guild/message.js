module.exports = (Discord, client, message) => {
    const prefix = '!';

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const commandName = message.content.slice(prefix.length).split(/ +/).shift().toLowerCase();
    const args = message.content.slice(prefix.length + commandName.length + 1);

    const command = client.commands.get(commandName);

    if(command) command.execute(client, message, args, Discord);
}