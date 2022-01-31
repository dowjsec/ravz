const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || message.author

  var cüzdan = db.fetch(`puan_${user.id}`)
  var banka = db.fetch(`bankapara_${user.id}`)

  var toplam = cüzdan + banka
  message.channel.send(new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setAuthor(user.tag, user.avatarURL({ dynamic: true }))
    .setImage("https://c.tenor.com/YpGa3zHYc2EAAAAC/money-gold.gif")
    .addField("Toplam", `${toplam ? toplam + ' Puan' : "0 Puan"}`, true))
}


exports.conf = {
  enabled: true,
  aliases: ["money"],
};

exports.help = {
  name: 'puan',
};