const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.startsWith("Chikelu")) {
    	message.channel.send("Time to strangle my prey~");
  	} else

  
  if (message.content.includes("Leo")) {
    message.channel.send("Lion? More like a pesky kitten.");
  } else

  if (message.content.includes("Inari")) {
    message.channel.send("Let that fox burn in her own flames.");
  } else

  if (message.content.includes("knife")) {
    message.channel.send("Oh, a knife? May I see it?");
  } else

  if (message.content.includes("Echo")) {
    message.channel.send("She can be rather... Entertaining.");
  } 

 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
