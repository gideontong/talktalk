// Event Listener for Messages
// Author: Gideon Tong
// 2020 May 01

const Discord = require('discord.js');
const config = require('../../config/config.json');

module.exports = async msg => {
    if (!msg.content.startsWith(config.commands.prefix) || msg.author.bot) return;
    try {
        command = require(`../../commands/${command}.js`);
    } catch {
        console.error(`User attempted to execute ${command} but it wasn't found!`);
    }
}