const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./CalMeHerman.js')
nocache('../CalMeHerman.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (dha = new WAConnection()) => {
	dha.logger.level = 'warn'
	console.log(color(figlet.textSync('sky bot', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[ HALO SEMUANYA ! ]\n', 'yellow'), color('JANGAN RUSAK SC INI YA', 'yellow'))
	console.log(color('[ UDAH PADA SHOLAT BLM ? ]', 'pink'))
	console.log(color('\n\n[ Hati-Hati Skyw4lkeR77 Mengintai !! ]', 'red'))
	dha.browserDescription = ["Lord Sky Mengintai", "Chrome", "3.0.0"];

	// Menunggu QR
	dha.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('SCAN KODE NYA KODE AKAN ANGUS DALAM WAKTU 20 DETIK !'))
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && dha.loadAuthInfo(`./${setting.sessionName}.json`)
	dha.on('connecting', () => {
		console.log(color('[ 𝐒𝐊𝐘_𝐁𝐎𝐓 ]', 'yellow'), color('PROSES NYAMBUNG...'));
	})
const spinner = { 
  "interval": 120,
  "frames": [
    "H",
    "HE",
    "HER",
    "HERM",
    "HERMAN",
    "HERMAN C",
    "HERMAN CH",
    "HERMAN CHA",
    "HERMAN CHAN",
    "HERMAN CHANE",
    "HERMAN CHANEL",
    "HERMAN CHANEL J",
    "HERMAN CHANEL JA",
    "HERMAN CHANEL JAN",
    "HERMAN CHANEL JAN L",
    "HERMAN CHANEL JAN LU",
    "HERMAN CHANEL JAN LUP",
    "HERMAN CHANEL JAN LUPA",
    "HERMAN CHANEL JAN LUPA S",
    "HERMAN CHANEL JAN LUPA SU",
    "HERMAN CHANEL JAN LUPA SUB",
    "HERMAN CHANEL JAN LUPA SUBS",
    "HERMAN CHANEL JAN LUPA SUBSC",
    "HERMAN CHANEL JAN LUPA SUBSCR",
    "HERMAN CHANEL JAN LUPA SUBSCRI",
    "HERMAN CHANEL JAN LUPA SUBSCRIB",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE G",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K S",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SU",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUB",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS N",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS NG",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS NGA",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS NGAB",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS NGAB B",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS NGAB BS",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS NGAB BSA",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS NGAB BSA L",
    "HERMAN CHANEL JAN LUPA SUBSCRIBE GO 1K SUBS NGAB BSA LH"
  ]}

	//connect
	dha.on('open', () => {
		console.log(color('[ 𝐒𝐊𝐘_𝐁𝐎𝐓 ]', 'yellow'), color('BOT SUDAH AKTIF'));
	})

	// session
	await dha.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(dha.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	dha.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	dha.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	dha.on('group-participants-update', async (anu) => {
		await welcome(dha, anu)
	})

	dha.on('chat-update', async (message) => {
		require('./CalMeHerman.js')(dha, message)
	})
}

starts()