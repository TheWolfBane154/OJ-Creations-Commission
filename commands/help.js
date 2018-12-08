module.exports.run = (bot, message, args, Discord) => {

let em = new Discord.RichEmbed()
.setTitle("OJ Creations Bot Help menu!")
.setColor("ORANGE")
.setDescription("Commands will be shown here ^-^")
.setFooter("This bot was made by: Bane#3927")

message.channel.send({embed: em})
}
module.exports.help = {
  "name": "help"
}
