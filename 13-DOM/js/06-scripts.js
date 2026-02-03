//modificar texto o imagenes con js, despues de seleccionarlos con algunos de estos metodos lo que podemos hacer es manipular los elementos


//selecionamos el titulo principal de la pagina,que es un h1,solo debe haber un h1 por documento
const encabezado=document.querySelector(".contenido-hero h1")
console.log(encabezado)


//estas son 3 formas de capturar el texto de ese h1, innerHTML trae el texto y las etiquetas html que tenga

console.log(encabezado.innerText)//no encuentra un texto que este oculto con la propiedad css visibility:hidden

console.log(encabezado.textContent)//textContent si encuentra el texto aunque este oculto con visibility:hidden

console.log(encabezado.innerHTML)//trae el html con el texto


//para hacer una modificacion directa que se vea en la pagina y no por consola como hasta ahora,se utiliza el codigo directamente asi
document.querySelector(".contenido-hero h1").textContent="nuevo titulo"//asi se cambia en la pagina el titulo

//NOTA: EN CHROME NO PODEMOS VER ESTAS PROPIEDADES DE TEXTCONTENT,INNERHTML,ETC, PERO EN HERRAMIENTAS DE FIREFOX SI PODEMOS VERLAS, AL CAPTURAR POR EJEMPLO EL H1 LO EXPANDIMOS Y NOS APARECE LA LISTA DE PROPIEDADES QUE PODEMOS USAR CON ESE ELEMENTO

//SI QUEREMOS MODIFICAR UNA IMG UTILIZAMOS LA PROPIEDAD SRC,PODEMOS VERLA CON FIREFOX
// const img=document.querySelector(".card img")
// img.src="img/hacer2.jpg"
