const Discord = require("discord.js");
exports.run = async (client, message, args, ops) =>{
	 var embedhelpmember = new Discord.RichEmbed()    
      .setTitle("**List of Commands**\n") // sets the title to List of Commands
            .addField(" - help", "Displays this message (Correct usage: *help)") // sets the first field to explain the command *help
            .addField(" - info", "Tells info about myself :grin:") // sets the field information about the command *info
            .addField(" -stats","Shows The Bot stats")
            .addField(" - ping", "Tests your ping (Correct usage: *ping)")
            .addField(" -Report","Report a member (correct usage : *report @person reason ")
            .addField(" - avatar","It will get your Discord Picture")
            .addField(" -acc","Get Your Account Full information")
            .addField(" -member","Status of members ")
            .addField(" -roles","See The servers Roles")
            .addField(" -server","Get information about The Server")
            .addField(" -Mcskin","Shows your minecraft skin")
     .setFooter("ThaWither#1360") // sets a embed box to the var embedhelpadmin
 var embedhelpadmin = new Discord.RichEmbed()
            .setTitle("**List of Admin Commands**\n") // sets the title
            .addField(" - say", "Makes the bot say whatever you want (Correct usage: *say [message])")
            .addField(" - mute", "Mutes a desired member with a reason (Correct usage: *mute @username [reason])") // sets a field
            .addField(" - unmute", "Unmutes a muted player (Correct usage: *unmute @username)")
            .addField(" - kick", "Kicks a desired member with a reason (Correct usage: *kick @username [reason])")
            .addField("- bc ","For Broadcast all your Server")
            .addField(" -clear","Clear Chat")  
            .addField(" -staffsquad","Special For New Recruitments (only owners)")
            .addField(" -partner","Special For New Partners (only owners)")
            .addField(" -welcome","Special Command (only owners) ")
            .setColor(0xFF0000) // sets a color
            .setFooter("Ooo, an admin!")
message.channel.send(embedhelpmember);
if(message.member.roles.some(r=>["Staff"].includes(r.name)) ) return message.channel.send(embedhelpadmin);
}
