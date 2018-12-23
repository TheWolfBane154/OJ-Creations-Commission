module.exports.run = (bot, message, args, Discord) => {
let joinargs = args.join(" ")

let em = new Discord.RichEmbed()
.setTitle("Contacting Owner")
.setDescription(`Contacting owner for reason: ${joinargs}`)
.setColor("BLUE")
message.channel.send({embed: em})

let emb = new Discord.RichEmbed()
.setTitle("You got mail")
.setDescription(`Message from ${message.author.username}, ID: ${message.author.id}`)
.addField("Reason for contact:", joinargs)
.setColor("GREEN")

bot.users.get("513103852409716736").send({embed: emb})

}

module.exports.help = {
  name: "contact"
  }
