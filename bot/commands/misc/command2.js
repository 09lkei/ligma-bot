const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test2')
        .setDescription('Provides information about the user.'),
    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        await interaction.reply(`you ${interaction.user.username}, ${interaction.user.username} ${interaction.user.username} ${interaction.user.username} ${interaction.member.joinedAt}.`);
    },
};