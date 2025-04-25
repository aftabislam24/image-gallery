let scrollContainer = document.querySelector(`.gallery`);
let backBtn = document.querySelector(`#back-btn`);
let nextBtn = document.querySelector(`#next-btn`);

scrollContainer.addEventListener(`wheel`,(evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
})  

nextBtn.addEventListener(`click`,()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 1000;
})
backBtn.addEventListener(`click`,()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 1000;
})