const express = require('express')
const app = express()

app.get('/profile', (req, res)=>{
    res.send("Profile list")
})

//Funcion middleware
app.use((req, res, next)=>{ //El next me sirve para que ejecute el codigo y siga con el flujo, sino la pagina queda recargando.
    console.log("paso por aca")

    next()
})

app.use((req, res, next)=>{
    if(req.query.login === "homero.dev@gmail.com"){
        next()
    }else{
        res.send("No autorizado.")
    }
})

app.get('/dashboard', (req, res)=>{
    res.send('Dashboard page')
})



app.listen(7700)
console.log('Server corriendo')