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
    message.channel.send(`Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }
});

client.login(process.env["token"]);