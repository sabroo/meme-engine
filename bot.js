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

  if (message.content.includes("Echo")) {
    message.channel.send("She can be rather... Entertaining.");
  } else
      
  if (message.content.includes("step on me vinh")) {
     message.channel.send("With pleasure.");
  } else
      
  if (message.content.includes("Kitty")) {
      message.channel.send("There's my darling kitten~");
  }

 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
