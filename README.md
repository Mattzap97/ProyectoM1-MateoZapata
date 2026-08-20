# Colorfly Studio 🎨

Colorfly Studio es una aplicación web sencilla e interactiva que brinda al usuario la posibilidad de generar paletas de colores. 
Permite elegir la cantidad de colores, mostrar cada uno en su formato HEX o HSL dependiendo de la elección del usuario; así como también copiar la información del color al portapapeles.

La página web fue realizada como proyecto integrador del Módulo 1 de Full Stack Development y se desarrolló en base a todos los conocimientos adquiridos con HTML semántico, CSS y JavaScript vanilla.  

Link de la aplicación demo generada en Github pages: 
https://mattzap97.github.io/ProyectoM1-MateoZapata/


## Funcionalidades

<li>Generación aleatoria de paletas de colores con 6, 8, 9 colores dependiendo de la elección del usuario.</li>
<li>Creación de una nueva combinación de colores al hacer clic al botón "Generar Paleta".</li>
<li>Selección de formato HEX o HSL.</li>
<li>Permite copiar la información de un color al portapapeles, ya sea en formato HEX o HSL.</li>
<li>Mensajes con formato micro feedback que informan al usuario la acción de generar una nueva paleta y copiar un color.</li>
<li>Creación automática de una nueva paleta al recargar la página.</li>
<li>Animaciones sutiles en cada tarjeta de color al pasar el mouse sobre los colores de la paleta.</li>
<li>Barra de navegación con enlaces internos que permiten al usuario acceder de forma instantánea a la sección que desea visitar.</li>
<li>Diseño responsive sencillo para computadoras y smartphones.</li>
<li>Los colores aleatorios generados en pantalla se mantienen igual al cambiar de formato HEX a HSL y viceversa.</li>  


## Tecnologías utilizadas para el desarrollo del proyecto

### Las tecnologías que se usaron en base a los aprendizajes adquiridos durante el Módulo 1 son:  

<li>HTML5: Estructura e identación semántica</li>
<li>CSS3: Estilos, formatos y diseños Flexbox y Grid para dar mejor visualización al contenido de la página.</li>
<li>JavaScript: Interactividad y lógica para la generación aleatoria de colores; Manipulación del DOM y uso de la consola para depurar errores.</li>
<li>Git y Github: Realizar commits para guardar cada cambio realizado durante el desarrollo del proyecto.</li>


## Instrucciones para el uso de la página
1. En la barra de navegación haz clic en Generar Paleta, el cual contiene un enlace interno para que te lleve directamente al botón generador de paletas.
2. Elegir el formato de colores: HEX o HSL.
3. Selecciona la cantidad de colores a generar ( entre 6, 8 y 9 respectivamente ).
4. Pulsar el botón "Generar Paleta" para crear colores aleatorios.
5. Debajo de cada tarjeta encontrarás su información dentro de un recuadro blanco visible, Pulsa sobre el color que desees para copiar su información.
6. Comprobar el mensaje en pantalla que te confirma la acción de copiar.


## Decisiones técnicas

### Estructura HTML:

La interfaz de este proyecto está organizada con header, body, nav, main, section y footer.

### Diseños y formatos en CSS: 

Dentro del archivo CSS se definió la estructura del proyecto, además de establecer un solo tipo de fuente para todo el texto que lo conforma; con color blanco para que el usuario no presente dificultades al leer el texto que contiene la página, tanto en títulos, como enlaces internos y contenido de los botones.

El cuerpo de la página se estableció con un fondo de color oscuro para que las tarjetas de colores resalten y sean visibles al momento de generar colores aleatorios. La información del color tiene texto oscuro y un fondo de color blanco para ayudar a la accesibilidad del usuario y no presente problemas en leer la información de cada color independientemente del formato seleccionado.

Cada tarjeta de color tiene una animación sutil que ayuda al usuario a identificar el color que está señalando, lo cual permite mayor facilidad al momento de pulsar el color que desea obtener su información para copiar en el portapapeles.

Al dar clic en "Generar paleta" y pulsar el color que desea copiar al portapapeles se generarán mensajes informativos que confirman al usuario la acción realizada. Para estos mini mensajes se diseñó un fondo de color blanco y texto de color oscuro que facilita su lectura; además de un lapso de tiempo de 2 segundos para mantener el mensaje en pantalla.

Los colores de la paleta junto con el recuadro de su información usan formato Flexbox para separar ambos elementos y evitar que se encuentren muy juntos; Y cada tarjeta de color con su información se distribuyen dentro del contenedor de paletas con CSS grid para brindar un estilo mas interactivo.

### Interactividad y Lógica en JavaScript:

