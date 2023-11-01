import anime from "animejs";
const logo = document.querySelector('#title'); 

const letters = logo.textContent.split('').map(letter => {
        return `<span id="logo-${letter}">${letter}</span>`;
}).join('');

logo.innerHTML = letters;



anime({
    targets: logo.children,
    translateX: [anime.random(-12,12), 0],
    translateY: [anime.random(-12,12), 0],
    opacity:[0,1],
    easing:'easeOutSine',
    delay: function(el,i) {return i*anime.random(100,250)},
    loop:true,
    duration:2500,
});