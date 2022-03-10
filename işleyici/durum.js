module.exports = (bot) => {
    bot.status({
        text: `$serverCount Sunucu | $allMembersCount Kişi | ${bot.prefix}yardım`,
        type: "LISTENING",
        time: 15
    })
}