const boxes = document.createElement("div");
const grid = document.querySelector(".container");

boxes.style.width = "25px";
boxes.style.height = "25px";
boxes.style.outline = "1px solid #000";

for(let i = 0; i <= 255; i++){
      const box = boxes.cloneNode(true);
      grid.appendChild(box);

      box.addEventListener('mouseenter', function() {
            this.style.backgroundColor = "#000";
      });
}




      







