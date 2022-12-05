const getImagen = async() => {
    try {

    const apiKey = 'w3vXqaeuLYSWeJ1G9Bu5ZUfIZfIzaCtN'
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const { data } = await resp.json()
        const { url } = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append( img )
    }
    catch (error){
        console.error(error)
    }
    
}

getImagen()



/*peticion
    .then( resp => resp.json())
    .then(({data})=> {
        const { url } = data.images.original
        console.log(url)
        const img = document.createElement('img')
        img.src = url

        document.body.append( img )
    })
    .catch(console.warn)*/