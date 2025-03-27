import 'dotenv/config';
import express from 'express'
const app = express();

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Ghana')
})


app.listen(port, () => console.log('Server is running'))