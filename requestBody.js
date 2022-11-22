const express = require('express')
const app = express()

app.use(express.text()) //Metodo que permite que express procese el texto que le envian las app clientes
app.use(express.json()) //Metodo que permite que express procese el json que le envian las app clientes
app.use(express.urlencoded({extended:false})) //para que express entienda datos que vienen desde un form


app.post('/user', (req, res)=>{ //post para enviar datos desde el cliente y recibirlo en el serverr
    console.log(req.body)
    res.send('Nuevo usuario creado')
}) 

app.listen(5000)
console.log(`Server on port ${5000}`)