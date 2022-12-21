const express = require ('express');
const cors = require ('cors');
const PORT = process.env.PORT || 9000; 
require('./db/conexion');
require('dotenv').config;
const morgan = require ('morgan');

//bodyParser = require('body-parser')

const app = express();
const rozenController = require('./controllers/rozenController');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('common'))
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true })); 
// app.use(bodyParser.json());

app.get('/',(req, res) => {
    res.send('MERN funcionando')
})

app.get('/datos', async (req, res) => {
    res.json({
        maidens: await rozenController.findAll()
    });
});

app.post('/crear', async (req, res) => {
 const {nombre, numero, Arma, Kanji} = req.body;
console.log(`${nombre} - ${numero} - ${Arma} - ${Kanji}`);
await rozenController.create(req.body)
    res.send('Muñeca creada')
})

app.put('/:id', (req, res) => {
    rozenController.update
    res.send('Muñeca actualizada')
})

app.delete('/:id', (req, res) => {
     rozenController.delete
    res.send('Muñeca eliminada')
})

app.listen(PORT,()=>{
   console.log(`Corriendo desde el puerto ${PORT}`)
})