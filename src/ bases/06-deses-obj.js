const persona ={
    nombre: 'Dolly', 
    edad: 36,
    clave: '*123'
}

/*const { nombre, edad, clave } = persona

console.log(nombre)
console.log(edad)
console.log(clave) */

const retornarPersona = (usuario) =>{
    const {nombre, edad, clave} = usuario
    console.log(nombre, edad, clave)
}

retornarPersona(persona)

const returnPerson =({nombre, edad}) => {
    
    console.log(nombre, edad)
}
returnPerson(persona)

const usoContext = ({clave, nombre, edad}) => {

    return {
        numClave: clave,
        nombre1: nombre,
        edad1: edad,
        latLong: {
            lat:14.52,
            long: 12.65
        }
    }
}

const avenger = usoContext(persona)

//desestructuracion anidada de objetos
const {numClave, nombre1, edad1, latLong:{lat,long}} = avenger

console.log(numClave, nombre1, edad1)
console.log(lat, long)