const Discord = require("discord.js");
exports.run = async (client, message, args) =>{
const embed = new Discord.RichEmbed()
  .setTitle("BetaBot List Command")
  .setAuthor("T1", "https://i.imgur.com/lm8s41J.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("General commands")
 .addField("-Bot","Info About BetaBot");
  
  
  
  .setFooter("BetaBot || Witherr#1360", "https://media.discordapp.net/attachments/456130321415536651/458096684623200265/beta-symbol-letter-greek-alphabet-3-512.png?width=430&height=430")
  .setThumbnail("https://media.discordapp.net/attachments/456130321415536651/458096684623200265/beta-symbol-letter-greek-alphabet-3-512.png?width=430&height=430")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("T4","This is a field value, it can hold 2048 characters.")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("T5", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("T6", true);

  message.channel.send({embed});
}