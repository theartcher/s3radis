/* eslint-disable no-mixed-spaces-and-tabs */
const { discordSecret } = require('./config.json')
const Discord = require('discord.js');
const client = new Discord.Client();
client.once('ready', () => {
	console.log('Ready to work, chief.')
})	
;
//Bot Status
client.on('ready', () => {
	client.user.setActivity('⚙️ Processing incoming requests....')
})
//version History
client.on('message', message => {
	if (message.content === '/version') {
	message.channel.send('`Currently Running Seradys Beta V1.1`');
}
});

//Prefix Say
client.on('message', message => {
	if (message.content === `<@664125197921550356>`) {
	message.channel.send('My Prefix is `/` Do `/commands` for my commands list and have fun!');
}
});
//https://cdn.discordapp.com/attachments/648628577935294470/665942009470779448/tenor.gif
const errorGif = new Discord.RichEmbed()
	.setColor('#47f598')
	.setTitle('Seradys.js has stopped working..')
	.setFooter('Seradys Beta V1.1', 'https://i.imgur.com/VCp7qHi.png')
	.setAuthor('Uhmm... What..?')
	.setTimestamp()
	.setDescription(`Ping someone, I can't do everything!`)
	.setImage(`https://cdn.discordapp.com/attachments/648628577935294470/665942009470779448/tenor.gif`)


//Eventlistener error fix 
require('events').EventEmitter.defaultMaxListeners = 25

//All gif variables!

