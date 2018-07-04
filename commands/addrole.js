const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {

  //!addrole @andrew Dog Person
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You dont have the Permission `MANAGE_ROLES`");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if (!rMember) return message.channel.send("Specify a Person!");
  let role = args[1]
  //if (!role) return message.chanenl.send("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.channel.send("Couldn't find that role.");


  if (rMember.roles.has(gRole.id)) {
    (rMember.removeRole(gRole.id)); return message.channel.send(`${rMember.user.username}#${rMember.user.discriminator} Removed from <@&${gRole.id}> Role`);
    }else {
    (rMember.addRole(gRole.id)); return message.channel.send(`${rMember.user.username}#${rMember.user.discriminator} Get <@&${gRole.id}> Role`);
    }
}