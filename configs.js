const chalk = require("chalk")
const fs = require("fs")


//—————「 Set Image Url 」—————//
global.gura = "https://telegra.ph/file/bfc156f07ea953371b052.png"
global.game = "https://telegra.ph/file/ce42fe200ad35b3eea774.png"

//—————「 Set Nama Bot & Own 」—————//
global.botname = "GawrGura"
global.ownername = 'MannHost'
global.ownerNumber = ["62895329828237@s.whatsapp.net"]
global.creator = "62895329828237@s.whatsapp.net"
global.versionsc = "1.0.0"
global.prefa = ['', '.']
global.hituet = 0
global.running = "𝐏𝐭𝐞𝐫𝐨𝐝𝐚𝐜𝐭𝐲𝐥"
global.linkgc = "https://chat.whatsapp.com/Gvpu8dNCzYxEZ4W7KKXckP"

//—————「 Set Owner 」—————//
global.owner = ['62895329828237']
global.ownernomer = "62895329828237"
global.ownernumber = '62895329828237'
global.dana = '089509419214'
global.gopay = '089509419214'
global.allpay = 'TERSEDIA'
global.ovo = 'TDK TERSEDIA'

//—————「 Send panel 」—————————//
global.domain = '-' // isi domain lu
global.pikey = '-' // isi apikey ptla lu
global.capikey = '-' // isi apiket ptlc lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

//—————「 Set Apikey 」—————————//
global.lol = 'haikalgans'
global.xzn = 'haikalgans'
global.APls = {
	alfa: 'https://api.zahwazein.xyz'
}
global.APIKeys = {
	'https://api.zahwazein.xyz': 'UWtTUH6RXjxQQDm',
}
global.API = {
	alfa: 'https://api.zahwazein.xyz',
}

global.lol = 'haikalgans' // : https://api.lolhuman.xyz 
global.keyopenai = `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` // : https://platform.openai.com
global.apikey = "zenzkey_1d1f56b45d"
global.sessionName = "MannHX"

//—————「 Set Wm 」—————————//
global.themeemoji = '🐬'
global.wm = "GawrGura"
global.packname = "Created By"
global.author = "MannHost"

//—————「 Set Image 」————————//
global.thumb = fs.readFileSync("./image/gura.jpg")
global.logo = fs.readFileSync("./image/logo.jpg")

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Message 」——————//
global.mess = {
done: 'Done✅',
success: 'Done✅',
admin: 'Fitur Ini Khusus Admin Grup Kak :P',
botAdmin: 'Jadikan Bot Admin Terlebih Dahulu Kak :D',
owner: 'Fitur Ini Khusus Owner Bot Kak :P',
group: 'Cuma Bisa Di Gunakan, Di Dalam Grup Kak :P',
endLimit: 'Limit Kamu Habis Kak :P',
prem: 'Fitur Ini Khusus User Prem Kak :P',
spesial: 'Fitur  Ini Khusus User Special Kak :D',
wait: 'Lagi Diproses Ya Kak :P',
}

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})