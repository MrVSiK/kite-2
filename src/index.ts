import express from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import routes from "./routes/main";
import bodyParser from "body-parser";

config();
const app = express();
const PORT = 3000 || process.env.PORT;


connect(process.env.MONGO as string).then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.error(err);
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is up at ${PORT}`);
});