// const boxImg = document.querySelectorAll("li");
// const img = document.querySelectorAll("img");
// const box = document.querySelector(".gallery");
// console.log(boxImg)
// console.log(img )
// console.log(box)

// let currentImageIndex  ;


// for (let i = 0; i < img.length; i++) {
//     img[i].addEventListener("click", (e) =>{
        
//         img[i].classList.toggle("full-image");
//         img[i].parentElement.classList.toggle("full-image-container");
//         currentImageIndex = i;
//     })
// }


//     window.addEventListener("keydown", (event) =>{

        

//         if(event.key === "ArrowLeft"){
//            
//             img[currentImageIndex].classList.toggle("full-image");
//             img[currentImageIndex].parentElement.classList.toggle("full-image-container");
//     currentImageIndex -= 1;
//     if(currentImageIndex < 0){
//         currentImageIndex = 0;
//     }
//     img[currentImageIndex].classList.toggle("full-image");
//     img[currentImageIndex].parentElement.classList.toggle("full-image-container");
    
// }else if(event.key === "ArrowRight"){
//     img[currentImageIndex].classList.toggle("full-image");
//     img[currentImageIndex].parentElement.classList.toggle("full-image-container");
// currentImageIndex += 1;
// if(currentImageIndex >= img.length){
// currentImageIndex = img.length -1;
// }
// img[currentImageIndex].classList.toggle("full-image");
// img[currentImageIndex].parentElement.classList.toggle("full-image-container");
// }
//     })








// завдання 2 
const container = document.querySelector(`[data-container]`);
const input = document.querySelector(`[data-input]`);
const buttonCreate = document.querySelector(`[data-action="render"]`);
const buttonRemove = document.querySelector(`[data-action="destroy"]`);
const divEmpty = document.querySelector(`[data-box-div]`);

const arr = [];
let size = 30;

buttonCreate.addEventListener("click", () => {
    createBoxes(input.value);
});



function createBoxes (amount){
    for(let i = 0; i < amount; i++){
        const block = document.createElement("div");
block.style.width = `${size}px`;
block.style.height = `${size}px`;
const r = Math.random() * 255;
const g = Math.random() * 255;
const b = Math.random() * 255;
block.style.background = `rgb(${r}, ${g}, ${b},)`;
   arr.push(block);
   size += 10;
    }

    divEmpty.append(...arr);
    
    
};