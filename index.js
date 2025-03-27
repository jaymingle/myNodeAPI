import 'dotenv/config';
import express from 'express'
import connectToDB from "./connectDB.js";
import School from "./models/school.model.js";

const app = express();

const port = process.env.PORT || 6060

console.clear()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

connectToDB('mongodb+srv://jaysubscribes123:j0X6GilyeHYaLZQo@backenddb.ow7zef3.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB')

//Home
app.get('/', (req, res) => {
    res.send('Ghana')
})

//Create
app.post('/products/create_product', async (req, res) => {
    try{

        const school = await School.create(req.body)
        res.status(200).json(school)

    }catch(error){
        res.status(500).json({message: error.message})
    }
})

//Read All
app.get('/products', async (req, res) => {
    try{
        const school = await School.find({})
        res.status(200).json(school)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

//Read One


//Update


//Delete


app.listen(port, () => console.log('Server is running'))