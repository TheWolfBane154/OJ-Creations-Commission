module.exports.run = (bot, message, args, Discord) => {
let em = new Discord.RichEmbed()
.setTitle("Commands List")
.setDescription("My commands live here!")
.addField("Contact:", "Use this command to contact the Developer")
.addField("Eval:", "🕵 Owner only: This evaluates Javascript strings.")
.addField("Help:", "Shows this message here")
.setColor("GREEN")
message.channel.send({embed: em})
}
module.exports.help = {
  name: "help"
  }
