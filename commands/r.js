const Discord = require("discord.js")
exports.run = (client, message, args, ops) =>{
    if (message.author.id !== ops.ownerID2 |ops.opwnerID) return message.channel.send('Soory, Only The Bot Owner Can Use this command');

	
    try{
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    }catch (e){
        return message.channel.send(`Unable to reload : ${args[0]}`);
    }
    message.channel.send(`Successfully Reloaded: **${args[0]}**`);
}