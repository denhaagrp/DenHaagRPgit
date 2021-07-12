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

    if(command == `${prefix}test`){
        return message.channel.send("Check")
    }

    if(command == `${prefix}uptime`){
        message.channel.send(`Uptime is \`${ms(this.client.uptime, { long: true })}\``);
    }

    if(command == `${prefix}ping`){
        const msg = await message.channel.send('Pinging...');

		const latency = msg.createdTimestamp - message.createdTimestamp;
		const choices = ['Is this really my ping?', 'Is this okay? I can\'t look!', 'I hope it isn\'t bad!'];
		const response = choices[Math.floor(Math.random() * choices.length)];

		msg.edit(`${response} - Bot ping: \`${latency}ms\``);
    }

    if(command == `${prefix}help`){

        var helpembed = new discord.MessageEmbed()
            .setTitle(`Alle commands van de bot`)
            .setColor("#81d8d0")
            .setFooter(`requested door ${message.user.tag}`)
            .setTimestamp()
            .setDescription(`**fun commands**😂
            '!sts' Om steen papier schaar te spelen
            
            **hulp commands**📃
            '!solliciteer' om informatie te vinden over het soliciteren
            
            **Moderation commands**🔒
            '!warn' om een speler te warnen`)
        message.channel.send(helpembed)


    }

});