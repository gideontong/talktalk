const Discord = require('discord.js');
const client = new Discord.Client();

const secrets = require("./config/secrets.json");

client.once('ready', () => {
	console.log('Ready!');
});

client.login(secrets.token);