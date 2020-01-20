const Discord = require('discord.js');
const plum = new Discord.Client();
const config = require("./config.json");

plum.on('ready', () => {
  console.log(`Logged !`);
  plum.user.setActivity('พิมพ์ /plum เพื่อดูข้อมูล');
  
});

plum.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

plum.on('message', msg => {
  if (msg.content === '/plum') {
    msg.reply('ดิฉันเป็นบอทแบนคำหยาบน่ะ ***ถ้าเกิดพิมพ์ในมือถือมีสิทธิที่ตนเองจะเห็นคำหยาบอยู่ในแชทน่ะ แต่จริงๆแล้วผู้อื่นจะมองไม่เห็น');
  }
});

plum.on('message', message => {
  if(config.KL.some(word => message.content.toLowerCase().includes(word))){
    message.delete()
    message.reply("พิมคำหยาบไม่น่ารักเลยน่ะ หนูลบให้แล้วน่ะค่ะ พิมพ์ /plum ดูข้อมูลเพิ่มเติม")
    message.delete()
    
  }})

plum.login(process.env.BOT_TOKEN);
