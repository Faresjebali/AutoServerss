const Discord = require("discord.js")
exports.run = (client, message, args) =>{
 
    if(!message.channel.guild) return;
  if(message.content < 1023) return
  const Embed11 = new Discord.RichEmbed()
 let uptime = client.uptime;

let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let notCompleted = true;

while (notCompleted) {

    if (uptime >= 8.64e+7) {

        days++;
        uptime -= 8.64e+7;

    } else if (uptime >= 3.6e+6) {

        hours++;
        uptime -= 3.6e+6;

    } else if (uptime >= 60000) {

        minutes++;
        uptime -= 60000;

    } else if (uptime >= 1000) {
        seconds++;
        uptime -= 1000;

    }

    if (uptime < 1000)  notCompleted = false;

}
let ms = 1000;
let v1 = new Discord.RichEmbed()
v1.setTimestamp(new Date())
v1.setColor("RED")
v1.setDescription('***__ Collecting Data __***')
v1.setFooter("# | BetaBot |") 
let heroo = new Discord.RichEmbed()
.setColor('RANDOM')
.setTimestamp(new Date())
.setThumbnail(client.user.avatarURL)
.setAuthor(client.user.username,client.user.avatarURL)

.addField("Prefix:","**[-]**",true)
.addField("Guilds :","**[ "+client.guilds.size+" ]**",true)
.addField("Channels :","**[ "+client.channels.size+" ]**",true)
.addField("Users :","**[ "+client.users.size+" ]**",true)
.addField("MyName : ","**[ "+client.user.username+" ]**",true)
.addField("MyID :","**[ "+client.user.id+" ]**",true)
.addField("RamUsage :",`**[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]**`,true)
.addField("UpTime :",`**[** **Days:** \`${days}\` **Hours:** \`${hours}\` **Minutes:** \`${minutes}\` **Seconds:** \`${seconds}\` **]**`,true)
.setFooter("ThaWither#1360")
message.channel.send({embed:v1}).then(m => m.edit({embed:heroo})),ms; 
}
