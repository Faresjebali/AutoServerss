const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    if(args[0] == "help"){
        message.reply("Usage: !skin<your Minecraft ign)");
         return;
         }

    let command = message.content.split(" ")[0];
              const mcargs = message.content.split(" ").slice(1).join(" ")
      if (!mcargs) return message.channel.send("** Type your skin name **");

      const embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setDescription(`${mcargs}'s Skin\n** **`)
      .setImage(`https://minotar.net/armor/body/${mcargs}`)

  message.channel.send(embed)
      }