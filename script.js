const boxes = document.createElement("div");
const grid = document.querySelector(".container");

boxes.style.width = "25px";
boxes.style.height = "25px";
boxes.style.outline = "2px solid red";

grid.style.display = "grid";
grid.style.grid = "repeat(16, 1fr)/ repeat(16, 1fr)";
grid.style.width = "fit-content";
grid.style.height = "fit-content";

for(let i = 1; i <= 256; i++){
      grid.appendChild(boxes.cloneNode(true));
}




