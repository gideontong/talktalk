const Discord = require('discord.js');
const config = require('../config/config.json');
const dictionary = require('../config/dictionary.json');

module.exports = async(bot, msg, args) => {
    url = ''.join([config.podcast.video,
        random.choice(dictionary.adjectives),
        random.choice(dictionary.bible),
        "In", random.choice(dictionary.places)]);
    
    msg.channel.send("Here's your new meeting: " + url);
    console.log("New video meeting generated at " + url);
}