module.exports.run(bot, message, args, Discord) => {
let server = message.guild
let number = Math.floor(Math.random) * 1000

let em = new Discord.RichEmbed()
.setTitle("Ticket Created")
.setDescription("Think you for createing an offer for a product!")
.addField("Ticket number:", number)
.setColor("ORANGE")

message.channel.send({embed: em})
server.createChannel(text, number)
}

module.exports.help = {
  "name": "newticket"
}
