import  "./animations.js";




// Opening a modal when scrolling to spesefic section
const modal =  document.querySelector('.sale_modal-container'); 
const observer = new IntersectionObserver(entries => {
  
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                modal.classList.add('show');
                console.log(entry);
                observer.unobserve(document.querySelector('.announce'));
            }
        })

}); 

observer.observe(document.querySelector('.announce'));


//remove the modal when click on empty space
window.addEventListener('click', (e)=>{
    if(e.target === modal){
        modal.classList.remove('show');
    }
});