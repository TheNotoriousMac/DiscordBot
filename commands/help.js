module.exports = {
    name: "help",
    description: "help command",
    execute(bot, channelId) {
        main = require("../helperFunctions.js"); 
        const fs = require('fs');
        const version = "2019-12-21 9:58"

        function displayHelp(cId, bot) {
            //load command list from file (Command List) and display them
            fs.readFile('Command List', 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                    throw err;
                }
                main.sendMsg(bot, cId, "Version: "+version);
                main.sendMsg(bot, cId, data.replace(/!/g, ""));
            });
        }
        displayHelp(channelId, bot);
    } 
}
