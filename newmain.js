console.clear();
var ms = prompt("New round delay in milliseconds? Leave blank for default (50ms)")||50;
win = 0;
hw = 0;
lw = 100;
rounds = 0;
var w = ["abruptly", "absurd", "abyss", "affix", "askew", "avenue", "awkward", "axiom", "azure", "bagpipes", "bandwagon", "banjo", "bayou", "beekeeper", "bikini", "blitz", "blizzard", "boggle", "bookworm", "boxcar", "boxful", "buckaroo", "buffalo", "buffoon", "buxom", "buzzard", "buzzing", "buzzwords", "caliph", "cobweb", "cockiness", "croquet", "crypt", "curacao", "cycle", "daiquiri", "dirndl", "disavow", "dizzying", "duplex", "dwarves", "embezzle", "equip", "espionage", "euouae", "exodus", "faking", "fishhook", "fixable", "fjord", "flapjack", "flopping", "fluffiness", "flyby", "foxglove", "frazzled", "frizzled", "fuchsia", "funny", "gabby", "galaxy", "galvanize", "gazebo", "giaour", "gizmo", "glowworm", "glyph", "gnarly", "gnostic", "gossip", "grogginess", "haiku", "haphazard", "hyphen", "iatrogenic", "icebox", "injury", "ivory", "ivy", "jackpot", "jaundice", "jawbreaker", "jaywalk", "jazziest", "jazzy", "jelly", "jigsaw", "jinx", "jiujitsu", "jockey", "jogging", "joking", "jovial", "joyful", "juicy", "jukebox", "jumbo", "kayak", "kazoo", "keyhole", "khaki", "kilobyte", "kiosk", "kitsch", "kiwifruit", "klutz", "knapsack", "larynx", "lengths", "lucky", "luxury", "lymph", "marquis", "matrix", "megahertz", "microwave", "mnemonic", "mystify", "naphtha", "nightclub", "nowadays", "numbskull", "nymph", "onyx", "ovary", "oxidize", "oxygen", "pajama", "peekaboo", "phlegm", "pixel", "pizazz", "pneumonia", "polka", "pshaw", "psyche", "puppy", "puzzling", "quartz", "queue", "quips", "quixotic", "quiz", "quizzes", "quorum", "razzmatazz", "rhubarb", "rhythm", "rickshaw", "schnapps", "scratch", "shiv", "snazzy", "sphinx", "spritz", "squawk", "staff", "strength", "strengths", "stretch", "stronghold", "stymied", "subway", "swivel", "syndrome", "thriftless", "thumbscrew", "topaz", "transcript", "transgress", "transplant", "triphthong", "twelfth", "twelfths", "unknown", "unworthy", "unzip", "uptown", "vaporize", "vixen", "vodka", "voodoo", "vortex", "voyeurism", "walkway", "waltz", "wave", "wavy", "waxy", "wellspring", "wheezy", "whiskey", "whizzing", "whomever", "wimpy", "witchcraft", "wizard", "woozy", "wristwatch", "wyvern", "xylophone", "yachtsman", "yippee", "yoked", "youthful", "yummy", "zephyr", "zigzag", "zigzagging", "zilch", "zipper", "zodiac", "zombie"];
function clickLs(ls){
	console.log("pushing "+ls.join(""));
	var abl = document.querySelector(".game_alphabuttonlist__1pxcT");
	var chl = abl.children;
	var indexes = Object.keys(chl);
	ls.forEach(l=>{
		var index = indexes.filter(i=>chl[i].innerHTML==l);
		var button = chl[index];
		button.click()
	})
};
function wordInfo(){
	var cword = document.querySelector(".game_currentword-word__1N841");
	var chl = cword.children;
	var indexes = Object.keys(chl);
	var ls = [];
	indexes.forEach(index=>{
		var l = chl[index].innerHTML||"_";
		ls.push(l)
	});
	var vws2 = ls.filter(t=>t!="_");
	var vws = [];
	var tmp = [];
	vws2.forEach(vw=>{if(!tmp.includes(vw)){vws.push(vw)};tmp.push(vw)});
	return {display:ls.join(""),vws:vws}
};

var mode = document.querySelector(".game_h1__3qUg-");
if (mode.children[0].innerHTML!="Hard Words"){alert("This bot only works on Hard Words")} else {

var winr = document.createElement("h3");
mode.appendChild(winr);
winr.innerHTML = "Win %: 100.00%<br>Wins: 0<br>Loses: 0<br>Rounds: 0";
function recalc(ws,rs){
	wr = ((ws/rs)*100).toFixed(2);
	if (wr<lw) {lw = wr};
	if (wr>hw) {hw = wr};
	winr.innerHTML = "Win %: "+wr+"%<br>Highest Win %: "+hw+"%<br>Lowest Win %: "+lw+"%<br>Wins: "+ws+"<br>Loses: "+(rs-ws)+"<br>Rounds: "+rs
};
function oneRound(){
	var endb = document.querySelector(".game_newgamebutton__NmqAk");
	if (endb) endb.click();
	clickLs("aeiou".split(""));
	var res = wordInfo();
	var pws = [];
	w.forEach(wo=>{
		var resds = res.display.split("");
		b = true;
		resds.forEach(lt=>{
			if (lt!="_"){
				var bo = wo[resds.indexOf(lt)]==lt;
				b = b && bo;
				resds[resds.indexOf(lt)] = "_"
			}
		});
		b = b && wo.length==res.display.length;
		if (b) pws.push(wo)
	});
	console.log("answers: "+pws.join(", "));
	while(!document.querySelector(".game_newgamebutton__NmqAk")){
		clickLs(pws[Math.floor(Math.random()*pws.length)].split(""))
	};
	var won = !document.querySelector(".game_currentword--fail__2OE7v");
	if (won) {win = win + 1};
	rounds = rounds + 1;
	recalc(win, rounds)
	
};
setInterval(oneRound, ms)

}