/***** Formas de declarar funciones ******/

/*function saludar(){
    return `Hola, ${nombre}`
}*/

const saludar = function(nombre){
    return `Hola, ${nombre}`
}

const saludar2 = (nombre) => `Hola, ${nombre}`

const getUser = () =>({    // los parentesis indican que se esta retornando el objeto de forma implicita
    uid:'ABC123',
    username: 'La_mami1502'
})

console.log(saludar('Dolores'))
console.log(saludar('Welcome'))
console.log(saludar2('Alex'))
console.log(getUser())


//Tarea
//1. transformar a una funcionde Flecha
//2. Tiene que retornar un objeto implicito
//3. Probar

function getUsuario(nombre){
    return{
        uid: 'ABC567',
        username: nombre
    }
}

const usaurioActivo = getUsuario('Valentina')
console.log(usaurioActivo)

const getUsers = (nombre) => ({
    uid: 'ABC567',
    username: nombre
})

const userActive = (getUsers('Alexander'))
console.log(userActive)