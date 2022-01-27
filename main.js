// import keys from "./secret.js";
// var privateKeys = JSON.parse("secret.json");
// console.log(process.env.DISCORD_TOKEN.slice(2));

const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const prefix = '$';

client.once('ready', () => {
	console.log('First Bot is Online');
});

// Test if change on original

client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand) return;

	const { commandName, options } = interaction;

	if (commandName === 'ping') {
		interaction.reply({
			content: 'pong',
			ephemeral: true,
		})
	} else if (commandName === 'add') {
		const num1 = options.getInteger('num1');
		const num2 = options.getInteger('num2');
		interaction.reply({
			content: `The sum is ${num1 + num2}`,
			ephemeral: true,
		})
	}

});




client.login(token);
// client.login(process.env.DISCORD_TOKEN);

