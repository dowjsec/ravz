const Discord = require("discord.js");
const db = require('quick.db')
const ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))

  if (!args[0] || !args[1] || isNaN(args[1]) || Number(args[1]) < 0) return message.channel.send(embed.setDescription("Yanlış kullanım! Doğrusu: " + ayarlar.prefix + "puanekle KULLANICI_ID MIKTAR"))

  let user = await client.users.fetch(args[0])
  if (!user) return message.channel.send(embed.setDescription("kullanıcıyı bulamadım"))
  try {
    db.add('puan_' + user.id, args[1])
    message.channel.send(embed.setColor("GREEN").setDescription(user.tag + " kullanıcısına " + args[1] + " puan eklendi"))
  } catch (e) { message.channel.send('hata'), console.error(e) }
}
exports.conf = {
  enabled: true,
  aliases: ["puanekle"],
};

exports.help = {
  name: 'puan-ekle',
}; 