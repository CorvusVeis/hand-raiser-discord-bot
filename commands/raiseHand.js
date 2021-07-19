module.exports = {
    names: ['raiseHand', 'rh'],
    description: "Change username to include hand_raised emoji.",
    execute(client, message, args, Discord) {
        try {
            if (!message.guild.me.permissions.has('MANAGE_NICKNAMES')) return message.reply('I\'m missing permissions.');
            if (message.author.id === message.guild.ownerID) return message.reply('I can\'t change your nickname because you are the Owner of the server.');

            const memberDisplayName = message.guild.members.cache.get(message.author.id).displayName;

            if (!memberDisplayName.includes('✋✋')) {
                message.member.setNickname(`${memberDisplayName} ✋✋`);
            }
        } catch (err) {
            console.error(err);
        }
    }
}