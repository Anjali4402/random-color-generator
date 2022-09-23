const clickButton = document.querySelector('.click-btn');
const colorBox = document.querySelector('.inside-container');
const firstColor = document.getElementById('first-color');
const secondColor = document.getElementById('second-color');
const inRgb = document.getElementById('in-rgb');
const inhex = document.getElementById('in-hex');

let first;
let second;
let third;
let one;
let two;
let three;

function pressRgb(e){
    inhex.style.borderBottom = 'none';
    inRgb.style.borderBottom = '2px solid black';
    clickButton.addEventListener('click',()=>{
        randomNumber();
        
        const leftRgbColor = `rgb(${first},${second},${third})`;
        const rightRgbColor = `rgb(${one},${two},${three})`;
        colorBox.style.background = `linear-gradient(to right,${leftRgbColor},${rightRgbColor})`;
        firstColor.textContent = leftRgbColor;
        secondColor.textContent = rightRgbColor;
    })
};
function pressHex(){
    inRgb.style.borderBottom = 'none';
    inhex.style.borderBottom = '2px solid black';

    clickButton.addEventListener('click',()=>{
        randomNumber();
        
        newSet = [];
        const allNumber = [first,second,third,one,two,three];
        for(let i of allNumber){
            i = i.toString(16);
            if(i.length == 1){
                i = "0"+i
            }
            newSet.push(i)
        }
        const leftHexColor = `#${newSet[0]+newSet[1]+newSet[2]}`;
        const rightHexColor = `#${newSet[3]+newSet[4]+newSet[5]}`;      
        colorBox.style.background = `linear-gradient(to right,${leftHexColor},${rightHexColor})`;
        firstColor.textContent = leftHexColor;
        secondColor.textContent = rightHexColor;
        
    })
}

function randomNumber(){
    first = Math.floor(Math.random()*255);
    second = Math.floor(Math.random()*255);
    third = Math.floor(Math.random()*255);

    one = Math.floor(Math.random()*255);
    two = Math.floor(Math.random()*255);
    three = Math.floor(Math.random()*255);
}
