const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {
    let puan = db.all().filter(data => data.ID.startsWith(`puan`)).sort((a, b) => b.data - a.data)
    puan.length = 10;
    var finalLb = "";
    for (var i in puan) {
      finalLb += `**${puan.indexOf(puan[i])+1}. <@${client.users.cache.get(puan[i].ID.split('_')[1]).id}>** - ${puan[i].data} \n`;
    }
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Leaderboard!`, message.guild.iconURL())
    .setColor("#7289da")
    .setDescription(finalLb)
    .setTimestamp()
    message.channel.send(embed);

}


exports.conf = {
    enabled: true,
    aliases: ["lb"],
};

exports.help = {
    name: 'leaderboard',
};
