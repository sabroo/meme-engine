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
      message.channel.send("There's my darling kitty~");
  } else
      
  if (message.content.includes("Hey, who are you?")) {
      message.channel.send("My name is Vinh, I'm the villain sent by Tofulife.");
  } else
      
  if (message.content.includes("Am I pretty Vinh")) {
      message.channel.send("Not as pretty as my knife sliding across your flawless skin <3.");
  } else
      
  if (message.content.includes("Eliana")) {
      message.channel.send("Mon Amour~");
  } else
      
  if (message.content.includes("eat me")) {
      message.channel.send("Would you prefer to be sauteed or baked?");
  } else
      
  if (message.content.includes("satan")) {
      message.channel.send("You called?");
  } else
      
  if (message.content.includes("v_give :knife:")) {
      message.channel.send("*grabby hands*");
  }
 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
