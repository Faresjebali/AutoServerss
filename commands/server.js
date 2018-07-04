const Discord = require("discord.js");
const dateformat = require("dateformat");

module.exports.run = async (client, message, args) => {
const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const noww = new Date();
    dateformat(noww, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const createdAt = millis / 1000 / 60 / 60 / 24;
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField(`${message.guild.name}`,`\`\`${createdAt.toFixed(0)} days ago \`\``)
    .addField(':globe_with_meridians:** Server type**',`[** __${message.guild.region}__ **]`,true)
    .addField(':medal:** __Roles__**',`[** __${message.guild.roles.size}__ **]`,true)
    .addField(':red_circle:**__ Number of members __**',`[** __${message.guild.memberCount}__ **]`,true)
    .addField(':large_blue_circle:**__ Number of members online __**',`[** __${message.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField(':pencil:**__  Text channels __**',`[** __${message.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField(':microphone:**__  Voice channels __**',`[** __${message.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField(':crown:**__  Owner __**',`**${message.guild.owner}**`,true)
    .addField(':id:**__  Owner ID __**',`**${message.guild.id}**`,true)
    message.channel.send({embed:embed});

}

