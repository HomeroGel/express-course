const express = require('express')
const app = express()

app.get('/',(req, res)=>{  //.get es cuando el cliente solicita datos.
    res.send('Hello world')
})

app.get('/miarchivo', (req,res)=>{
    res.sendFile('./javascript.jpg',{ //devuelve un archivo jpg
        root: __dirname
    })
})

app.get('/user', (req,res)=>{
    res.json({  //devuelve la res en formato json
        "name":"Homero",
        "Lastname":"Gelves"
    })
})

app.get('/isAlive', (req,res)=>{
    res.sendStatus(204)  //Manda status 204 que esta todo ok pero sin contenido.
})


app.listen(4000)
console.log(`Server corriendo on port ${4000}`)