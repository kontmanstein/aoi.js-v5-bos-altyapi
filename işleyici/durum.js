/*
 Status = {
  {@text} : string | number,
  {@type} : "PLAYING" | "playing" | "STREAMING" | "streaming" | "WATCHING" | "watching" | "LISTENING" | "listening",
  {@time} : number,
  {@status?} : "online" | "offline" | "idle" | "dnd",
  {@url?} : string,
  {@shardId?} : number | Array<number> 
 }
 returns Array<Status>
*/

module.exports = (bot) => [
    {
    text: `$serverCount Sunucu | $allMembersCount Kişi | ${bot.prefix.toString().split(',').join(', ') + " "}yardım`,
    type: "LISTENING",
    status: "idle",
    time: 15
    },
    {
    text : "Seni",
    type : "WATCHING",
    status: "idle",
    time : 15
    }
];
