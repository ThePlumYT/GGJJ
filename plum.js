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
    message.reply("พิมคำหยาบไม่น่ารักเลยน่ะ หนูลบให้แล้วน่ะค่ะ  ***ถ้าเกิดพิมพ์ในมือถือมีสิทธิที่ตนเองจะเห็นคำหยาบอยู่ในแชทน่ะ แต่จริงๆแล้วผู้อื่นจะมองไม่เห็น")
    message.delete()
    
  }})

plum.login(process.env.BOT_TOKEN);
