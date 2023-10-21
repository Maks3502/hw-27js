const boxImg = document.querySelectorAll("li");
const img = document.querySelectorAll("img");
const box = document.querySelector(".gallery");
console.log(boxImg)
console.log(img )
console.log(box)

// for (let i = 0; i < boxImg.lenght; i++) {
    let currentImageIndex = 1;
   
    window.addEventListener("keyprees", (event) =>{

        currentImageIndex.classList.toggle("full-image-container")
        img.classList.toggle("full-image")

        if(event.key === "ArrowLeft"){
    currentImageIndex(-1);
}else if(event.key === "ArrowRight"){
    currentImageIndex(1);
}
    })

// }


// document.addEventListener("keyup", flipThrough);

// let currentImageIndex = 1;

// const flipThrough = (event) => {
// if(event.key === "ArrowLeft"){
//     currentImageIndex(-1);
// }else if(event.key === "ArrowRight"){
//     currentImageIndex(1);
// }
// }



// завдання 2 
// const container = document.querySelector(`[data-container]`);
// const input = document.querySelector(`[data-input]`);
// const buttonCreate = document.querySelectorAll(`[data-action="render"]`);
// const buttonRemove = document.querySelectorAll(`[data-action="destroy"]`);
// const divEmpty = document.querySelector(`[data-box-div]`);


// buttonCreate.addEventListener("click", () => {

// })


// buttonCreate.removeEventListener("click", () => {

// })

// function createBoxes(amount) {

// }