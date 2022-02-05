require('dotenv').config();
import bodyParser from "body-parser";
import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";


const app = express();

// config view engine
viewEngine(app);

// use body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// initilize all web routes
initWebRoutes(app)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});