const generateButton = document.getElementById("generate-btn");
function generatePalette(){
    console.log("Botón presionado!");
}
generateButton.addEventListener("click", generatePalette);
    

const copyButton = document.getElementById("copy-btn");
function copyPalette(){
    console.log("Copiar activo!");
}
copyButton.addEventListener("click", copyPalette);