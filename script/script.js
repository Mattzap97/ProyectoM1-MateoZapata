const colorItems = document.querySelectorAll(".color-item");
const generateButton = document.getElementById("generate-btn");

function generatePalette() {
    const randomColor = Math.floor(Math.random() * 16777216);
    const hexColor = "#" + randomColor.toString(16).padStart(6, "0");
    return hexColor;
}

function paintPalette() {
    colorItems.forEach(function(item) {
        const newColor = generatePalette();
        const box = item.querySelector(".color");
        const name = item.querySelector(".name");
        box.style.backgroundColor = newColor;
        name.textContent = newColor;
    })  
}

generateButton.addEventListener("click", function() {
    console.log("Botón presionado!");
    paintPalette();
})

paintPalette();


const copyButton = document.getElementById("copy-btn");
function copyPalette(){
    console.log("Copiar activo!");
}
copyButton.addEventListener("click", copyPalette);