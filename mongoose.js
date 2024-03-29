const mongoose  = require("mongoose")
const dotenv =  require("dotenv");

// Dotenv configuration
dotenv.config();

const dbConnection = async () => {
    try {
      mongoose.connect(process.env.MONGODB_URL, {
        useUnifiedTopology:true,
        useNewUrlParser: true,
        useCreateIndex: true
        
      });
      console.log("DB connected successfully");
    } catch (error) {
      console.error(`DB ERROR: ${error}`);
    }
  }

module.exports = dbConnection