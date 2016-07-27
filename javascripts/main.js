var bits = 0;
var bitsMax = 8;
var bytes = 0;
var bytesMax = 8;
var bitsdrives = 0;
var bitsdriveCost = 8;

function bitsClick(number){
    if(bits >= bitsMax) return;
    bits = bits + number;
    update("bits",bits);
    progBar("bitsbar",bits,bitsMax);
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
