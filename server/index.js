const express = require( 'express' );
const cors = require ( 'cors' );

const authRoutes = require('./routes/authentication.js')

const app = express(); //creating an instance of the express
const PORT = process.env.PORT || 4000; //our server will run on port 4000

require( 'dotenv' ).config(); //allows access to environment variables

app.use(cors()); //allows to make cross origin requests
app.use(express.json());//allow us to send json payloads from front to back
app.use(express.urlencoded());

//routes
app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(PORT, ()=>console.log(`server is currently running on port: ${PORT}`));
app.use('./authentication', authRoutes)