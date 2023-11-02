import anime from "animejs";


// logo animations 
const logo = document.querySelector('#title'); 

const letters = logo.textContent.split('').map(letter => {
        return `<span id="logo-${letter}">${letter}</span>`;
}).join('');

logo.innerHTML = letters;




//quickmenu hover effect 

