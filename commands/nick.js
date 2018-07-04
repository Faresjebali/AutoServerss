const Discord = require("discord.js")
exports.run = (client, message, args, ops) =>{
   client.user.setUsername(args).then(user => message.reply(`My new nickname is ${user.username}!`))
}