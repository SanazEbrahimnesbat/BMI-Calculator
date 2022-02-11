let btn = document.getElementById('btn');

btn.addEventListener('click' , function(){
    let weight = document.getElementById('weight-input').value;
    let height = document.getElementById('height-input').value;
    let finalbmi = (weight / (height * height) * 10000);
    document.getElementById('bmi-output').value = finalbmi;
})