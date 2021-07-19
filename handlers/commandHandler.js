const fs = require('fs');

module.exports = (client, Discord) => {
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`../commands/${file}`);
        if(command.names.length > 0) {
            command.names.forEach(commandName => {
                client.commands.set(commandName.toLowerCase(), command);
            });
            client.commands.set(command.names[0], command);
        } else {
            continue;
        }
    }
}