module.exports = (bot) => {
    bot.status({
        text: `$serverCount Sunucu | $allMembersCount Kişi | ${bot.prefix}yardım`,
        type: "LISTENING",
        status: "idle",
        time: 15
    });
};
