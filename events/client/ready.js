module.exports = (Discord, client) => {
    console.log('hand-raiser-bot is online.');
    client.channels.cache.get(process.env.CHANNEL_ID_FOR_READY_MESSAGE).send("hand-raiser-bot is online.");
}