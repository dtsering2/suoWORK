const express = require('express');
const cors = require('cors')

const authRoutes = require("./routes/auth.js")

const app = express(); //creating an instance of express
const PORT = process.env.PORT || 8000;

require('dotenv').config()

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req,res)=>{
    res.send("hi");
});

app.use('/auth', authRoutes)

app.listen(PORT, () => console.log(`running on ${PORT}`))