var KissImages = [
	"https://cdn.discordapp.com/attachments/631508107536629763/638842376869117962/tenor.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638842376382709770/original_50392.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638842317586825216/89a9090eff4ff6105887c8690003415e.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638842317020725255/6eXe.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638842315892326401/2f23c53755a5c3494a7f54bbcf04d1cc.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638842315208785951/308a7f9b5fe9f7efab66e7195b4d23f7.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638842224481927236/69cf45b7947fe8318ee8c899873066cd.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638842223038824498/52945d11db26c180556e2ef0d0e60fb2.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638842222602747943/0cd0a6ddd7a5f95ae6e27f8f09aedc85.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638842222124728323/fdcd005a7ac62db208e1c820342d324c.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638842221658898471/badcb0749843229e142414cac394b9a7.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638842377431416842/tenor_1.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638842377875881994/Ka2NAhphLdqXC.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638842377875881995/original_1.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638842378953687060/original.gif",
	"https://cdn.discordapp.com/attachments/649012497860395038/649363540150452254/tenor_1.gif",
	"https://cdn.discordapp.com/attachments/649012497860395038/649363540796244012/tenor_2.gif",
	"https://cdn.discordapp.com/attachments/649012497860395038/649380548158029855/tenor_2.gif",
	"https://cdn.discordapp.com/attachments/649012497860395038/649390432035536896/1529160472_kuzu.gif",
	"https://cdn.discordapp.com/attachments/649012497860395038/649398343805698048/original_1.gif",
	"https://cdn.discordapp.com/attachments/649012497860395038/649398344526987271/original_2.gif",
	"https://cdn.discordapp.com/attachments/649012497860395038/649398345025978369/source.gif",
	"https://cdn.discordapp.com/attachments/649012497860395038/649398345025978372/tenor.gif",
	"https://cdn.discordapp.com/attachments/649012497860395038/649398345730883594/original.gif",
	"https://cdn.discordapp.com/attachments/649012497860395038/649398345730883595/tenor_1.gif",
	"https://cdn.discordapp.com/attachments/649012497860395038/649401720685854745/tenor_3.gif",
	"https://cdn.discordapp.com/attachments/649012497860395038/649401721562333204/download_1.gif",
	"https://cdn.discordapp.com/attachments/649012497860395038/649401722569097286/tumblr_m0t47bCZsh1rrdxgwo1_1280.gif",
	"https://cdn.discordapp.com/attachments/649012497860395038/649411343341846549/download.gif",
	"https://cdn.discordapp.com/attachments/649012497860395038/649411343811870740/tenor_2.gif",
	"https://cdn.discordapp.com/attachments/649012497860395038/649411343811870741/tenor_1.gif",
	"https://cdn.discordapp.com/attachments/649012497860395038/649411597868990464/original.gif",
]
var HugImages = [
	"https://cdn.discordapp.com/attachments/631508107536629763/638836600721375232/037d54d777539f6d942c45659de1d212.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638836599802560522/234d471b1068bc25d435c607224454c9.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638836599341318144/aa3d077d66dc4f48c2931b6758b74ce5.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638836596518682654/ed7d232aadbbabf04780c20dc4abfaff.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638836478272733235/5d93f4ca1115d4f9e01a67ba9250f14f.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638836478272733234/3677d14800696f5be3cbd8f71c404495.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638836476880093185/7245ff38d745b7fd80ed710d0521b8a8.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638836476880093184/6d29e0ffccf9f3337e5f13a50c5eb04d.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638836421599297545/e0469a1417408ccb404cb2bf36f54886.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638833273195200532/575411c77053d08b6b6b86c5706a140c.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638833271643308054/13fe9541f86cff237f1800e9279b1567.gif",
	"https://cdn.discordapp.com/attachments/631508107536629763/638833271643308052/c370f122ecb95b13fe1fa387e262a865.gif",
	"https://cdn.discordapp.com/attachments/649012472694439939/649033300010074130/ZQN9jsRWp1M76.gif",
	"https://cdn.discordapp.com/attachments/649012472694439939/649033300828225546/143v0Z4767T15e.gif",
	"https://cdn.discordapp.com/attachments/649012472694439939/649033300828225546/143v0Z4767T15e.gif",
	"https://cdn.discordapp.com/attachments/649012472694439939/649033301318828032/svXXBgduBsJ1u.gif",
	"https://cdn.discordapp.com/attachments/649012472694439939/649033301876539392/wnsgren9NtITS.gif",
	"https://cdn.discordapp.com/attachments/649012472694439939/649033303265116171/29DoQ6Q2XXi4E.gif",
	"https://cdn.discordapp.com/attachments/649012472694439939/649033304963809290/8oeFgfmiSa4BG.gif",
	"https://cdn.discordapp.com/attachments/649012472694439939/649285211183513611/community_image_1423251130.gif",
	"https://cdn.discordapp.com/attachments/649012472694439939/649361068698763275/tenor_2.gif",
	"https://cdn.discordapp.com/attachments/649012472694439939/649373977164120094/636306b78e9a992418f10c427a0a3b66.gif",
	"https://cdn.discordapp.com/attachments/649012472694439939/649380465173594112/tenor_3.gif",
]
var SlapImages = [
	"https://media.tenor.co/videos/8b0f8bdd4cfe1c493f1d7a787bdbbeb6/mp4",
	"https://cdn.discordapp.com/attachments/648962096289021983/649286789575737405/tenor_4.gif",
	"https://cdn.discordapp.com/attachments/648962096289021983/649286788954718221/giphy.gif",
	"https://cdn.discordapp.com/attachments/648962096289021983/649286787973382144/379.gif",
	"https://cdn.discordapp.com/attachments/648962096289021983/649286786928869377/tenor_5.gif",
	"https://cdn.discordapp.com/attachments/648962096289021983/649285210436927488/source.gif",
	"https://cdn.discordapp.com/attachments/648962096289021983/649285209644335114/tenor_3.gif",
	"https://cdn.discordapp.com/attachments/648962096289021983/649285208893292555/bfefb401ed8f1f7a3fee62d76a2856a4.gif",
	"https://cdn.discordapp.com/attachments/648962096289021983/649285208893292554/4e9ea150354ad3159339b202cbc6cad9.gif",
	"https://cdn.discordapp.com/attachments/648962096289021983/649285208465604660/tenor_2.gif",
	"https://cdn.discordapp.com/attachments/648962096289021983/649285207937253376/086.gif",
	"https://cdn.discordapp.com/attachments/648962096289021983/649285207089741836/tenor_1.gif",
	"https://cdn.discordapp.com/attachments/648962096289021983/649283606199402498/1514903780_cf9ee959c0df9e2e4f8e3d4cd28dd5f457d68fb8_hq.gif",
	"https://cdn.discordapp.com/attachments/648962096289021983/649035492301733911/tenor_3.gif",
	"https://cdn.discordapp.com/attachments/648962096289021983/649035424156876830/tenor_4.gif",
	"https://cdn.discordapp.com/attachments/648962096289021983/649013862183600177/tenor_1.gif",
	"https://cdn.discordapp.com/attachments/648962096289021983/649013482339041282/giphy_1.gif"
]
var DanceImages = [
	"https://cdn.discordapp.com/attachments/648961847848075264/648962485151334410/giphy-1.gif",
	"https://cdn.discordapp.com/attachments/648961847848075264/648962513127473153/badbdccdf8861b5675f3169e850633be834e846b_2_476x998.gif",
	"https://cdn.discordapp.com/attachments/648961847848075264/649014408676114496/tenor_3.gif",
	"https://cdn.discordapp.com/attachments/648961847848075264/649014409334882344/tenor_2.gif",
	"https://cdn.discordapp.com/attachments/648961847848075264/649015021505871882/067c502fbe7f7e4bb812e4ea986b9500.0.gif",
	"https://cdn.discordapp.com/attachments/648961847848075264/649015108646862871/ba18cb42c1d1d951d474456aefebd9f3.0.gif",
	"https://cdn.discordapp.com/attachments/648961847848075264/649015687746027530/tenor_6.gif",
	"https://cdn.discordapp.com/attachments/648961847848075264/649015688760918046/tenor_5.gif",
	"https://cdn.discordapp.com/attachments/648961847848075264/649015689209970698/tenor_4.gif"
]
var CryImages = [
	"https://cdn.discordapp.com/attachments/648961885185638402/649014043272806410/9b215c7d7907d9b390902467af09df78bd9a5749.gif",
	"https://cdn.discordapp.com/attachments/648961885185638402/649374016238387200/tumblr_nqg5e0L38Z1smw5dno2_540.gif",
	"https://cdn.discordapp.com/attachments/648961885185638402/649374016238387201/giphy_1.gif",
	"https://cdn.discordapp.com/attachments/648961885185638402/649374017060339743/giphy.gif",
	"https://cdn.discordapp.com/attachments/648961885185638402/649374017635221514/C1la.gif",
	"https://cdn.discordapp.com/attachments/648961885185638402/649374018163572766/tenor.gif",
	"https://cdn.discordapp.com/attachments/648961885185638402/649374018163572767/tenor_1.gif",
	"https://cdn.discordapp.com/attachments/648961885185638402/649374522902052925/cry-gif-anime-Favim.com-6203281.gif",
	"https://cdn.discordapp.com/attachments/648961885185638402/649374523912749056/tenor_2.gif",
	"https://cdn.discordapp.com/attachments/648961885185638402/649374524415934479/original.gif",
	"https://cdn.discordapp.com/attachments/648961885185638402/649374525024370699/tumblr_64456e10801628fcc9971e2128afc2ee_b9fa00d1_500.gif",
	"https://cdn.discordapp.com/attachments/648961885185638402/649374525967826974/CompletePotableDove-size_restricted.gif"
]
var AngryImages = [
	"https://cdn.discordapp.com/attachments/648961905192337430/649376129332805642/tumblr_inline_os9ddwM5Mw1t8w7d2_540.gif",
	"https://cdn.discordapp.com/attachments/648961905192337430/649376129832189952/Tn6w.gif",
	"https://cdn.discordapp.com/attachments/648961905192337430/649376129832189953/source_2.gif",
	"https://cdn.discordapp.com/attachments/648961905192337430/649376130519924756/tenor_6.gif",
	"https://cdn.discordapp.com/attachments/648961905192337430/649376131077636127/source_1.gif",
	"https://cdn.discordapp.com/attachments/648961905192337430/649376133208473640/RareFaroffHorseshoebat-small.gif",
	"https://cdn.discordapp.com/attachments/648961905192337430/649376143048179752/source.gif",
	"https://cdn.discordapp.com/attachments/648961905192337430/649376143048179753/tenor_5.gif",
	"https://cdn.discordapp.com/attachments/648961905192337430/649376143593701396/tenor_4.gif",
	"https://cdn.discordapp.com/attachments/648961905192337430/649376389178327080/tumblr_inline_p72vpvOcSo1ueut6r_540.gif",
	"https://cdn.discordapp.com/attachments/648961905192337430/649376144017195037/tenor_3.gif",
	"https://cdn.discordapp.com/attachments/648961905192337430/649376389178327081/309.gif",
	"https://cdn.discordapp.com/attachments/648961905192337430/649377197655719996/OrdinarySpectacularBluetickcoonhound-small.gif",
	"https://cdn.discordapp.com/attachments/648961905192337430/649377198146322452/5Lxu.gif",
	"https://cdn.discordapp.com/attachments/648961905192337430/649377198146322454/tenor_7.gif",
	"https://cdn.discordapp.com/attachments/648961905192337430/649377793955856384/giphy_2.gif",
	"https://cdn.discordapp.com/attachments/648961905192337430/649377793955856385/source_3.gif" 
]
var PunchImages = [
	"https://cdn.discordapp.com/attachments/648961940055392256/649379354220167168/9eUJ.gif",
	"https://cdn.discordapp.com/attachments/648961940055392256/649379355331526676/tumblr_inline_o9kmdwsfUL1s2ua4d_500.gif",
	"https://cdn.discordapp.com/attachments/648961940055392256/649379355331526677/giphy.gif",
	"https://cdn.discordapp.com/attachments/648961940055392256/649379355989901316/SecondFeminineDuckbillcat-size_restricted.gif",
	"https://cdn.discordapp.com/attachments/648961940055392256/649379356417982491/source.gif",
	"https://cdn.discordapp.com/attachments/648961940055392256/649379409685643284/tenor.gif",
	"https://cdn.discordapp.com/attachments/648961940055392256/649379409685643285/tenor_1.gif",
	"https://cdn.discordapp.com/attachments/648961940055392256/649380619389763584/giphy_2.gif",
	"https://cdn.discordapp.com/attachments/648961940055392256/649380620006588429/giphy_1.gif"
]
var BlushImages = [
	"https://cdn.discordapp.com/attachments/648962013841850407/649390480844521474/tumblr_ojsoekgbqq1s307p6o1_500.gif",
	"https://cdn.discordapp.com/attachments/648962013841850407/649014266958970914/1775abd68d580676dc2d2d3f6103c9cf5274a8b2.gif",
	"https://cdn.discordapp.com/attachments/648962013841850407/649377837450657801/tenor_8.gif",
	"https://cdn.discordapp.com/attachments/648962013841850407/649389112855363584/tumblr_mytgxgukJG1rlwae0o2_500.gif",
	"https://cdn.discordapp.com/attachments/648962013841850407/649389113426051103/giphy_2.gif",
	"https://cdn.discordapp.com/attachments/648962013841850407/649389114050871331/original.gif",
	"https://cdn.discordapp.com/attachments/648962013841850407/649389133290274836/source.gif",
	"https://cdn.discordapp.com/attachments/648962013841850407/649389133957038110/giphy_1.gif",
	"https://cdn.discordapp.com/attachments/648962013841850407/649389134456029204/giphy.gif",
	"https://cdn.discordapp.com/attachments/648962013841850407/649389167469658143/tenor_2.gif",
	"https://cdn.discordapp.com/attachments/648962013841850407/649389168484417549/tenor_1.gif",
	"https://cdn.discordapp.com/attachments/648962013841850407/649390449987158036/giphy_3.gif",
	"https://cdn.discordapp.com/attachments/648962013841850407/649390449987158037/tenor_3.gif",
	"https://cdn.discordapp.com/attachments/648962013841850407/649390451069157396/original_1.gif",
	"https://cdn.discordapp.com/attachments/648962013841850407/649390452021133322/4c531ddd860cf2965be0d49bf03142ff.gif",
	"https://cdn.discordapp.com/attachments/648962013841850407/649390452864450591/anime-boy-blushing-gif-1.gif",
	"https://cdn.discordapp.com/attachments/648962013841850407/649390480844521472/tumblr_nzhg6xxGH41umlhoro1_500.gif"
]
var ShootImages = [
	"https://cdn.discordapp.com/attachments/648961959542259742/649040270893121556/tenor_7.gif",
	"https://cdn.discordapp.com/attachments/648961959542259742/649381854926864385/tenor_1.gif",
	"https://cdn.discordapp.com/attachments/648961959542259742/649381856072171560/3oLd.gif",
	"https://cdn.discordapp.com/attachments/648961959542259742/649381856583745557/ConcernedDemandingHammerheadbird-size_restricted.gif",
	"https://cdn.discordapp.com/attachments/648961959542259742/649381857842167828/207541891000202.gif",
	"https://cdn.discordapp.com/attachments/648961959542259742/649381859079225355/mUUzhcr.gif",
	"https://cdn.discordapp.com/attachments/648961959542259742/649384298583162881/tenor.gif",
	"https://cdn.discordapp.com/attachments/648961959542259742/649384299455447040/source.gif",
	"https://cdn.discordapp.com/attachments/648961959542259742/649384299883134986/5aa0e3ef594fc5bd1dafda61cfe0f9d4.gif",
]
var LaughImages = [
	"https://cdn.discordapp.com/attachments/648961984372539418/649996554157031425/tenor.gif",
	"https://cdn.discordapp.com/attachments/648961984372539418/649996554895097876/giphy_1.gif",
	"https://cdn.discordapp.com/attachments/648961984372539418/649996555813912576/EverlastingCompetentArabianhorse-size_restricted.gif",
	"https://cdn.discordapp.com/attachments/648961984372539418/649996576353288202/tenor_1.gif",
	"https://cdn.discordapp.com/attachments/648961984372539418/649996576353288204/f58908fbc9096bb4bb995de242433bf5.gif",
	"https://cdn.discordapp.com/attachments/648961984372539418/649996577699528704/tenor_2.gif",
	"https://cdn.discordapp.com/attachments/648961984372539418/649996607818956835/tenor_3.gif",
	"https://cdn.discordapp.com/attachments/648961984372539418/649996608267616277/tenor_4.gif",
	"https://cdn.discordapp.com/attachments/648961984372539418/649996609278574593/OaFg.gif",
	"https://cdn.discordapp.com/attachments/648961984372539418/649997060447272971/giphy_2.gif",
	"https://cdn.discordapp.com/attachments/648961984372539418/649997162087841820/a7002b0a5c088a776658f745d5508a36.gif",
	"https://cdn.discordapp.com/attachments/648961984372539418/649997613529169920/MJY8.gif"
]
var PokeImages = [
	"https://cdn.discordapp.com/attachments/648962036465795072/649360977632034836/anime-poke-gif-11.gif",
	"https://cdn.discordapp.com/attachments/648962036465795072/649360978160386068/tenor.gif",
	"https://cdn.discordapp.com/attachments/648962036465795072/649360978823348248/EnlightenedInferiorAfricanaugurbuzzard-size_restricted.gif",
	"https://cdn.discordapp.com/attachments/648962036465795072/649361027577937928/JTSO.gif",
	"https://cdn.discordapp.com/attachments/648962036465795072/649361028177592340/tenor_1.gif",
	"https://cdn.discordapp.com/attachments/648962036465795072/649361103523938305/original.gif",
	"https://cdn.discordapp.com/attachments/648962036465795072/649361104090431508/giphy_1.gif",
	"https://cdn.discordapp.com/attachments/648962036465795072/649361104593616908/giphy.gif",
	"https://cdn.discordapp.com/attachments/648962036465795072/649363578909884421/IndolentFragrantIrishterrier-small.gif",
	"https://cdn.discordapp.com/attachments/648962036465795072/649363579614789634/tenor.gif",
	"https://cdn.discordapp.com/attachments/648962036465795072/649363580541599770/ConventionalIlliterateFattaileddunnart-size_restricted.gif",
	"https://cdn.discordapp.com/attachments/648962036465795072/649363581644570634/download.jpeg"
]
var BiteImages = [
	"https://cdn.discordapp.com/attachments/648962057130999847/649014831608889344/giphy_1.gif",
	"https://cdn.discordapp.com/attachments/648962057130999847/649412018478252061/tenor_3.gif",
	"https://cdn.discordapp.com/attachments/648962057130999847/649412019799195648/tenor.gif",
	"https://cdn.discordapp.com/attachments/648962057130999847/649413478531989534/tenor_6.gif",
	"https://cdn.discordapp.com/attachments/648962057130999847/649413479052345344/ede2a18b479c1a4b95bfa444559a1d3b4b3fcb0b_hq.gif",
	"https://cdn.discordapp.com/attachments/648962057130999847/649413479538753536/original_1.gif",
	"https://cdn.discordapp.com/attachments/648962057130999847/649413504692125748/tenor_5.gif",
	"https://cdn.discordapp.com/attachments/648962057130999847/649413504692125749/tenor_4.gif",
	"https://cdn.discordapp.com/attachments/648962057130999847/649672072737456148/4c92059276e690_full.gif",
	"https://cdn.discordapp.com/attachments/648962057130999847/649672073261613069/a9bb6d864ebe7e01ed647b78fc652f15116716c4_hq.gif",
	"https://cdn.discordapp.com/attachments/648962057130999847/649672073261613072/tenor_7.gif",
	"https://cdn.discordapp.com/attachments/648962057130999847/649672112662904843/tenor_8.gif",
	"https://cdn.discordapp.com/attachments/648962057130999847/649678295821975562/giphy.gif",
	"https://cdn.discordapp.com/attachments/648962057130999847/649678296321359902/Dontbites_370083_6352889.gif"
]
var InsultImages = [
	"https://cdn.discordapp.com/attachments/648962182041829377/649033649244602388/caoGfEbpvEztu.gif",
	"https://cdn.discordapp.com/attachments/648962182041829377/649035362701672453/c92.gif",
	"https://cdn.discordapp.com/attachments/648962182041829377/649035363960225831/1512786088_c87ghib.gif",
	"https://cdn.discordapp.com/attachments/648962182041829377/649035364824121344/tenor.gif",
	"https://cdn.discordapp.com/attachments/648962182041829377/649035453097443338/tenor_1.gif",
	"https://cdn.discordapp.com/attachments/648962182041829377/649035453592240128/f6e1989507ca6dd49ae238619b8c59d23368851d_00.gif",
	"https://cdn.discordapp.com/attachments/648962182041829377/649035454037098561/tenor_2.gif",
	"https://cdn.discordapp.com/attachments/648962182041829377/649035455802900520/tenor_5.gif",
	"https://cdn.discordapp.com/attachments/648962182041829377/649035456255754275/3512669.gif",
	"https://cdn.discordapp.com/attachments/648962182041829377/649036887348084736/tenor_6.gif",
	"https://cdn.discordapp.com/attachments/648962182041829377/649036888149065739/KeyEvilIbis-max-1mb.gif",
	"https://cdn.discordapp.com/attachments/648962182041829377/649038122637590542/410159b9722f47798a59a5c79cc81f95.gif",
	"https://cdn.discordapp.com/attachments/648962182041829377/649038406407553034/EverlastingWearyBlackwidowspider-size_restricted_1.gif",
	"https://cdn.discordapp.com/attachments/648962182041829377/649038407514718249/wgJcNL5_1.gif",
	"https://cdn.discordapp.com/attachments/648962182041829377/649039723574198272/Whatdidyoujustsayillhaveyouknowmy_3a7ad62c71c84209a07237f79d5c4bc3.gif",
	"https://cdn.discordapp.com/attachments/648962182041829377/649039724526436366/c44.gif",
	"https://cdn.discordapp.com/attachments/648962182041829377/649039725570686996/vWaOT4w.gif",
	"https://cdn.discordapp.com/attachments/648962182041829377/649039726187118602/YWecptA.gif",
	"https://cdn.discordapp.com/attachments/648962182041829377/649039726187118604/giphy.gif",
	"https://cdn.discordapp.com/attachments/648962182041829377/649283636927004692/tenor.gif"
]
var FacepalmImages = [
	"https://cdn.discordapp.com/attachments/649013340408119332/649286566409404416/2haq.gif",
	"https://cdn.discordapp.com/attachments/649013340408119332/649287944149925898/tenor_11.gif",
	"https://cdn.discordapp.com/attachments/649013340408119332/649287945106489344/tenor_13.gif",
]
//GIF responses
client.on('message', message => {
	var randomNumber = Math.random();
	var imageArrayLength;
	var possibleRandomIndex;
	var randomImage;
	var title;
	var locationFirstSpace = message.content.indexOf(` `);
	var contentCommand;
	if (locationFirstSpace == -1){
		contentCommand = message.content;
	}
	else {
		contentCommand = message.content.substring(0,locationFirstSpace);
	}
	switch (contentCommand) {
	// Add case here for new command
		case `/hug`: {
			imageArrayLength = HugImages.length;
			possibleRandomIndex = Math.round(randomNumber*(imageArrayLength-1));
			randomImage = HugImages[possibleRandomIndex];
			if (message.mentions.users.size <= 0) {
				(title =
					`${message.author.username} hugged themselves...? Weirdo..`
				);
			}
			title = `${message.author.username} hugged ${message.mentions.users.first().username}!`	
			break;
		}
		case '/kiss': {
			imageArrayLength = KissImages.length;
			possibleRandomIndex = Math.round(randomNumber*(imageArrayLength-1));
			randomImage = KissImages[possibleRandomIndex];
			if (message.mentions.users.size <= 0) {
				return message.reply(errorGif);
			}
			title = `${message.author.username} kissed ${message.mentions.users.first().username}, awwww!!`	
			break;
		}
		case '/slap': {
			imageArrayLength = SlapImages.length;
			possibleRandomIndex = Math.round(randomNumber*(imageArrayLength-1));
			randomImage = SlapImages[possibleRandomIndex];
			if (message.mentions.users.size <= 0) {
				return message.reply(errorGif);
			}
			title = `${message.author.username} slapped ${message.mentions.users.first().username}! Yikes!`	
			break;
		}
		case '/dance': {
			imageArrayLength = DanceImages.length;
			possibleRandomIndex = Math.round(randomNumber*(imageArrayLength-1));
			randomImage = DanceImages[possibleRandomIndex];
			if (message.mentions.users.size <= 0) {
				(title 
					= `${message.author.username} is jamming on their own!`
				);
			}
			title = `${message.author.username} started dancing with ${message.mentions.users.first().username}!`
			break;
		}
	
		case '/cry': {
			imageArrayLength = CryImages.length;
			possibleRandomIndex = Math.round(randomNumber*(imageArrayLength-1));
			randomImage = CryImages[possibleRandomIndex];
			title = `*${message.author.username} started crying!*`;
			break;
		} case '/angry': {
            imageArrayLength = AngryImages.length;
            possibleRandomIndex = Math.round(randomNumber*(imageArrayLength-1));
            randomImage = AngryImages[possibleRandomIndex];
            title = `*${message.author.username} is getting angry!!*`;
            break;
		}
		case '/punch': {
			imageArrayLength = PunchImages.length;
            possibleRandomIndex = Math.round(randomNumber*(imageArrayLength-1));
            randomImage = PunchImages[possibleRandomIndex];
			if (message.mentions.users.size <= 0) {
				(title = 
					`${message.author.username} punched themselves, idiot!`
				);
			}
			title = `${message.author.username} punched ${message.mentions.users.first().username}, that's gotta hurt!`	
			break;
		}
		case '/shoot': {
            imageArrayLength = ShootImages.length;
            possibleRandomIndex = Math.round(randomNumber*(imageArrayLength-1));
            randomImage = ShootImages[possibleRandomIndex];
			if (message.mentions.users.size <= 0) {
				(title = 
					`${message.author.username} shot themself, what the fu-`
				);
			}
			title = `${message.mentions.users.first().username} got shot by ${message.author.username}! Holy shit run!`	
			break;
		}
		case '/blush': {
            imageArrayLength = BlushImages.length;
            possibleRandomIndex = Math.round(randomNumber*(imageArrayLength-1));
            randomImage = BlushImages[possibleRandomIndex];
			if (message.mentions.users.size <= 0) {
				(title = 
					`${message.author.username} is blushing, aww!`
				);
			}
			else {
				title = `${message.author.username} is blushing at ${message.mentions.users.first().username}!`;
			}
            break; 
		}
		case '/laugh': {
            imageArrayLength = LaughImages.length;
            possibleRandomIndex = Math.round(randomNumber*(imageArrayLength-1));
			randomImage = LaughImages[possibleRandomIndex];
			if (message.mentions.users.size <= 0) {
				(title = 
					`${message.author.username} started laughing!`
				);
			}
			else {
				title = `${message.author.username} is laughing at ${message.mentions.users.first().username}!`;
			}
            break;
		}
		case '/poke': {
            imageArrayLength = PokeImages.length;
            possibleRandomIndex = Math.round(randomNumber*(imageArrayLength-1));
            randomImage = PokeImages[possibleRandomIndex];
			if (message.mentions.users.size <= 0) {
				(title = 
					`${message.author.username} poked themself...? Ping a user next time!`
				);
			}
			title = `${message.author.username} poked ${message.mentions.users.first().username}, poke poke!`	
			break;
		}
		case '/bite': {
            imageArrayLength = BiteImages.length;
            possibleRandomIndex = Math.round(randomNumber*(imageArrayLength-1));
            randomImage = BiteImages[possibleRandomIndex];
            if (message.mentions.users.size <= 0) {
				return message.reply(`${message.author.username} bit his tongue! Ping a user next time :P`);
			}
			title = `${message.mentions.users.first().username} got bit by ${message.author.username}!`	
			break;
		}
		case '/insult': {
            imageArrayLength = InsultImages.length;
            possibleRandomIndex = Math.round(randomNumber*(imageArrayLength-1));
            randomImage = InsultImages[possibleRandomIndex];
            if (message.mentions.users.size <= 0) {
				return message.reply(errorGif);
			}
			title = `${message.author.username} insulted ${message.mentions.users.first().username}!`	
			break;
		}
		case '/facepalm': {
            imageArrayLength = FacepalmImages.length;
            possibleRandomIndex = Math.round(randomNumber*(imageArrayLength-1));
			randomImage = FacepalmImages[possibleRandomIndex];
			if (message.mentions.users.size <= 0) { 
				(title = 
					`${message.author.username} facepalmed, smh!`
				);
				}	
			else{
            	title = `${message.author.username} facepalmed at ${message.mentions.users.first().username}, smh!`;
			}
			break;
        }
		default: {
			return;
		}
	}
var NewEmbededImage = new Discord.RichEmbed()
		.setColor('#47f598')
		.setTitle(title)
		.setImage(randomImage);
message.channel.send(NewEmbededImage);
})

