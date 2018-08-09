const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.startsWith("BOI")) {
    	message.channel.send("DONT FUCK WITH ME!!!! I HAVE THE POWER OF GOD AND ANIME ON MY SIDE!!!");
  	} else

  
  if (message.content.includes("anime")) {
    message.channel.send("Naruto is not an anime it is ART");
  } else

  if (message.content.includes("max")) {
    message.channel.send("bitch who?");
  } else

  if (message.content.includes("vapes")) {
    message.channel.send("Not in my good Christian Discord");
  } else
      
  if (message.content.includes("TEA")) {
     message.channel.send("It's pipin' hot");
  } else
      
  if (message.content.includes("M'lady")) {
      message.channel.send("*tips fedora*");
  } else
      
  if (message.content.includes("DOG")) {
      message.channel.send("MY MOODS LIVE ON THAT SWING SAME");
  } else
      
  if (message.content.includes("GRIPS")) {
      message.channel.send("PUSH ME, PUSH ME HARDER");
  } else
      
  if (message.content.includes("TWO")) {
      message.channel.send("PUSH ME, PUSH ME SWANG INTO TOMORRA");
  } else
      
  if (message.content.includes("What's the best vine?")) {
      message.channel.send("Dog Grips 2");
  } else
      
   if (message.content.includes("REBECCA")) {
       message.channel.send("I WONT HESITATE BITCH");
   }
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
