const ytdl = require('ytdl-core');
 
exports.run = async (client, message, args, ops) => {
 if (!message.member.voiceChannel) {
    return message.channel.send(`**You have to join a Voice Channel first!**`)
  }
 
  if(!args[0]) return message.channel.send(`**Please provide a link!**`)
 
  let validate = await ytdl.validateURL(args[0]);
 
  if(!validate) return message.channel.send(`**Couldnt find the Video. Please provide a valid Link.**`)
 
  let info = await ytdl.getInfo(args[0]);
  let data = ops.active.get(message.guild.id) || {};
 
  if(!data.connection) data.connection = await message.member.voiceChannel.join();
  if(!data.queue) data.queue = [];
  data.guildID = message.guild.id;
 
  data.queue.push({
    songTitle: info.title,
    requester: message.author.tag,
    url: `${args[0]}`,
    announceChannel: message.channel.id
  });
 
  if(!data.dispatcher) play(client, ops, data);
  else {
    message.channel.send(`**Added to Queue: ${info.title} | Requested by: @${message.author.tag}**`);
  }
  ops.active.set(message.guild.id, data);
 
async function play() {
  client.channels.get(data.queue[0].announceChannel).send(`**Now playing: ${data.queue[0].songTitle} | Requested by: ${data.queue[0].requester}**`);
  data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { audioonly: true }));
  data.dispatcher.guildID = data.guildID;
  data.dispatcher.setVolume(3/100);
  client.user.setGame(`${data.queue[0].songTitle}`, 'https://twitch.tv/zentreax');
  data.dispatcher.once('end', function() {
    finish(client, ops, this);
  });
}
 
function finish(client, ops, dispatcher) {
  let fetched = ops.active.get(dispatcher.guildID);
  fetched.queue.shift();
  if(fetched.queue.length > 0) {
    ops.active.set(dispatcher.guildID, fetched);
    play(client, ops, fetched);
  } else {
    ops.active.delete(dispatcher.guildID);
    let vc = client.guilds.get(dispatcher.guildID).me.voiceChannel;
    if(vc) vc.leave();
    client.user.setGame("prefix (-) | #development");
  }
}
}
