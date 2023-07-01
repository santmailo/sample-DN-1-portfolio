
// let dynamicTexts = ["Software Engineer", "Web Developer", "Web Designer", "Content Creator"];
// const spanText = document.getElementById("dynamic-text");
// // console.log(spanText);
// let indexLetter = 0;
// let work  = 1;
// function typeWriter(phrase){
//     // work = work%dynamicTexts.length();
//     if(indexLetter==phrase.length){
//         clearTypeWriterText(phrase);
//     }
//     else if(indexLetter<phrase.length){
//         spanText.innerText+=phrase.charAt(indexLetter);
//         indexLetter++;
//         setTimeout(() => {
//             typeWriter(phrase);
//             // console.log(spanText.innerText);
//         }, 200);
//     }
// }

// typeWriter(dynamicTexts[work]);

// function clearTypeWriterText(){
//     if(indexLetter==-1){
//         work+=1;
//         work = work%dynamicTexts.length;
//         typeWriter(dynamicTexts[work]);
//     }
//     else if(indexLetter > -1){
        // spanText.innerText = "";
//         spanText.innerText+=dynamicTexts[work].slice(0,indexLetter);
//         indexLetter--;
//         setTimeout(() => {
//             clearTypeWriterText();
//             // console.log(spanText.innerText);
//         },100)
//     }    
// }


//array of words to display;
let dynamicTexts = ["Software Engineer", "Web Developer", "Web Designer", "Content Creator"];
const spanText = document.getElementById("dynamic-text");
let index = 0;
let arrIndex = 0;
let str = dynamicTexts[arrIndex];
function addText(){
    if(index==str.length){
        clearText();
    }
    else if(index<str.length){
        spanText.innerText+=str.charAt(index);
        index++;
        setTimeout(()=> {
            addText();
        },200);
    }
}
addText();

function clearText(){
    // console.log("hello");
    if(index==-1){
        arrIndex+=1;
        arrIndex%=dynamicTexts.length;
        str = dynamicTexts[arrIndex];
        addText();
    }

    else if(index>-1){
        spanText.innerText = str.slice(0,index);
        index--;
        setTimeout(() => {
            clearText();
        },100);
    }
}