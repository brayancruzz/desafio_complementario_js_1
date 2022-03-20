let ingresarnumero = parseInt(prompt('Ingresa numero'))
let palabra = prompt('Ingresa la palabra que quieres imprimir')

for (let i = 1; i <= ingresarnumero; i++){
    alert( palabra + ' x '+ i);
    if(i == ingresarnumero){
        alert('Felicidades terminaste, toma tu dulce')
        let tomarDulce = prompt("Aceptas el dulce? Escribe 'SI' o 'NO'")
        if(tomarDulce == 'SI'){
            alert('Disfrutalo')
        } else if(tomarDulce == 'NO'){
            alert('No tomaste el dulce')
        } else if(tomarDulce != 'SI' && tomarDulce != 'NO')
            alert('Ni modo :/')
        }}
