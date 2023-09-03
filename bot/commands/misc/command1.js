const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("bye")
        .setDescription("cool"),
    async execute(interaction){
        await interaction.reply("you smell like you farded!!");
    },
};

