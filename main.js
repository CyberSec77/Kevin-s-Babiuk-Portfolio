// Typing effect in Javascript
const typedTextSpan = document.querySelector(".typing1");

// Things displayed after the initial text
const textArray = ["a 18 year old high student", "a freelance web developer", "a creator"];

const typingDelay = 200;

const erasingDelay = 100;

const newTextDelay = 2000;

let textArrayIndex = 0;

let charIndex = 0;

// Types the things in the website
function type() {
    if(charIndex < textArray[textArrayIndex].length) {
typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
charIndex++;
setTimeout(type, typingDelay);
    }
    else {
        setTimeout(erase, newTextDelay);
    }
}

// Erases the things typed in the website
function erase() {
    if(charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
textArrayIndex++;
if(textArrayIndex >= textArray.length) textArrayIndex = 0;
setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
setTimeout(type, newTextDelay + 250);
});