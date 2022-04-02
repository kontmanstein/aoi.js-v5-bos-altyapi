var http = require('http');
var server = http.createServer(function (req, res) {res.write('');res.end();});server.listen(8080);

const aoijs = require("aoi.js");
const fs = require('node:fs');

const bot = new aoijs.Bot({
token: process.env['token'],
prefix: ["prefix1","prefix2","prefix3"],
intents: "all",
database: {
    type: "default",
    path: "./database/",
    tables: ["main"],
    promisify: false
},
});

//Örnek Komut (ping)
bot.command({
name: "ping",
code: `Pong! \`$pingms\``
});

//Komut Yükleyici

const loader = new aoijs.LoadCommands(bot);
(async () => {
await loader.load(bot.cmd, "./komutlar/")
})();

loader.setColors({
  walking: ["blink", "dim", "fgWhite"],
  failedWalking: {
    name: ["bright", "fgYellow", "underline"],
 
    text: ["bright", "fgRed"]
  },
  typeError: {
    command: ["bright", "fgYellow"],
    type: ["fgYellow"],
    text: ["bright", "fgRed"]
  },
  failLoad: {
    command: ["bright", "fgMagenta"],
    type: ["fgRed"],
    text: ["bright", "fgRed"],
  },
  loaded: {
    command: ["bright", "fgCyan"],
    type: ["bright", "fgBlue"],
    text: ["bright", "fgGreen"]
  },
 
});

//eventler
const files = fs.readdirSync('./eventler').filter(file => file.endsWith('.js'))
files.forEach( x => {
require(`./eventler/${x}`)(bot)
});

//ayarlar
require('./işleyici/durum')(bot);
require('./işleyici/değişkenler')(bot);
require('./işleyici/callbacks')(bot);
