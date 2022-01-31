const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
   message.inlineReply(`https://discord.gg/magicverse`)
}

module.exports.conf = {
   aliases: ["dav", "d"]
}

module.exports.help = {
   name: "davet"
} 