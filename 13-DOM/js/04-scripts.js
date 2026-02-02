//querySelector trabaja como con los selectores de css, se utiliza el punto para apuntar a la clase que quiere seleccionar, si una clase esta en multiples elementos solo trae la del primer elemento, querySelector es el que s eutiliza mas que el getElementById o el getElementsByClassName

const card=document.querySelector(".card")
console.log(card)


//podemos tener selectores como los de css, si por ejemplo un elemento tiene una clase css y ademas ese elemento tiene un elemento hijo con otra clase podemos capturarla utilizando esas dos clases css,esto se llama especificacion. 
const info=document.querySelector(".premium .info")
console.log(info)


//si tengo una clase card en varios elementos pero yo quiero traerme el segundo elemento con esa clase nuevamente utilizo la especificidad y con nth-child() selecciono ese elemento que quiero y que es hijo.
const segundoCard=document.querySelector(".hospedaje .card:nth-child(2)")
console.log(segundoCard)


//querySelector tambien permite seleccionar ids, por eso se usa mas que los otros, se utiliza la misma nomenclatura de los ids en css osea el simbolo #. Si hay dos ids iguales solo trae el primero que encuentre, aunque solo deberia haber un id por documento

//seleccionar el formulario con el id=formulario
const form=document.querySelector("#formulario")
console.log(form)

//tambien permite seleccionar elemento por su etiqueta
const navegacion=document.querySelector("nav")
console.log(navegacion)
