const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("test")
        .setDescription("cool"),
    async execute(interaction){
        await interaction.reply("you smell like you farded!!");
    },
};

