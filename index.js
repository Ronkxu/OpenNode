const mySecret = process.env['token']
const { Client, Intents } = require("discord.js");
const prefix = require('discord-prefix');
let defaultPrefix = '?';

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", () => {
  console.log("OpenNode is working");
});

client.on('message', message => {
  if (message.content === defaultPrefix+'ping') {  
    message.channel.send(`Pong! in ${Date.now() - message.createdTimestamp}ms`);
  }
});

client.login(process.env["token"]);