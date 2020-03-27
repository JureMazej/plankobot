const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjkyODk4ODMxOTA5NTE5NDEy.Xn1oIQ.6lFYeN_vkWsXVRjMK1Wz4tMQJlM';

bot.on('ready', () =>{
	console.log('Online!');
})

bot.on('message', msg =>{
	if(msg.content === "planko"){
		msg.channel.send('Eminem je pssssssst!');
	}
	else if(msg.content === "Planko"){
		msg.channel.send('Eminem je pssssssst!');
	}
	else if(msg.content === "PLANKO"){
		msg.channel.send('EMINEM JE PSSSSSSSSSSSSSSSSSST!!!!!');
	}
})

bot.login(token);