//Rolls a dice to a random number
client.on('message', message => {
	if (message.content === '/dice') {
    	var diceRoll = Math.floor(Math.random() * 6) + 1;
    	if (diceRoll > 3) {
        	message.channel.send('Looks Like You Rolled... a ' + diceRoll + '!');
    	} else {
        	message.channel.send('Wow, nice you rolled ' + diceRoll);
    	}
	}
});
//Pings bot to see if it responds correctly
client.on('message', message => {
	if (message.content === '/ping') {
		var diceRoll = Math.floor(Math.random() * 6) + 1;
    	if (diceRoll > 3) {
        	message.channel.send('Ping pong, we done.');
    	} else {
        	message.channel.send('Ping pong, king kong. ');
    	}
}

});
//Shows Commands List + embed
const gcmdlistEmbed = new Discord.RichEmbed()
	.setColor('#47f598')
	.setTitle('Commands List')
	.setDescription('Page 1 of 1')
	.addField("/commands", "Shows command lists", true)
	.addField("/commands fun", "Shows fun commands", true)
	.addField("/ping", "Ping to see if the bot is online", true)
	.addField("/gifs", "Shows all useable gifs",true)
	.addField("/version", "Display current version", true)
	.addField("/who (PING)", "Displays user info", true)
	.addField("/id", "Displays user id", true)
	.setTimestamp()
	.setFooter("Seradys Beta V1.1", 'https://i.imgur.com/VCp7qHi.png')
