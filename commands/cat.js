const Discord = require("discord.js");
const superagent = require("superagent");
const send = require("quick.hook");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`https://nekos.life/api/lewd/neko`);
    if (!message.channel.nsfw) return message.reply("You can use this command only on nsfw channels!");

    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("#ff9900")
    .setTitle("Why does someone use a command like this?")
    .setImage(body.c)
    .setFooter("Bot Version: 1.0.1");

    message.channel.send(hentaiEmbed);

}