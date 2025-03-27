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
app.get('/products/product/:id', async (req, res) => {
    const {id} = req.params

    try{
        const school = await School.findById(id)
        res.status(200).json(school)
    }catch(error){
        res.status(500).json({message: error.message})
    }

})

//Update
app.put('/products/update/:id', async (req, res) => {
    const {id} = req.params
    try{
        const updateSchool = await School.findByIdAndUpdate(id, req.body)

        if(!updateSchool){
            res.status(404).json({message: 'School Not Found!!!'})
        }
        const updatedSchool = await School.findById(id)
        res.status(200).json(updatedSchool)

    }catch(error){
        res.status(500).json({message: error.message})
    }
})

//Delete
app.delete('/products/product/:id', async (req, res) => {
    const {id} = req.params

    try{

    }catch(error){
        res.status(500).json({message: error.message})
    }

})


app.listen(port, () => console.log('Server is running'))