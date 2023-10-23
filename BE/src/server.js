import express from 'express'
import mongoose from 'mongoose'
import categoryRouter from './routers/categories'
import userRouter from "./routers/user"
import bodyParser from 'body-parser'
import fileRouter from "./routers/file"
import { fileURLToPath } from 'url';
import path from 'path'
import cors from "cors"
import productRouter from "./routers/products"
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
const app = express()
const port = 8080
// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(express.static("src/public"))

app.use('/upload', fileRouter)
// Connect DB
mongoose.connect("mongodb://127.0.0.1/iku")
    .then(() => console.log("Connect to DB successfully"))
// Router
app.use('/',categoryRouter)
app.use("/",productRouter)
app.use("/",userRouter)

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
}) 