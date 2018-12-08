const Discord = require("discord.js");
var bot = new Discord.Client();
const fs = require("fs");
var prefix = "!";

bot.commands = new Discord.Collection()

fs.readdir("./commands/", (err, files) => {
  console.log("Loading commands...");
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  });
});

bot.on("ready", () => {
console.log("Alive boi")
})



bot.login(process.env.Token)
