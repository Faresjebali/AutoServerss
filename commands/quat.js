const Discord = require("discord.js")
exports.run = async (client, message, args, ops) =>{
	lconst [channelid, messageid, quotename, ...note] = args.splice(1);
  // I also support "here" as a channelID using this:
  const channel = channelid == "here" ? message.channel : client.channels.get(channelid);
  // I do the same with message ID, which can be "last":
  const message = messageid === "last" ? msg.channel.messages.last(2)[0] : await channel.messages.get(messageid);
  // pretend for a second this is the rest of the function:
  insertInDB(quotename, channel.id, message.id, note.join(" "));
}