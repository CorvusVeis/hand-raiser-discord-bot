module.exports = {
    names: ['lowerHand', 'lh'],
    description: "Change username to remove the hand_raised emoji.",
    execute(client, message, args, Discord) {
        try {
            if (!message.guild.me.permissions.has('MANAGE_NICKNAMES')) return message.reply('I\'m missing permissions.');
            if (message.author.id === message.guild.ownerID) return message.reply('I can\'t change your nickname because you are the Owner of the server.');

            message.member.setNickname(message.guild.members.cache.get(message.author.id).displayName.replace(" ✋✋", ""));
        } catch (err) {
            console.error(err);
        }
    }
}