const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientID, guildID, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder()
		.setName('ping')
		.setDescription('replys with pong'),
	new SlashCommandBuilder()
		.setName('add')
		.setDescription('Adds two Numbers')
		.addIntegerOption(option =>
			option.setName('num1')
				.setDescription('First Number')
				.setRequired(true)
		)
		.addIntegerOption(option =>
			option.setName('num2')
				.setDescription('Second Number')
				.setRequired(true)
		),

]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientID, guildID), { body: commands })
	.then(() => console.log('Registered Commands successfully'))
	.catch(console.error);