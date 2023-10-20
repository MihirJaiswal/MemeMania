const form = document.querySelector("form");

form.addEventListener('submit', function(e){
    e.preventDefault();
   
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const status = document.querySelector('#status');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML =`please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML =`please give a valid weight ${weight}`;
    }
    else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    result.innerHTML = `<span>${bmi}</span>`
    }
});



/*if (result < 18.6) {
    status.innerHTML = `<span>You are Underweight</span>`;
} 

else if (result >= 18.6 && bmi.result <= 24.9) {
    status.innerHTML = `<span>You have a normal weight</span>`;
    
}

else {
    status.innerHTML = `<span>You are overweight</span>`;
}*/
