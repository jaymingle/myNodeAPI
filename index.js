import 'dotenv/config';
import express from 'express'
import connectToDB from "./connectDB.js";
const app = express();

const port = process.env.PORT || 6060

console.clear()

connectToDB('mongodb+srv://jaysubscribes123:j0X6GilyeHYaLZQo@backenddb.ow7zef3.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')

//Home
app.get('/', (req, res) => {
    res.send('Ghana')
})

//Create
app.get('/products/create_product', async (req, res) => {
    try{


    }catch(error){
        res.status(500).json({message: error.message})
    }
})

//Read All


//Read One


//Update


//Delete


app.listen(port, () => console.log('Server is running'))