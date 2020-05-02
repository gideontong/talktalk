// Main Runtime for SMH OUR Bot
// Author: Gideon Tong
// 2020 May 01

const Discord = require('discord.js');
const client = new Discord.Client();

const secrets = require("./config/secrets.json");

require('./handlers/handler.js')(bot);

client.once('ready', () => {
	console.log('Ready!');
});

client.login(secrets.token);