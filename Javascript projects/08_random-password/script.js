const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

//selectors
const pass_Box = document.getElementById("header")
const totalChar = document.getElementById("total_char")
const UpperInput = document.getElementById("upper");
const lowerInput = document.getElementById("lower");
const numberInput = document.getElementById("number");
const symbolInput = document.getElementById("symbol");
const footer = document.querySelector("#footer");

const getRandomData = (dataSet) =>{
    return dataSet[Math.floor(Math.random()* dataSet.length)]
}
const generatePassword = (password ="")=>{
    if(UpperInput.checked){
        password += getRandomData(upperSet)
    }
    if(lowerSet.checked){
        password += getRandomData(lowerSet)
    }
    if(numberSet.checked){
        password += getRandomData(numberSet)
    }
    if(symbolSet.checked){
        password += getRandomData(symbolSet)
    }
    if(password.length < totalChar.value){
        return generatePassword();
    }
    console.log(password)
    pass_Box.innerText = trunCateString(password, totalChar.value);
}
generatePassword();
footer.addEventListener(
    "click", function(){
        generatePassword();
    }
)

function trunCateString(str, num){
    if(str.length >num){
        let substr = str.substring(0,num)
        return substr;
    }else{
        return str;
    }
}