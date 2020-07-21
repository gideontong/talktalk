const config = require('../../config/config.json');

module.exports = async msg => {
    if (!msg.content.startsWith(config.commands.prefix) || msg.author.bot) return;
    const bot = msg.client;
    const args = msg.content.split(` `);
    const command = args.shift().slice(config.commands.prefix.length);
    try {
        console.log(`Running ${command}...`);
        runCommand = require(`../../commands/${command}.js`);
    } catch {
        console.error(`User attempted to execute ${command} but it wasn't found!`);
    }

    if(runCommand) {
        runCommand(bot, msg, args).catch(err => {
            // do something with errors
        })
    }
}