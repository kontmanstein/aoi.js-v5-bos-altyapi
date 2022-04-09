var http = require('http');
var server = http.createServer(function (req, res) {res.write('');res.end();});server.listen(8080);

const aoijs = require("aoi.js");
const fs = require('node:fs');

const bot = new aoijs.Bot({
token: process.env['token'],
prefix: ["prefix1", "prefix2", "prefix3"],
intents: "all",
database: {
    type: "default",
    path: "./database/",
    tables: ["main"],
    promisify: false
},
cache: {
  users: 100,
  messages: 10,
  presences : 0,
  guildEmojis : 0,
  guildStickers : 0
}
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
loader.setColors( loader.themes.default );

//eventler
const files = fs.readdirSync('./eventler').filter(file => file.endsWith('.js'))
files.forEach( x => {
require(`./eventler/${x}`)(bot)
});

//ayarlar
const durum = require('./işleyici/durum')(bot);
const değişkenler = require('./işleyici/değişkenler');
require('./işleyici/callbacks')(bot);

//durum
bot.status ( ...durum );

//değişkenler
bot.variables( ...değişkenler );
