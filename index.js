//SERVER LEVANTADO SOLO CON NODEJS

// const http = require('http')
// const fs = require('fs') //para poder leer el archivo html

// const server = http.createServer((req, res)=>{
//     const read = fs.createReadStream('./static/index.html', 'utf-8')
//     read.pipe(res) //A medida que va leyendo el archivo, lo va enviando mediante pipe.
// })

// server.listen(3000)
// console.log(`Server on port ${3000}`)

//-----------------------------------------------------------//

const express = require('express')
const app = express()

require('ejs') //Me sirve para renderizar archivos html completos.

app.use(express.json())

//CONFIGURACION EJS
app.set('view engine', 'ejs')//Uso el motor de vistas, y coloco ejs
app.set('views', path.join(__dirname, 'views')) //Empieza desde la ruta absoluta, y lo concatena con la carpeta views..


app.get('/ejs', (req, res)=>{
    res.render('index') //renderizo el archivo index
})

//----------------------------------

app.get('/products', (req,res)=>{
    res.send('List of products:')
})

app.post('/products', (req,res)=>{
    res.send('Creating products.')
})//hh

app.post('/prices', (req, res)=>{
    console.log(req.body)
    res.send('List of prices:')
})

app.put('/products', (req,res)=>{
    res.send('Update product.')
})

app.delete('/products', (req,res)=>{
    res.send('Deleting product.')
})

app.patch('/products', (req,res)=>{
    res.send('Actualizando una parte del producto.')
})


// app.use((req, res)=>{   //.use, lo que hace es fijarse en las rutas de arriba, si ninguna coincide con la buscada, va a meterse en este pedazo de codigo.
//     res.status(404).send('No se encontro tu pagina')
// })


app.listen(3000)
console.log(`Server on port ${3000}`)