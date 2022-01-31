const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  ayarlar.prefix || db.fetch(`prefix_${message.guild.id}`);

  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(
          "**Bu Komutu Kullanabilmek İçin `Mesajları Yönet` Yetkisine Sahip Olmalısın !**"
        )
        .setColor("GREEN")
    );

  let sil = args[0];

  if (!sil) {
    const parker = new Discord.MessageEmbed()
      .setAuthor("o kadar mesajı malesef silemem")
      .setDescription(
        `**Sadece 1-100 Adet Mesaj silebilirim ! \nMisal; ${ayarlar.prefix}sil 10**`
      )
      .setColor("BLUE");
    message.channel.send(parker);
  }

  message.channel.bulkDelete(sil).then(() => {
    message.channel.send(`Başarıyla \`${sil}\` Adet Mesaj Sildim. `);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["temizle"],
  permlvl: 0
};

exports.help = {
  name: "sil"
};