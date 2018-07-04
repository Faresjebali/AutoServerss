const Discord = require("discord.js");
exports.run = async (client, message, args, ops) =>{
	message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Bot's Commands",
    url: "http://google.com",
    description: "General commands",
    fields: [{
        name: "id",
        value: "  Shows your ID :id:"
      },
	  {
        name: "-avatar ",
        value: "Pictures of the chosen person :round_pushpin: "
      },
      {
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Example"
    }
  }
});
}