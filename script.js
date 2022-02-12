//Create new function like this:
//function calculateBMI(weight, height) {
//    height = height / 100
//    let BMI = (weight / (height * height));
//    return BMI.toFixed(2);
//}
const btn = document.getElementById('calculate');

btn.addEventListener('click', function(){

   let height = document.querySelector('#height').value;
   let weight = document.querySelector('#weight').value;


    if (height == '' || weight == '') {
       //becareful about ; at end 
       alert('Please fill out the input fields')
       return;
    
    }
    // BMI = weight in KG / (height in m * height in m)
    height = height / 100
    let BMI = (weight /(height * height));
    BMI = BMI.toFixed(2);
   // const BMI = calculateBMI(weight, height)
    document.querySelector('#result').innerHTML = BMI;

    let status = '';
    if(BMI < 18.5){
      status = "Underweight";
    }
    if (BMI >= 18.5 && BMI < 25){ // use 'else if' instead of 'if'
        status = "Healthy";
    }
    if (BMI >= 25 && BMI < 30) { // use 'else if' instead of 'if'
        status = "Overweight";
    }
    if (BMI >= 30) { // use 'else if' instead of 'if'
        status = "Obese";
    }
 //is better to use class insted of id='comment'   
document.querySelector('.comment').innerHTML = `Comment: you are;
<span id="comment"> ${status}</span>`;
    

});
