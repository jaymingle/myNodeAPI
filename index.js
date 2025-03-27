import 'dotenv/config';
import express from 'express'
const app = express();

const port = process.env.PORT || 6060

app.get('/', (req, res) => {
    res.send('Ghana')
})


app.listen(port, () => console.log('Server is running'))