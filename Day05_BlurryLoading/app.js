const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let angle =90; 
let int= setInterval(blurring,30);




//map a range of numbers to another range of numbers

const scale = (number, inMin, inMax, outMin, outMax) =>{
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}



function blurring(){
    angle--;
    var pi = Math.PI;
    var randians = angle * (pi/180);
    if(angle<1){
        clearInterval(int)
    }
    const degree = Math.sin(randians);
    loadText.style.opacity = degree;

    let blurr = (`${scale(degree, 1,0,30,0)}`);
    bg.style.filter = `blur(${blurr}px)`;

    load = parseInt(`${scale(degree, 1,0,0,100)}`);
    loadText.innerText =`${load}%`

    console.log(degree, blurr, load)
}


