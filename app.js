const express = require('express')
const connectDB = require('./db/conection')
require('dotenv').config()

const app = express()
const tasks = require('./router/task')
const employees = require('./router/employee')
const Notfound = require('./middleware/Not-Found')
// middleware method
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(express.static('./public'))
// routes
app.use('/api/v1/tasks', tasks)
app.use('/api/v1/employees', employees)
app.use(Notfound)

// app.get('/', (req,res) => {
//     res.send('Hello World...')
// })

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(3000, () => {
            console.log('Connected to DB...');
        })
    } catch (error) {
        console.log(error);
    }
}

start()