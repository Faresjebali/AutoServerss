const Discord = require("discord.js");


exports.run = async (bot, message, args) => {
  if (!message.channel.guild) return;
  var IzRo = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setFooter(message.author.username, message.author.avatarURL) 
  .setTitle(':tulip:| Members info')
  .addBlankField(true)
  .addField(':green_book:| Online',
  `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
  .addField(':closed_book:| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
  .addField(':orange_book:| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
  .addField(':notebook:| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
  .addField(':arrow_right:| Server Members',`${message.guild.memberCount}`)
  message.channel.send(IzRo);
  }