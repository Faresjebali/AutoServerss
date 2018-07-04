 
exports.run = (client, message, args, ops) =>{
	 if(args[0] == "help"){
      message.reply("Usage: -me <age> <sex> <location>");
	   return;
	   }
  let age = args[0]; // Remember arrays are 0-based!.
  let sex = args[1];
  let location = args[2];
  message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
  
   
   
}