//GIFs list
const fcmdlistEmbed = new Discord.RichEmbed()
	.setColor('#47f598')
	.setTitle('Your fine selection of gifs')
	.setDescription('Page 1 of 1')
	.addField("Hug","Hug someone", true)
	.addField("Insult","Insult someone", true)
	.addField("Kiss","Kiss someone", true)
	.addField("Punch","Punch someone", true)
	.addField("Slap","Slap someone", true)
	.addField("Shoot","Shoot someone", true)
	.addField("Cry","Cry by yourself",true)
	.addField("Angry","Get angry at someone", true)
	.addField("Laugh","Laugh at someone", true)
	.addField("Blush","Blush at someone", true)
	.addField("Poke", "Poke someone", true)
	.addField("Dance","Dance with someone", true)
	.addField("Bite","Bite them, nom nom", true)
	.setTimestamp()
	.setFooter("Seradys Beta V1.1", "https://i.imgur.com/VCp7qHi.png")
client.on('message', message => {
	if (message.content === '/commands') {
	message.channel.send(gcmdlistEmbed);
	}
	if (message.content === '/gifs') {
		message.channel.send(fcmdlistEmbed);
		}
});

//Gun Information

client.on('message', message => {
	if (message.content === '/gun-info') {
	message.channel.send('https://docs.google.com/document/d/1X6ldpnY97VVuh4LgnM-_mmb00f4U8ryho4tPsHgce4g/edit?usp=sharing');
 }
	
});
//Fun Commands

