let bgm=document.getElementById("bgm");
let alertBox=document.getElementById("alert");
let numberBox=document.getElementById("numberBox");
let numberLabel=document.getElementById("numberLabel");
let numberValue=document.getElementById("numberValue");
let qrisImg=document.getElementById("qrisImg");
let downloadBtn=document.getElementById("downloadQris");
let musicOn=true;

function startMusic(){
if(bgm.paused) bgm.play();
}

function copyPin(e,label,number){
e.stopPropagation();
navigator.clipboard.writeText(number);

numberBox.style.display="block";
numberLabel.innerText=label+" NUMBER";
numberValue.value=number;

qrisImg.style.display="none";
downloadBtn.style.display="none";

alertBox.style.display="block";
setTimeout(()=>alertBox.style.display="none",2000);
}

function showQris(e){
e.stopPropagation();
numberBox.style.display="none";

qrisImg.style.display="block";
downloadBtn.style.display="block";

alertBox.style.display="none";
}

function toggleMusic(e){
e.stopPropagation();
musicOn?bgm.pause():bgm.play();
musicOn=!musicOn;
}
