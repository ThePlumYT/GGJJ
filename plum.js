const Discord = require('discord.js');
const plum = new Discord.Client();
const config = require("./config.json");

plum.on('ready', () => {
  console.log(`Logged !`);
});

plum.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

plum.on('message', message => {
  if(config.KL.some(word => message.content.toLowerCase().includes(word))){
    message.delete()
  }})

plum.login('NjY4MDkwNjQ3NTcxNTk1Mjc0.XiRS-Q.nlEi39iLJeN9RE7Z4p4cqAOQRlI');
