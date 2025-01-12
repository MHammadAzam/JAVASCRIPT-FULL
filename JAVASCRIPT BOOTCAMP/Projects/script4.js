// Generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++){

       color += hex[Math.floor(Math.random() * 16)]
    }
    return color
    
}
let intervalId;
document.querySelector('#start').addEventListener('click', function(e){
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
 intervalId = setInterval(changeBgColor, 1000)
    // document.body.style.backgroundColor = randomColor(); // it is running continously so use set interval
})

document.querySelector('#stop').addEventListener('click', function(e){
   
    clearInterval(intervalId);
})

