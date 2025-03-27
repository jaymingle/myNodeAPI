import mongoose from 'mongoose'

const connectToDB = async connectionURL => {
    await mongoose.connect(connectionURL)
        .then(() => console.log('Database Connection Succesful!!!'))
        .catch(error => console.log('Connection Unsuccesful ', error))
}

export default connectToDB;