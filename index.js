const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const client = new discord.Client();
client.login(process.env.token);

client.on("ready", async () => {

    console.log(`${client.user.username} is gestart`);
    client.user.setActivity('DenHaagRP', { type: "PLAYING"}).catch(console.error)

});

client.on("message", async message =>{

    if(message.author.bot) return;

    if(message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if(command == `${prefix}hallo`){
        return message.channel.send("Hoi!")
    }

    if(command == `${prefix}boe`){
        return message.channel.send("schrik")
    }
});