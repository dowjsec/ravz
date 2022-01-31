const Discord = require("discord.js");
const { prefix, bot } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD"))
        return message.reply("**YETERSİZ YETKİ!**");
    let pixelien = message.mentions.channels.first();
    if (!pixelien) return message.reply("**Bir Kanal Etiketlemen Gerek!**");
    let parker = args.slice(1).join(" ");
    if (!parker) return message.reply("**Ne Duyurusu Yapılacak Yazman Gerek!**");

    let cse = new Discord.MessageEmbed()
        .setTitle("Magicverse")
        .setThumbnail("https://cdn.discordapp.com/avatars/936237271303200808/336bb9aa55ce146794ebe8488f23c56a.png?size=1024")
        .setColor("BLACK")
        .setDescription(`${parker}`)
        .setTimestamp()
    pixelien.send(cse);
    setTimeout(() => {
        pixelien.send("@everyone").then(csmm => {
            csmm.delete({ timeout: 200 });
        });
    }, 2000);
};
module.exports.conf = {
    aliases: []
};

module.exports.help = {
    name: "duyuru"
};