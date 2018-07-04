const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   let embed_fields = [{
                name: "System info:",
                value: `${process.platform}-${process.arch} with ${process.release.name} version ${process.version.slice(1)}`,
                inline: true
            },
            {
                name: "Process info: PID",
                value: `${process.pid}`,
                inline: true
            },
            {
                name: "Process memory usage:",
                value: `${Math.ceil(process.memoryUsage().heapTotal / 1000000)} MB`,
                inline: true
            },
            {
                name: "System memory usage:",
                value: `${Math.ceil((os.totalmem() - os.freemem()) / 1000000)} of ${Math.ceil(os.totalmem() / 1000000)} MB`,
                inline: true
            },
            {
                name: "Uptime bot:",
                value: `:clock12: ${upTimeOutput}`,
                inline: true
            },
            {
                name: "Uptime computer:",
                value: `:clock1230: ${upTimeOutput2}`,
                inline: true
            },{
                name: 'Lib',
                value: `**Discord.js**`
            }
        ];

        msg.channel.send({
            embed: {
                author: {
                    name: msg.author.username,
                    icon_url: msg.author.avatarUrl,
                    url:'http://google.fr'
                },
                color: 0x00FF00,
                fields: embed_fields
            }
        });


message.channel.send(embed_fields);

}
