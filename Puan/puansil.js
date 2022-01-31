const Discord = require("discord.js");
const db = require('quick.db')
const ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
  db.all().forEach(x => db.delete(x))
}


exports.conf = {
  enabled: true,
  aliases: ["sifirla"],
};

exports.help = {
  name: 'puan-sil',
};
