const nombre = 'Dolores'
const apellido = 'Rodriguez'

//const nombreCompleto = nombre + ' ' +apellido

const nombreCompleto =` ${nombre} ${apellido} `

console.log(nombreCompleto)

function getSaludo(nombre){
    return ` Hello friend  ${nombre} `
}

console.log(` This is a text: ${getSaludo(nombre)} `)