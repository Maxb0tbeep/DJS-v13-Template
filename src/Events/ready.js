const Event = require("../Structures/Event.js");
const Client = require("../Structures/Client.js");
const client = new Client();

module.exports = new Event("ready", (client) =>{
    client.user.setActivity(`Look at README.md`, {type : "PLAYING"});
    console.log(`${client.user.tag} is online!`)
});