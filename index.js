const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const num = document.querySelector("h3");
let min = 0;
let sec = 0;
let myInter = null


// Timer logic

function timer() {

  if (sec < 60) {
    sec++;
    num.innerHTML = min + ":" + sec;
  } else if (sec >= 60) {
    min += 1;
    sec = 0;
  }
}




function cancelTime(){
  clearInterval(myInter)

}

function resetTime() {
  min =0;
  sec =0;
  clearInterval(myInter)
  num.innerHTML = min + ":" + sec;



  
}
// button logic

start.addEventListener("click", () => {
  timer();
  myInter = setInterval(timer,1000)

  

});

stop.addEventListener("click", () => {
  cancelTime();
})

reset.addEventListener("click", () => {
  resetTime();
 
 
});

// ---------------------------------------- Style ---------------------------------------//

