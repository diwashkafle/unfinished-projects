let hero = document.querySelector(".hero");
let bullet = document.querySelectorAll(".star");
let starBullet = document.getElementById("star-bullet")
let villians = document.querySelector(".villians");
let bulletPosition="9.8vh"
let bulletpos= Number(bulletPosition.slice(0,3));
let heroPosition = "-1vh";
let newpos = Number(heroPosition.slice(0, 2));
hero.style.bottom = heroPosition;
let fireBtn = document.getElementById("fire");
let bgMusic = new Audio("bgmusic.mp3");
let bulletMusic = new Audio("bulletsound.mp3");


window.addEventListener("load", function(){
// bgMusic.play();
// window.addEventListener("keydown",function(event){
//     if (event.key == "ArrowUp" && bulletpos!==10.8) {
        
//         bulletpos++;
//         bullet.style.bottom = bulletpos+"vh";
        
//       } else if (event.key == "ArrowDown" && bulletpos!==-49.2) {
//         bulletpos--;
//           bullet.style.bottom=bulletpos+"vh";
//       } else{
//         return false;
//       }
// })
fireBtn.onclick=()=>{
    starBullet.style.animationName="star";
    villians.style.animationName="villians";
    this.setInterval(()=>{
        console.log("inside loop")
        let min=10.8;
        let max=65;
        let randomNum = Math.floor(Math.random()*(max-min+1))+min;
        villians.style.top=randomNum+"vw";
    },20000)
        
    
}


window.addEventListener("keydown", function (e) {
  if (e.key == "ArrowUp" && newpos!==0) {
    newpos++;
    hero.style.bottom = newpos + "vh";
    bulletpos++;
    for(i=0;i<bullet.length;i++){
        bullet[i].style.bottom = bulletpos+"vh";
       

    }
    

  } else if (e.key == "ArrowDown" && newpos!==-60) {
      newpos--;
      console.log(newpos);
      hero.style.bottom=newpos+"vh";
      bulletpos--;
      for(i=0;i<bullet.length;i++){
        bullet[i].style.bottom = bulletpos+"vh";

    }
  } else if(e.key=="Space"){
      


    bulletMusic.play();

  }
   
  
});

// this.setInterval(function(){
//  bullet.style.animation-name ;"star";
// },1000)
});
