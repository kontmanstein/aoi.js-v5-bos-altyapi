module.exports = (bot) => {
    process.on('unhandledRejection', (reason, p) => {
        console.log('[hataAyıklayıcı] :: İşlenmeyen Reddetme/Yakalama');
        console.log(reason, p);
    });
    process.on("uncaughtException", (err, origin) => {
        console.log('[hataAyıklayıcı] :: Yakalanmayan İstisna/Yakalama');
        console.log(err, origin);
    }); process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log('[hataAyıklayıcı] :: Yakalanmayan İstisna/Yakalama (MONİTÖR)');
        console.log(err, origin);
    });
    process.on('multipleResolves', (type, promise, reason) => {
        console.log('[hataAyıklayıcı] :: Çoklu Çözümler');
    });
}