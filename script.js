let bgm=document.getElementById("bgm");
let alertBox=document.getElementById("alert");
let qris=document.getElementById("qrisImg");
let musicOn=true;

function startMusic(){
if(bgm.paused) bgm.play();
}

function copyPin(e,n){
e.stopPropagation();
navigator.clipboard.writeText(n);
alertBox.style.display="block";
qris.style.display="none";
setTimeout(()=>alertBox.style.display="none",2000);
}

function showQris(e){
e.stopPropagation();
qris.style.display="block";
alertBox.style.display="none";
}

function toggleMusic(e){
e.stopPropagation();
musicOn?bgm.pause():bgm.play();
musicOn=!musicOn;
}