Cada valor HEX se construye generando seis caracteres aleatorios de la cadena 0123456789ABCDEF y con el signo de numeral (#) al inicio. 

Ejemplo:

#ba0a1d

Para los colores en formato HSL se deben tomar sus parámetros:

<li>H: Hue (tono del color entre 0 y 359 grados)</li>

<li>S: Saturation (Saturación del color entre 60 y 100%)</li>

<li>L: Luminous (Luminosidad del color entre 35 y 65%)</li>  

 Este formato permite al usuario trabajar con la saturación y luminosidad para obtener mayor gama de colores brillantes u opacos.

Ejemplo:

HSL(292, 74, 10%)

Para guardar una paleta de colores se ocupa localStorage.setItem() y previamente haber definido un array vacío para que después de haber recorrido todos los colores contenga la información guardada de cada uno. Al momento de guardar la paleta se puede comprobar en la consola todos los colores guardados que aparecen en localStorage respetando el número de colores y el formato seleccionado por el usuario.

IMPORTANTE: La consola mostrará la información de los colores dentro de la paleta guardada; sin embargo aún no se mostrarán en la página por decisión técnica propia para evitar romper la lógica dentro del código que permite la funcionalidad total de la página.

Después de algún tiempo se realizará una actualización para que el usuario pueda visualizar la paleta guardada junto con sus respectivos colores.


Para el menú selector de números de colores a generar dentro de la paleta desde HTML se definió desde el comienzo que llevarían los 9 colores con su respectivo recuadro de información debajo de cada color. Esto con la intención de que dentro de JavaScript resulte más sencillo ocultar los colores en cuanto el usuario seleccione 8 o 6.

La información del color, sea en formato HEX o HSL se muestra dentro de un recuadro blanco afuera de la tarjeta de cada color para evitar problemas con la lógica previamente establecida y para brindar mayor accesibilidad en la lectura. 

Dentro de HTML se definió un div con anterioridad para guardar esta información y en JavaScript llamarlo con su clase definida con querySelector(".name")


## Cómo ejecutar el proyecto

### Para ejecutar el proyecto dentro de Visual Studio Code sigue los siguientes pasos:

1. Descargar o clonar el repositorio.
2. Seleccionar la carpeta del repositorio en Visual Studio Code.
3. Instalar la extensión Live Server. (Omitir este paso si ya la tienes instalada).
4. Abrir Index.html.
5. Presionar open with Live Server.

## Cómo desplegar el proyecto en Github Pages

1. Subir todos los archivos al repositorio de github respetando la estructura de las carpetas.
2. Verificar que el archivo Index.html se encuentre en la raíz del repositorio.
3. Abrir la opción "settings" en el repositorio.
4. Seleccionar "pages" dentro de la sección Code and automation.
5. En build and deployment seleccionar "deploy from a branch".
6. seleccionar la rama main y como carpeta de origen /(root).
7. Pulsar Save y esperar entre 1 - 2 minutos o recargar la página para recibir el link que contiene el proyecto.  

## Capturas del flujo principal  

Arriba de la paleta el usuario encontrará las opciones de formato HEX y HSL. Selecciona el formato de tu preferencia al hacer clic para marcar la opción.  

<img width="1342" height="616" alt="Captura de pantalla (3)" src="https://github.com/user-attachments/assets/cbd6a78c-074b-4cb2-a175-b4807e76db91" />  

El usuario puede escoger entre 6, 8 o 9 colores y al hacer clic en "generar paleta" los colores aleatorios aparecerán dependiendo del número de colores seleccionado.  

<img width="1345" height="629" alt="Captura de pantalla (5)" src="https://github.com/user-attachments/assets/43a41901-b596-468c-a3d5-74b9f5048d26" />  

Al hacer clic sobre cualquier color aparecerá un pequeño mensaje en la pantalla confirmando al usuario que la información del color se copió al portapapeles.

<img width="1352" height="628" alt="Captura de pantalla (6)" src="https://github.com/user-attachments/assets/5b800a85-1acf-4c2d-81f5-43eb471da890" />  

Contenido de la página adaptada para modo responsive en pantallas de smartphones manteniendo la misma funcionalidad.  

<img width="200" height="350" alt="1787201297453" src="https://github.com/user-attachments/assets/e7b659c9-f9fd-4648-af07-1512bb187b47" />




## Uso de la Inteligencia Artificial  

Durante el desarrollo de la página web se usaron ChatGpt, Claude y Gemini como herramientas de apoyo.  

Estas aplicaciones brindaron asistencia para realizar una mejor estructura en HTML, corregir y mejorar estilos ya establecidos en CSS; y añadir nuevo conocimiento para mejorar la lógica y manipulación de eventos en JavaScript sin necesidad de romper la funcionalidad total de la página.  

Los prompts utilizados y la evidencia visual de como la inteligencia artificial influyó para el desarrollo de este proyecto están documentados en [PROMPTS.md](PROMPTS.md).
