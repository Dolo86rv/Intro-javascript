import {getHeroeById} from './ bases/08-imp-exp'

/*const promesa = new Promise((resolve,reject)=>{
    setTimeout(() => {
        const heroes = getHeroeById(2) 
        resolve (heroes)
    }, 2000);
})

promesa.then((heroe)=>{
    console.log('Heroe', heroe)
})*/

/***** Uso del Reject *****/
/*const promesas = new Promise((resolve,reject)=>{
    setTimeout(() => {
        const heroe = getHeroeById(2) 
        reject ('No se pudo encontrar al heroe')
    }, 2000);
})

promesas.then((heroe)=>{
    console.log('Heroe', heroe)
})
.catch(err => console.warn(err))*/

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const heroes = getHeroeById(id) 
            if (heroes === undefined)
                reject('No se puso encontrar al Heroe')
            resolve (heroes)
        }, 2000);
    })
}

getHeroeByIdAsync(3)
    .then(console.log)
    .catch(console.warn)