const person = {
    nombre: 'Tina',
    apellido: 'Gomez',
    edad: 20,
    direccion: {
        ciudad: 'Bayamo',
        pais: 'Cuba'
    }
}

/***** Formas de imprimir un objeto en consola ******/

//console.log( { persona:person } ) 
//console.log( person )               
//console.table( person )   

/**** Se puede clonar el objeto ******/

const person2 = { ...person }
person2.nombre = 'Valen'

console.log( person )
console.log( person2 )