var inc = 1000;
/*clock*/
clock();

function clock() {
  const date = new Date();

  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  
  document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
  document.querySelector('.second').style.transform = `rotate(${second}deg)`
}

setInterval(clock, inc);

/*cursor*/
let main = document.querySelector(".page2");
let main2 = document.querySelector(".page3");
let crsr = document.querySelector(".cursor");
let crsr2 = document.querySelector(".cursor2");

main.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
})

main2.addEventListener("mousemove",function(dets){
    crsr2.style.left = dets.x+"px";
    crsr2.style.top = dets.y+"px";
})





window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  const mainContent = document.querySelector(".main-content");

  
  setTimeout(() => {
    preloader.style.transition = "opacity 0.8s ease";
    preloader.style.opacity = "0";

    
    setTimeout(() => {
      preloader.style.display = "none";
      mainContent.style.visibility = "visible";
      mainContent.style.opacity = "1";
    }, 800); 
  }, 5000);
});






