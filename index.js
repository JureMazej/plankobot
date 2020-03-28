
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjkyODk4ODMxOTA5NTE5NDEy.Xn1qUA.KykIw4nOsdUm5Ro2_uifIRaA4ko';

const translate = require('@vitalets/google-translate-api');
translate.languages['sl'] = 'sl';


function processFile(molitev){

  	var randint = (Math.floor(Math.random() * 100)).toString();
  	while (randint > 100){
  		randint = (Math.floor(Math.random() * 100)).toString();
  	}
  	console.log(randint);
  	var firstnumber = molitev.indexOf(randint);
  	var nextnumber = molitev.indexOf((parseInt(randint) + 1).toString());

  	var res = molitev.substring(firstnumber, nextnumber);
  	
  	return res;
}




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
	else if(msg.content === "!moliteb"){
		const fs = require('fs');
		var molitev;  
		fs.readFile('molitve.txt', (err, data) => { 
	  		molitev = data.toString();
		  	molitev = processFile(molitev);
		  	translate(molitev, {to: 'sl'}).then(res => {
   				msg.channel.send(res.text);
			});
		})
	}

})






bot.login(token);
