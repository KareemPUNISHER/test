const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";
var adminprefix = '$'



client.on('ready',  () => {
    console.log('PUNISHERS BOT By KareemPUNISHER  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });



//امر الكتابه و امبيد

client.on('message', message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// +say
  if (command === "say") {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
          message.delete()
    message.channel.sendMessage(args.join(" "))
  }
  
 

if (command == "em") {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `MANAGE_MESSAGES`' );
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
    
  }


});


//moving chat


client.on("ready", async  => {
setInterval(function(){
client.channels.find( channel => channel.id === '791368577978335262').setName("W");
client.channels.find( channel => channel.id === '791368577978335262').setName("We");
client.channels.find( channel => channel.id === '791368577978335262').setName("Wel");
client.channels.find( channel => channel.id === '791368577978335262').setName("Welc");
client.channels.find( channel => channel.id === '791368577978335262').setName("Welco");
client.channels.find( channel => channel.id === '791368577978335262').setName("Welcom");
client.channels.find( channel => channel.id === '791368577978335262').setName("Welcome");
client.channels.find( channel => channel.id === '791368577978335262').setName("Welcome T");
client.channels.find( channel => channel.id === '791368577978335262').setName("Welcome To");
client.channels.find( channel => channel.id === '791368577978335262').setName("Welcome To E");
client.channels.find( channel => channel.id === '791368577978335262').setName("Welcome To Er");
client.channels.find( channel => channel.id === '791368577978335262').setName("Welcome To Err");
client.channels.find( channel => channel.id === '791368577978335262').setName("Welcome To Erro");
client.channels.find( channel => channel.id === '791368577978335262').setName("Welcome To Error");
client.channels.find( channel => channel.id === '791368577978335262').setName("Welcome To Error U");
client.channels.find( channel => channel.id === '791368577978335262').setName("Welcome To Error Un");
client.channels.find( channel => channel.id === '791368577978335262').setName("Welcome To Error Uni");
client.channels.find( channel => channel.id === '791368577978335262').setName("Welcome To Error Unit");
  }, 3000);
});

//لمعرفه البوت من متى شغال

client.on('message', message => {
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} , ${seconds} sec` + "`**🎛 **");

}
});









client.login(process.env.BOT_TOKEN);
