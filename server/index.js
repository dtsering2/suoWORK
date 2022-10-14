const express = require( 'express' )
const cors = require ( 'cors' )

const app = express() //creating an instance of the express
const PORT = process.env.PORT || 4000; //our server will run on port 4000

require( 'dotenv' ).config(); //allows access to environment variables

app.use(cors()); //allows to make cross origin requests
app.use(express.json()) //allow us to send json payloads from front to back
app.use(express.urlencoded())

//routes
app.get('/', () => {
    res.send('Hello')
})