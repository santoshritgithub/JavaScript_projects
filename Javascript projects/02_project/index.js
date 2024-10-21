const form = document.querySelector('form');

form.addEventListener('click',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results= document.querySelector('#results');
    const print=  document.querySelector('.p');


  if(height==='' || height<0 || isNaN(height)){
    results.innerHTML = `<h1>Please give a valid height, ${height} is not valid </h1>`;
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML = `<h1>Please give a valid weight, ${weight} is not valid</h1>`;
  } else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
     function find(bmi){
        if(bmi<18.6){
             print.innerHTML = "Under Weight";
        }
        else if(bmi>=18.6 && bmi<=24.9){
            print.innerHTML = "Normal Range";
        }
        else{
            print.innerHTML = " Overweight";
        }
     }
     find(bmi);
    //showing the result
    results.innerHTML =  `<span><h1>${bmi}</h1></spam>` 
    
  }

})