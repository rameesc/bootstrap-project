
let carousalWidth=document.getElementsByClassName('carousel-inner')[0].scrollWidth

let cartWidth= document.getElementsByName('.carousel-item')[0].clientWidth;
let scrollPosition=0;

document.getElementsByName('carousel-control-next')[0].addEventListener("click",()=>{
  
    scrollPosition=scrollPosition+cartWidth;
    document.getElementsByName('.carousel-inner')[0].style.margin='50px'

})


