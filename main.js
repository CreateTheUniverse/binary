var bits = 0;
var bitsMax = 8;
var bytes = 0;
var bytesMax = 8;
var bitsdrives = 0;
var bitsdriveCost = 8;
var bytesdrives = 0;
var bytesdriveCost = 8;
var byteunlock = false;

function bitsClick(number){
    if(bits >= bitsMax) return;
    bits = bits + number;
    update("bits",bits);
    progBar("bitsbar",bits,bitsMax);
	if(!byteunlock){
		if(bits >= 8){
			fadeIn("byteContainer", 10);
			byteunlock = true;
		};
	};
};

function bytesClick(number){
    if(bytes >= bytesMax || bits < 8) return;
    bytes = bytes + number;
    bits = bits - 8;
    update("bits",bits);
    update("bytes",bytes);
    progBar("bitsbar",bits,bitsMax);
    progBar("bytesbar",bytes,bytesMax);
};

function buybitsDrive(){
    if(bits >= bitsdriveCost){
        bitsdrives = bitsdrives + 1;
        bits = bits - bitsdriveCost;
        bitsMax = bitsMax + 8;
        update("bitsdrives",bitsdrives);
        update("bits",bits);
        update("bitsMax",bitsMax);
        progBar("bitsbar",bits,bitsMax);
    }
};

function buybytesDrive(){
    if(bytes >= bytesdriveCost){
        bytesdrives = bytesdrives + 1;
        bytes = bytes - bytesdriveCost;
        bytesMax = bytesMax + 8;
        update("bytesdrives",bytesdrives);
        update("bytes",bytes);
        update("bytesMax",bytesMax);
        progBar("bytesbar",bytes,bytesMax);
    }
};

function progBar(bar,amt,amtMax){
    var myProg = document.getElementById("myProgress");
    var myBar = document.getElementById(bar);
    var percent = Math.floor((amt/amtMax)*100);
    myProg.style.width = amtMax;
    myBar.style.width = percent + '%';
    if(percent <= 33) {myBar.style['background-color'] = "red"};
    if(percent >= 34 && percent <= 66) {myBar.style['background-color'] = "yellow"};
    if(percent >= 67) {myBar.style['background-color'] = "green"};
};

function update(what,number){
    document.getElementById(what).innerHTML = number;

};

function fadeIn(elem, speed) {
    elem = document.getElementById(elem);
    if (elem.style.visibility == "hidden") elem.style.visibility = "visible";
		elem.style.opacity = 1;
	var total = 100 * speed;
	var start = performance.now();
    var fadeCallback = function (timer) {
		var opacity = (timer - start) / total;
        elem.style.opacity = opacity;
        if (!(opacity >= 1)) {
            requestAnimationFrame(fadeCallback);
        }
    };
	requestAnimationFrame(fadeCallback);
};
