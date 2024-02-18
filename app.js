const app = require("express")();
const dotenv = require('dotenv');
const dbConnection = require("./mongoose");
const cors = require('cors');
const bodyParser = require("body-parser");
const { ProductRouter } = require("./routes");
const { default: connectDB } = require("./mongoose");


        // Dotenv configuration
        dotenv.config();
        const PORT = process.env.PORT || 5000
        //const mode = process.env.NODE_ENV


        // applying cors
        app.use(cors())

        // middlewares
        app.use(bodyParser.json())

        // db connection
       dbConnection;

        // Router
        app.use("/api",ProductRouter)

        // server listening
        app.listen(process.env.PORT,()=>console.log(`Server listening on ${PORT} port`))