import anime from "animejs";


// logo animations 
const logo = document.querySelector('#title'); 

const letters = logo.textContent.split('').map(letter => {
        return `<span id="logo-${letter}">${letter}</span>`;
}).join('');

logo.innerHTML = letters;

const logo_timeline = anime.timeline({
        autoplay:true,
});
        
const primaryColor =  '#d97706'; 
const normalColor =  '#ffffffbc'; 

        logo_timeline.add({
                targets:'#title span',
                easing:'easeOutElastic(1,.8)',
                translateY: [-50,0],
                scaleY:[4,1,{duration:200}],
                delay: anime.stagger(100),
                duration:1000,

        }).add({
                targets:'#title span',
                easing:'easeOutSine',
                scale: [1,1.2,1,1,1,1,1,1,1,1,1.2,1],
                delay: anime.stagger(100),
                duration:1000,
        })


//hero hover effect 


       const hero_animation = anime.timeline({
        
        duration:2000,
        
       });
       
       hero_animation.add({
        targets:'.hero_card-content',
        translateX:[350,0],
        opacity: [0,1],
        duration:1000,
        delay:400,
        easing:'easeInOutSine',
       }).add({
        targets:'.hero_card-content > *',
        translateX:[350,0],
        opacity: [0,1],
        duration:1000,
        delay:anime.stagger(100),
        easing:'easeInOutElastic(.5,.8)',
       },1000)
       .add({
        targets:'.hero_button',
        easing:'easeOutElastic(.8,.7)',
        scale: [1,1.2,1],
        loop:true,
       })



       //hero_button 
   



//        hamburger menu 
const nav_list_animation = anime({
        targets:'.navigation_list > * ',
        translateX: [350,0],
        opacity: [0,1],
        easing: 'easeOutElastic(.7,.9)',
        delay: anime.stagger(100),
        duration: 2000,
        autoplay:false,
});
 
const hamburger_menu = document.querySelector('.nav_hamburger-btn'); 
const menu_overlay = document.querySelector('.menu_overlay'); 

hamburger_menu.addEventListener('click',()=> {
    if(menu_overlay.getAttribute('aria-expanded') == 'true'){
        menu_overlay.setAttribute('aria-expanded','false')
}else {
    menu_overlay.setAttribute('aria-expanded','true')
    
}
    menu_overlay.classList.toggle('open_menu');
    if(document.querySelector('.menu_overlay').getAttribute('aria-expanded') == 'true'){
        nav_list_animation.play();
}else {
        console.log('it is false');

    
}
})




