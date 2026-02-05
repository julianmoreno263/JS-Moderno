//prevenir event bubbling con delegation

const card=document.querySelector(".card")

card.addEventListener("click",(e)=>{
    // console.log(e.target)//asi sabemos a que le estamos dando click dentro del card,si a la img,info,etc

    //delegation es crear un codigo que especifique a que elemento especifico se le da click,se utiliza la clase de esos  elementos asi
    if (e.target.classList.contains("titulo")) {
        console.log("Diste click en titulo")
    }

    if (e.target.classList.contains("precio")) {
        console.log("Diste click en precio")
    }

    if (e.target.classList.contains("card")) {
        console.log("Diste click en card")
    }
})