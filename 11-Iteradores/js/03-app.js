//reto del fizz buzz, se tiene una serie de elementos,por ejemplo numeros del 1 al 100, los multiplos de 3 deben imprimir fizz,osea el 3,6,12,15,etc. Los multiplos de 5 deben imprimir la palabra buzz, los multiplos de 3 y 5 imprimen fizz-buzz, por ejemplo 15,30,45.

//nota: se pone de primeras la condicion que va a pasar menos veces,asi se ejecuta bien el programa,osea ponemos de primeras la condicion del multiplo de 3 y 5, osea 15,etc.

for (let i = 1; i < 100; i++) {
    if (i%3===0 && i%5===0) {
        console.log(`${i}: FIZZ-BUZZ`)
    }else if (i%3===0) {
        console.log(`${i}: FIZZ`)
    }else if (i%5===0) {
        console.log(`${i}: BUZZ`)
    }
    
}