//Seradys Embed
const Seradysinfo = new Discord.RichEmbed()
	.setColor('#47f598')
	.setTitle('Seradys Information')
	.setDescription('About me')
	.addField('What are you?', 'Im a personal server bot, do /commands for more info!')
	.addField("Who's your creator?", 'My main coder is The Artcher#9289, Custom Sniper45#8596 provided the main concept, and coded aswell.')
	.addBlankField()
    .setFooter('Seradys Beta V1.1', 'https://i.imgur.com/VCp7qHi.png')
    .addField('Small note', 'This is a 1 person project, bugs are to be expected.')
	.setImage('https://i.imgur.com/VCp7qHi.png');
client.on('message', message => {
    if (message.content === '/bot info') {
    message.channel.send(Seradysinfo);
	}
})
//ID ping
client.on('message', message => {
	if (message.content.startsWith("/id")) {
		if (!message.mentions.members.first(
			
		))
		return message.channel.send(errorGif);
{

	return message.channel.send(`> Your requested ID: *${message.mentions.users.first().id}*`);
		}
	}

})

//Welcome message
//const welcomeEmbed = new Discord.RichEmbed()
//.setColor('#47f598')
//	.setTitle(`Welcome to the server!`)
//	.setDescription('Welcome, please read the rules and FAQ for any questions! ')
//	.addBlankField()
//	.setImage('https://cdn.discordapp.com/attachments/648628577935294470/649926051107045386/fag.gif');
//setTimeout(() => {
//	client.on('guildMemberAdd', member => {
//		member.guild.channels.get('664178367419121704').message.channel.send(welcomeEmbed); 
//	});
//}, 2000)

client.on('message', message => {
	if (message.content.startsWith('/who')) {
		if (!message.mentions.members.first(
		
			))
			return message.channel.send(errorGif);
		
		var userID = message.mentions.users.first().id
		var userTag = message.mentions.users.first().tag
		var userCreationDate = (message.mentions.users.first().createdAt)
		const idEmbed = new Discord.RichEmbed()
			.setColor('#47f598')
			.setTitle(`User '` + userTag +`'`)
			.addField(`Their ID`, userID)
			.addField(`Account creation date`, userCreationDate)
			.setTimestamp(message.createdAt)
			.addBlankField()
			.setImage(`${message.mentions.users.first().displayAvatarURL}`)
			.setFooter('Seradys Beta V1.1', 'https://i.imgur.com/VCp7qHi.png')
	message.channel.send(idEmbed);
	}
})

//top prio : fix github

//work on personality
//Fix embeds for regular images
//fix scaling = fixed
//check code for simple fixes = fixed (error quotes on images " paired with ')
//gif without pings = fixed

client.login(discordSecret);