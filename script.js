const boxes = document.createElement("div");
const grid = document.querySelector(".container");
const button = document.querySelector("#btn");
let size = 16;

boxes.style.width = "25px";
boxes.style.height = "25px";
boxes.style.outline = "1px solid #000";

let generateGrid = (s) => {
      let temp = s;
      s = s * s;
      for(let i = 1; i <= s; i++){
            const box = boxes.cloneNode(true);
            grid.appendChild(box);
      
            box.addEventListener('mouseenter', function() {
                  this.style.backgroundColor = "#000";
            });
      }  
      let gridWidth = temp * 25;
      console.log(gridWidth);
      grid.style.maxWidth = `${gridWidth}px`;
}
generateGrid(size);

button.addEventListener('click', function() {
      let input = parseInt(prompt("Input the number of squares per side(Limit: 1 - 100)"));
      if(input <= 100 && input > 0) {
            grid.innerHTML = "";
            size = input;
            return generateGrid(size);
      }else{
            return alert("Invalid Input");
      }
});




      







