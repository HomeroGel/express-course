const express = require('express')
const app = express()

app.get('/hello/:user', (req,res)=>{
    res.send(`Hello ${req.params.user}`)
})


app.get('/add/:x/:y', (req, res)=>{
    const {x, y} = req.params
    res.send(`Result: ${parseInt(req.params.x) + parseInt(req.params.y)}`)
})

app.get('/users/:username/photo', (req,res)=>{
    if(req.params.username === 'homer'){
        return res.sendFile('./javascript.jpg', {
            root: __dirname
        })
    }

    res.send('El usuario no tiene acceso.')
})


//Querys

app.get('/search', (req, res)=>{ //Las querys es lo que va dps del ? en una url
    if(req.query.q === "JavaScript Books"){
        res.send('Lista de libros de JavaScript')
    }else{
        res.send("Pagina normal")
    }
})


//all method

app.all('/server', (req, res)=>{ //.all hace que cualquier metodo funcione en esa ruta (get, post, put, delete, patch)
    res.send("Server info")
})

app.listen(6500)
console.log(`Server on port ${6500}`)