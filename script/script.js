const colors = document.querySelectorAll(".color");
const generateButton = document.getElementById("generate-btn");

function generatePalette() {
    const randomColor = Math.floor(Math.random() * 16777216);
    const hexColor = "#" + randomColor.toString(16).padStart(6, "0");

    return hexColor;
}

generateButton.addEventListener("click", function() {
    console.log("Botón presionado!");

    colors.forEach(function(color) {
    const newColor = generatePalette();
    color.style.backgroundColor = newColor;
    color.textContent = newColor;

    })  
})

const copyButton = document.getElementById("copy-btn");
function copyPalette(){
    console.log("Copiar activo!");
}
copyButton.addEventListener("click", copyPalette);