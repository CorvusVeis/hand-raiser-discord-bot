module.exports = {
    names: ['changeNickname', 'cn'],
    description: "This is a test Change Nickname command.",
    execute(client, message, args, Discord) {
        try {
            if (!message.guild.me.permissions.has('MANAGE_NICKNAMES')) return message.reply('I\'m missing permissions.');
            if (message.author.id === message.guild.ownerID) return message.reply('I can\'t change your nickname because you are the Owner of the server.');

            message.member.setNickname(args);
        } catch (err) {
            console.error(err);
        }
    }
}