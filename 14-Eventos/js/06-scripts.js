//el event bubbling o evento burbuja es cuando la accion de un evento se propaga a traves de otros elementos a los que no deberia y da como resultado cosas que no deberia hacer


//el event bubbling es cuando hacemos click en un elemento y se disparan los otros eventos, aqui por ejemplo si doy click en la zona de info se dispara tambien el click del card y el titulo, porque en si todos estan dentro del mismo div y eso es el event bubbling.

//para prevenir el event bubbling es facil,se usa el evento con stopPropagation()
const cardDiv=document.querySelector(".card")
const infoDiv=document.querySelector(".info")
const titulo=document.querySelector(".titulo")


cardDiv.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("Click en card")
})

infoDiv.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("Click en info")
})

titulo.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("Click en titulo")
})