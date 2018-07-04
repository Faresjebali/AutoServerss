module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('KICK_MEMBER')) return      message.channel.send('**Unfortunately you do not have permission**' );
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("mention person");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send("This person got kicked from the server : " + mention.tag);
}