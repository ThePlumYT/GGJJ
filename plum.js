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
    message.reply("พิมคำหยาบไม่น่ารักเลยน่ะ หนูลบให้แล้วน่ะค่ะ ***อาจจะมีบัคในมือถือ คือ เมื่อผู้พิมพ์คนใดคนหนึ่งพิมพ์คำหยาบมานั้น แต่ในแชทของผู้พิมพ์อาจไม่ถูกลบ แต่ผู้ใช้คนอื่นที่อยุ่ในแชทเดียวกันจะไม่เห็นอย่างแน่นอนจ้า")
  }})

plum.login(process.env.BOT_TOKEN);
