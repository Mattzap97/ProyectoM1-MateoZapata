const colorItems = document.querySelectorAll(".color-item");
const generateButton = document.getElementById("generate-btn");
const select = document.getElementById("select")
const formatOptions = document.querySelectorAll(`input[name = "grupo"]`)

//FUNCIÓN QUE GENERA UN NUEVO COLOR HEX//
function generatePalette() {
    const randomColor = Math.floor(Math.random() * 16777216);
    const hexColor = "#" + randomColor.toString(16).padStart(6, "0");
    return hexColor;
}

//FUNCIÓN QUE GENERA Y PINTA UNA NUEVA PALETA//
function paintPalette() {
    const quantity = Number(select.value);
    const format = document.querySelector(`input[name="grupo"]:checked`).value;
    colorItems.forEach(function(item, index) {
        
        if (index < quantity) {
            item.style.display = "block"

            const newColor = generatePalette();
            const box = item.querySelector(".color");
            const name = item.querySelector(".name");
        
            box.style.backgroundColor = newColor;
            if (format === "HSL"){
                name.textContent = hexToHSL(newColor);
            } else {
                name.textContent = newColor;
            }
            item.dataset.hex = newColor;
        } else {
            item.style.display = "none";
        }
    })  
}

/*FUNCIÓN QUE TRANSFORMA FORMATO HEX A HSL*/
function hexToHSL (hex) {
    let r = parseInt(hex.substring(1, 3), 16) / 255;
    let g = parseInt(hex.substring(3, 5), 16) / 255;
    let b = parseInt(hex.substring(5, 7), 16) / 255;

    const max = Math.max(r ,g, b);
    const min = Math.min(r, g, b);

    let h;
    let s;
    let l = (max - min) / 2;

    if (max === min){
        h = 0;
        s = 0;

    } else {
        const difference = max -min;

        s = l > 0.5
            ? difference / (2 - max - min)
            : difference / (max + min);

        switch (max) {

            case r:
                h = (g - b) / difference + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / difference + 2;
                break;
            case b:
                h = (r - g) / difference + 4;
                break
        }
        h = h / 6;
    }
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return `hsl(${h}, ${s}, ${l}%)`;
}

/*FUNCIÓN CON LA LÓGICA QUE PERMITE ACTUALIZAR EL FORMATO
DE COLORES DEPENDIENDO DE LA ELECCIÓN DEL USUARIO*/
function updateFormat() {
    const selectedformat = document.querySelector(`input[name="grupo"]:checked`);
    const format = selectedformat.value;
    colorItems.forEach(function(item) {
        const name = item.querySelector(".name");
        const hex = item.dataset.hex;

        if(!hex) {
            return;
        }
        if (format === "HEX") {
            name.textContent = hex;
        } else if (format === "HSL") {
            name.textContent = hexToHSL(hex);
        }
    })
}

//EVENTO QUE GENERA NUEVOS COLORES AL DAR CLICK A GENERAR PALETA//
generateButton.addEventListener("click", function() {
    console.log("Botón presionado!");
    paintPalette();
})
paintPalette();


//EVENTO QUE CAMBIA EL FORMATO DE COLORES HEX A HSL//
formatOptions.forEach(function(option){
    option.addEventListener("change", function() {
        updateFormat();

    })
})


//EVENTO QUE PERMITE ELEGIR EL NUMERO DE COLORES DE ACUERDO A GUSTO DEL USUARIO//
select.addEventListener("change", paintPalette)


//FUNCIÓN QUE PERMITE GUARDAR LA PALETA GENERADA USANDO localStorage//
function savePalette() {

    const savedColors = [];
    colorItems.forEach(function(item) {
        if (item.style.display !== "none") {
            savedColors.push(item.dataset.hex);
        }
    })

    const format = document.querySelector(`input[name="grupo"]:checked`).value;
    const palette = {
        colors: savedColors,
        format: format
    }

    localStorage.setItem("PaletaGuardada", JSON.stringify(palette));
    console.log("Copiar Activo!");
    console.log(localStorage.getItem("PaletaGuardada"));    
}


//DEFINIR EVENTO AL DAR CLICK AL BOTON COPIAR//
const copyButton = document.getElementById("copy-btn");
copyButton.addEventListener("click", function() {
    
    savePalette();
})
