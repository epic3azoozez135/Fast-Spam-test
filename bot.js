const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', async() => {
var server = "411591887384739841"; // ايدي السررفر
var channel = "411591887384739843";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**- SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM - SoM **')
    },305);
})

client.login(process.env.BOT_TOKEN);
