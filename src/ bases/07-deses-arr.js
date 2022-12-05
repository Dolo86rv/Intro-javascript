const personajes = ['Goku', 'Vegeta', 'Trunks']

const [ P1 ] = personajes
const [ , P2 ] = personajes
const [ , ,P3 ] = personajes

console.log(P1)
console.log(P2)
console.log(P3)

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo()
console.log(letras,numeros)

//Tarea

const usoState = (valor) => {
    return [ valor, () => { console.log('Hola Mundo')}]
}

const [nombre, setNombre] = usoState ('Goku')
console.log(nombre)
setNombre()
