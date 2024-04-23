const boxes = document.createElement("div");
const grid = document.querySelector(".container");

boxes.style.width = "25px";
boxes.style.height = "25px";
boxes.style.outline = "1px solid #000";

for(let i = 0; i <= 255; i++){
      grid.appendChild(boxes.cloneNode(true));
}

let cell = document.querySelectorAll("div > div")

cell.addEventListener('mouseenter', () => {
      cell.style.backgroundColor = "#000";
      // grid.classList.add("cell");
      console.log("hovered");
});




