document.getElementById('hidden').hidden = true;

var vid = document.getElementById('audio');

document.addEventListener('click', function () {
	document.getElementById('welcome').hidden = true;

	document.getElementById('hidden').hidden = false;

	vid.play();
});

vid.onended = function () {
	vid.play();
};

let volume = document.querySelector("#volume-control");

volume.addEventListener("input", function(e) {
vid.volume = e.currentTarget.value / 100;
})

var lastSong = null;
var selection = null;
var playlist = ["assets/muzons/alleyez.mp3", "assets/muzons/alone.mp3", "assets/muzons/alright.mp3", "assets/muzons/ambitionz.mp3", "assets/muzons/asap.mp3", "assets/muzons/bigpoppa.mp3", "assets/muzons/builtforthis.mp3", "assets/muzons/california.mp3", "assets/muzons/canttell.mp3", "assets/muzons/checkyoself.mp3", "assets/muzons/collardgreens.mp3", "assets/muzons/cream.mp3", "assets/muzons/cuska.mp3", "assets/muzons/deepcover.mp3", "assets/muzons/diamonds.mp3", "assets/muzons/element.mp3", "assets/muzons/everyday.mp3", "assets/muzons/forgotaboutdre.mp3", "assets/muzons/fullyhydrated.mp3", "assets/muzons/gatti.mp3", "assets/muzons/ginandjuice.mp3", "assets/muzons/gomd.mp3", "assets/muzons/gotitonme.mp3", "assets/muzons/handsonthewheel.mp3", "assets/muzons/hateit.mp3", "assets/muzons/holdup.mp3", "assets/muzons/howshewalk.mp3", "assets/muzons/howwedo.mp3", "assets/muzons/humble.mp3", "assets/muzons/ificant.mp3", "assets/muzons/imareal1.mp3", "assets/muzons/itwasgoodday.mp3", "assets/muzons/maadcity.mp3", "assets/muzons/maldugunis.mp3", "assets/muzons/manymen.mp3", "assets/muzons/middlechild.mp3", "assets/muzons/moneytrees.mp3", "assets/muzons/msfatbooty.mp3", "assets/muzons/murderonmymind.mp3", "assets/muzons/ninparis.mp3", "assets/muzons/norolemodelz.mp3", "assets/muzons/nystate.mp3", "assets/muzons/otradiena.mp3", "assets/muzons/personibas.mp3", "assets/muzons/pilsetasmeitene.mp3", "assets/muzons/plainjane.mp3", "assets/muzons/praisethelord.mp3", "assets/muzons/protectyaneck.mp3", "assets/muzons/ra.mp3", "assets/muzons/redbone.mp3", "assets/muzons/shookones.mp3", "assets/muzons/smokeanigga.mp3", "assets/muzons/stayfly.mp3", "assets/muzons/stilldre.mp3", "assets/muzons/suicidal.mp3", "assets/muzons/swimmingpools.mp3", "assets/muzons/trapqueen.mp3", "assets/muzons/vissirsarezgiti.mp3", "assets/muzons/welcome.mp3", "assets/muzons/wetdreamz.mp3", "assets/muzons/workout.mp3", "assets/muzons/youknow.mp3"]
var isPlaying = false;
var player = document.getElementById("audio");
player.volume = 0.25;
player.autoplay = false;
player.addEventListener("ended", selectRandom);

function selectRandom(){
	while(selection == lastSong){
		selection = Math.floor(Math.random() * playlist.length);
	}
	lastSong = selection;
	player.src = playlist[selection];
}

selectRandom();	 


$(document).keydown(function(e) {
    if ((e.which == 37) || (e.keyCode == 37)) {
        if (vid.currentTime - 5 > 0) {
            vid.currentTime -= 5;
        }
    }

    if ((e.which == 39) || (e.keyCode == 39)) {
        if (vid.currentTime + 5) {
            vid.currentTime += 5;
        }
    }
	
	if ((e.which == 32) || (e.keyCode==32)) {
        if (vid.paused)
            vid.play();
        else
            vid.pause();
    }
});