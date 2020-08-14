const config = require('../config/config.json');
const dictionary = require('../config/dictionary.json');

module.exports = async(bot, msg, args) => {
    const adjective = choose(dictionary.adjectives);
    const bible = choose(dictionary.bible);
    const place = choose(dictionary.places);
    const url = config.podcast.video + adjective + bible + "In" + place;
    
    msg.channel.send("Here's your new meeting: " + url);
}

function choose(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}