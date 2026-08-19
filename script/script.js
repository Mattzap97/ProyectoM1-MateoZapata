const colorItems = document.querySelectorAll(".color-item");
const generateButton = document.getElementById("generate-btn");
const select = document.getElementById("select")
const formatOptions = document.querySelectorAll(`input[name = "grupo"]`)

const savedPalette = document.getElementById("saved-palette-container");

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

    return `HSL(${h}, ${s}, ${l}%)`;
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

//EVENTO QUE CAMBIA EL FORMATO DE COLORES HEX A HSL//
formatOptions.forEach(function(option){
    option.addEventListener("change", function() {
        updateFormat();

    })
})


//FUNCIÓN QUE PERMITE AL USUARIO COPIAR EL COLOR SELECCIONADO DENTRO DE LA PALETA//
function getColorInfo(item) {
    const name = item.querySelector(".name");//Busca el elemento donde actualmente se obtenga la información//
    const colorInfo = name.textContent;//Obtiene el texto que actualmente está mostrando la página//

    navigator.clipboard.writeText(colorInfo);
    showCopiedMessage(colorInfo);//Usar la función que muestra al usuario el nombre del color copiado//

    console.log("Color copiado", colorInfo);
}

/*EVENTO QUE RECORRE TODO EL COLOR ITEM Y GENERA EL EVENTO
DE COPIAR EL NOMBRE DEL COLOR SELECCIONADO*/
colorItems.forEach(function(item) {
    item.addEventListener("click", function(){
        getColorInfo(item);
    })
})


//FUNCIÓN QUE MUESTRA EN PANTALLA UN MENSAJE DEL COLOR COPIADO EN LA PALETA//
function showCopiedMessage(colorInfo) {
    const message = document.createElement("div");
    message.classList.add("copied-message");
    message.textContent = "Color Copiado ✔";

    document.body.appendChild(message);

    console.log("Mensaje creado:", message)

    setTimeout(function() {
        message.remove();
    }, 2000);
}


//EVENTO QUE GENERA NUEVOS COLORES AL DAR CLICK A GENERAR PALETA//
generateButton.addEventListener("click", function() {
    console.log("Botón presionado!");
    paintPalette();
})
paintPalette();


//EVENTO QUE PERMITE ELEGIR EL NUMERO DE COLORES DE ACUERDO A GUSTO DEL USUARIO//
select.addEventListener("change", paintPalette)


//FUNCIÓN QUE PERMITE GUARDAR LA PALETA GENERADA USANDO localStorage//
function savePalette() {

    const savedColors = [];//Establecer un array vacío mediante corchetes para dentro agregar la información de la paleta guardada//
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


//FUNCIÓN QUE MUESTRA AL USUARIO LA PALETA GUARDADA EN LOCAL STORAGE//
function showSavedPalette() {
    const savedData = localStorage.getItem("PaletaGuardada");//Recuperar la paleta guardada en localStorage//

    if (!savedData) {
        return;
    }
    const palettes = JSON.parse(savedData);  //JSON.parse permite transformar el texto en objetos//
    palettes.colors.forEach(function(color) { //Acceder a los colores y con el forEach recorrer cada color//
        const colorItem = document.createElement("div");//Crear elementos HTML desde JavaScript//
        colorItem.classList.add("saved-color-item");//Asignar una clase CSS al elemento HTML creado desde JavaScript//
        colorItem.style.backgroundColor = color;//Permite pintar cada color//

        let colorText;
        if (palettes.format === "HSL") { //Condición que establece si el formato de colores es HSL, se muestra aquel formato sin realizar
            colorText = hexToHSL(color); //otra conversión; caso contrario devuelve la información en formato HEX
        } else {
            colorText = color;
        }
        colorItem.textContent = colorText;

        savedPalette.appendChild(colorItem); //appendChild nos permite insertar los colores en la página//


        console.log("Paleta recuperada", palettes);
    })
}

//DEFINIR EVENTO AL DAR CLICK AL BOTON GUARDAR PALETA//
const copyButton = document.getElementById("copy-btn");
copyButton.addEventListener("click", function() {
    
    savePalette();
    showSavedPalette();
})
