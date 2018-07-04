exports.run = async (client, message, args, ops) =>{
    let sides = [ 'heads', 'tails' ];

message.channel.send(`The coin landed on __**${sides[~~(Math.random() * sides.length)]}!**__`);

}