import express from "express"
import "dotenv/config"
import "./src/db/dbConnection.js"
import cors from "cors"
import productRouters from "./src/routers/productRouters.js"



const port = process.env.PORT || 5001
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/products",productRouters)

app.get("/", (req, res) => {
    res.send("hello maqa")
})

console.log('====================================');
console.log(port);
console.log('====================================');
app.listen(port, () => {
    console.log("server is runnig port")
})