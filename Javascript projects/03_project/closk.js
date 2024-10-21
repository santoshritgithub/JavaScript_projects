const clock = document.getElementById('clock');

const time = function(){
    let date = new Date();
    clock.innerHTML= date.toLocaleTimeString();
}
setInterval(time,1000);

// setInterval(function(){
//     let date = new Date();
//     // console.log(date.toLocaleTimeString());
//     clock.innerHTML= date.toLocaleTimeString();
// },1000);
// console.log("hello")

 