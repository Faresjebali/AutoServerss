const Discord = require("discord.js")
exports.run = async (client, message, args, ops) =>{
	var prefix = "-";
	 var choice = args[0];
  if (choice == "paper" || choice == "p") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "scissors") {
      var response = " You chose **scissors** و :v: I won"
    } else if (choice2 == "paper") {
      var response = " You chose **paper** :hand_splayed: Its Draw "
    } else {
      var response = " You chose **rock** :punch:  You won"    
    }
    message.channel.send(response);
  } else if (choice == "rock" || choice == "r") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "paper") {
      var response = " You chose **paper** :hand_splayed: I won"
    } else if (choice2 == "rock") {
      var response = "You chose **rock** :punch: Its Draw "
    } else {
      var response = " You chose **scissors** :v: You won"
    }
    message.channel.send(response);
  } else if (choice == "scissors" || choice == "s") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "paper";
    } else if (numb > 50) {
      var choice2 = "rock";
    } else {
      var choice2 = "scissors";
    }
    if (choice2 == "rock") {
      var response = "You chose **paper** :hand_splayed: I won"
    } else if (choice2 == "scissors") {
      var response = "You chose **scissors** :v: Its Draw"
    } else {
      var response = " You chose **rock** :punch: You won "
    }
    message.channel.send(response);
  } else {
    message.channel.send(`You must use \`${prefix}rps\` <rock|paper|scissors>`);
  }
}