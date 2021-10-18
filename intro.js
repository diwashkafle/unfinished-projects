let bgMusic=new Audio("bgmusic.mp3");
let hoversound = new Audio("hoversound.mp3")


document.querySelector(".play").onmousedown = function(){
    console.log("clicked")
    hoversound.play();
}
document.querySelector(".about").onmousedown = function(){
    console.log("clicked")
    hoversound.play();
}

