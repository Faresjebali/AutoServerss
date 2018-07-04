const Discord = require('discord.js'); 
const client = new Discord.Client();

const prefix = '-';
const ownerID = '315848387947790336';
const ownerID2 ='236192758765715456';
const active = new Map();


client.on('ready', () => {
	client.user.setGame(`Serving! [ " ${client.users.size} " ]`);
	 console.log(`servers! [ ${client.guilds.size} ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
    console.log('IM UP')
  });



client.on('message', message =>{
//

//
let args = message.content.slice(prefix.length).trim().split(' ');
let cmd = args.shift().toLowerCase();


if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;

try{

 let ops = {
     ownerID: ownerID,
	 ownerID2:ownerID2,
     active: active,
	 prefix:prefix,
 }
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args, ops);

}catch (e) {
    console.log(e.stack);
}

});

    

client.login('NDU4Mzk1ODk5NDU5MTQxNjMy.DgnCEg.NUZOk3rffCesJQQMGP8aYL7JO_Y');
