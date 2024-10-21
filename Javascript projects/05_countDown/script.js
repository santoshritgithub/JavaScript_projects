const endDate = "13 Jun 2024 10:42:34 PM";

const inputs = document.querySelectorAll("input");
const over = document.getElementById('over');
const btn2= document.getElementById("btn2");

let btn1 = document.getElementById('btn1');
document.getElementById("end_date").innerHTML=endDate;

const clock =()=>{
 const end = new Date(endDate);
 const now = new Date();
 btn1.innerHTML=now.toLocaleString();
 const diff =  (end- now)/1000;   // 1000 make Mili_second to second
//  console.log(diff)
 if(diff<0){
    over.innerHTML="Your time is Over";
    return;
 }
//  console.log(Math.floor(diff/86400))  //Find Days
 inputs[0].value = Math.floor(diff/86400);
 inputs[1].value = Math.floor(diff/3600%24)
 inputs[2].value = Math.floor((diff/60)%60)
 inputs[3].value = Math.floor((diff)%60)

}
clock();

setInterval(()=>{
    clock();
},1000)

btn2.addEventListener('click', ()=>{
    const info = prompt("Set your time here ⬇️")
    // console.log(info)
    btn2.innerText = info
    
})