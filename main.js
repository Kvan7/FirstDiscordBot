// import keys from "./secret.js";
// var privateKeys = JSON.parse("secret.json");
// console.log(process.env.DISCORD_TOKEN.slice(2));

const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const prefix = '$';

function dec2bin(dec) {
	return (dec >>> 0).toString(2);
}



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
	} else if (commandName === 'to-binary') {
		const number = options.getString('number');
		const base = options.getInteger('base');
		if (base === null) {
			interaction.reply({
				content: `${number} in binary is: ${dec2bin(parseInt(number, 10))}`,
				ephemeral: true,
			})
		} else {
			interaction.reply({
				content: `${number} with base ${base} in binary is: ${parseInt(number, base).toString(2)}`,
				ephemeral: true,
			})
		}
	} else if (commandName === 'to-hex') {
		const number = options.getString('number');
		const base = options.getInteger('base');
		if (base === null) {
			interaction.reply({
				content: `${number} in binary is: ${parseInt(number, 10).toString(16)}`,
				ephemeral: true,
			})
		} else {
			interaction.reply({
				content: `${number} with base ${base} in hex is: ${parseInt(number, base).toString(16)}`,
				ephemeral: true,
			})
		}
	} else if (commandName === 'to-decimal') {
		const number = options.getString('number');
		const base = options.getInteger('base');
		interaction.reply({
			content: `${number} with base ${base} in decimal is: ${parseInt(number, base).toString(10)}`,
			ephemeral: true,
		})

	}

});




client.login(token);
// client.login(process.env.DISCORD_TOKEN);

