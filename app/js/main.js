import  "./animations.js";


    const modal =  document.querySelector('.sale_modal-container'); 

const observer = new IntersectionObserver(entries => {
  
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                console.log(entry);
            }else {
                console.log(entry);
            }
        })

}); 




window.addEventListener('click', ()=>{
    
    modal.classList.toggle('show');
}
)