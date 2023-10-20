const randomColor = function() {
    const hex = "1234567890ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]; 
    }
    return color;
}

let intervalID;

const startChangingColor = function() {
    intervalID = setInterval(changeBgColor, 1000);

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function() {
    clearInterval(intervalID);
}

document.querySelector('#start').addEventListener('click', startChangingColor); 
document.querySelector('#stop').addEventListener('click', stopChangingColor); 
