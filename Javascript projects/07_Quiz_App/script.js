
const box= document.querySelector("#box")
const questions = [
    {
       "que": "Which of the following is a markup language ?",
       'a': "HTML",
       'b': "CSS",
       'c': "Javascript",
       'd': "PHP",
       'correct': "a"
    },
    {
        "que": "What year was Javascript launched ?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "Non of the above",
        'correct': "b"
     },
     {
        "que": "What does CSS stand for ?",
        'a': "Cascade Style Seat",
        'b': "Cascading Seal Sheet",
        'c': "Cascading Style Sheet",
        'd': "Cascading store Sheet",
        'correct': "c"
     }
]
let index=0;
let total = questions.length;
let right = 0, wrong = 0;
const queBox = document.getElementById("queBox");
const optionInputs = document.querySelectorAll('.options')
const loadQuestion =()=>{
    if(index=== total){
       return endQuiz();
    }
    resetTo();
    const data = questions[index];
    queBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}
const submitQuiz = ()=>{
    const data = questions[index];
    const ans = getAnswer();
    if(ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
  }
  let yes=0;
  const getAnswer = () =>{
      optionInputs.forEach(
          (input)=>{
           if(input.checked){
             const data = questions[index];

            if(input.value === data.correct){
                yes++;
                console.log(yes)
            }
            console.log(input.value);
               return input.value;

          }
      })
  }
  const resetTo = ()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked = false
        }
    )
  }
 const endQuiz = ()=>{
     const inner = box.innerHTML = ` 
     <div style="text-align:center">
     <h2>You score is ${yes}/${total}</h2> <br>
     Thank you for playing the Quiz
     </div>
    `

 }
loadQuestion();