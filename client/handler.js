// Event Handler for SMH Our Bot
// Author: Gideon Tong
// 2020 May 01

const reqEvent = (event) => require(`./events/${event}`)
module.exports = bot => {
    bot.on("message", reqEvent("message"));
}