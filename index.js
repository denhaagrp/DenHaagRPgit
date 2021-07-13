const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

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

    if(command == `${prefix}solliciteer`){
        var solliembed = new discord.MessageEmbed()
        .setTitle("Solliciteer")
        .setColor("#81d8d0")
        .setFooter(`Requested bij ${message.author}`)
        .setTimestamp()
        .setDescription(`Om te solliciteren bij een overheids baan moet je een sollicitatie maken.
        De link waar je de vragen kan vinden staan hieronder. Succses!`)
        .addFields(
            {name: 'Politie', value: 'https://docs.google.com/forms/d/1dvr6cD6a7H3AmipYwtrm-VhiBwNMo71rzxGSJT3o6Q'},
            {name: 'Ambulance', value: 'https://docs.google.com/forms/d/1YwzsDbHGsO1w4GB-Q4CpDNHvXpbeEe0POdIpx-Lyvgc'},
            {name: 'ANWB', value: 'https://docs.google.com/forms/d/1wE_vn8_t-UU0c9MhdNQjzK_nuA__llNXi3__JX9-zks'},
            {name: 'Taxi', value: 'https://docs.google.com/forms/d/1SnynaAHXv4qoYV0nCSk2VcU3ViJznxkv-InLMBsd8XY'}
        )

        message.channel.send(solliembed)
    }

    if(command == `${prefix}uptime`){
        message.channel.send(`Uptime is \`${(this.client.uptime, { long: true })}\``);
    }

    if(command == `${prefix}ping`){
        const msg = await message.channel.send('Pinging...');

		const latency = msg.createdTimestamp - message.createdTimestamp;
		const response = Math.floor(Math.random());

		msg.edit(`${response} - Bot ping: \`${latency}ms\``);
    }

    if(command == `${prefix}help`){

        var helpembed = new discord.MessageEmbed()
            .setTitle(`Alle commands van de bot`)
            .setColor("#81d8d0")
            .setFooter(`requested door ${message.user}`)
            .setTimestamp()
            .setDescription(`**fun commands**😂
            !sts | Om steen papier schaar te spelen
            
            **hulp commands**📃
            !solliciteer | om informatie te vinden over het soliciteren
            
            **Moderation commands**🔒
            !warn | om een speler te warnen`)
        message.channel.send(helpembed)


    }

    if(command == `${prefix}warn`){
        message.channel.send("🛠️ Deze command is tijdelijk in onderhoud")
        /*const args = message.content.slice(prefix.length).split(/ +/);

        if (!message.member.hasPermission("MOVE_MEMBERS")) return message.reply("Jij hebt geen permissie voor deze command");
        
        if (!args[1]) return message.reply("Geen gebruiker gevonden");

        if (!args[2]) return message.reply("Geef een reden op");

        const warnUser = message.mentions.users.first();

        var warnreden = args.slice(2).join(" ");

        if(!warnUser) return message.reply("Geen gebruiker gevonden");

        if(!warns[warnUser.id]) warns[warnUser.id] = {
            warns: 0
        };

        warns[warnUser.id].warns++; 

        fs.writeFile("./warnings.json", JSON.stringify(warns), (err) =>{
            if(err) console.log(err) 
        });

        var warnembed = new discord.MessageEmbed()
        .setColor("#a71919")
        .setFooter("Bericht door de bot")
        .setTimestamp()
        .setDescription(`**Gewarnd:** ${warnUser} (${warnUser.id})
        **Warning door:** ${message.author}
        **Reden:** ${warnreden}`)
        .addField("Aantal warns", warns[warnUser.id].warns);

    var kanaal = message.member.guild.channels.cache.get("863822802292572201");

    if(!kanaal) return message.reply("Geen logs kanaal gevonden!");

    kanaal.send(warnembed) */
    }

});