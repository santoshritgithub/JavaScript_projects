
const getColor=()=>{
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#"+ randomNumber.toString(16)
    console.log(randomNumber, randomCode);
    document.querySelector(".main").style.backgroundColor = randomCode;
    document.querySelector("#color_code").innerHTML = randomCode
}
document.getElementById("btn").addEventListener(
    "click", 
    getColor
)