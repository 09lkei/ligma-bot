const {Events} = require("discord.js");
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});