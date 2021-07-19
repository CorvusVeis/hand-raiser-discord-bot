// import Discord from 'discord.js';
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const prefix = '!';

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('hand-raiser bot is online.');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
});


client.login('ODY2NDkxMjQ1NTAwMTcwMjQx.YPTU2w.swR1BzltQ3R5Ch5K6vEa8Hz-tsA');