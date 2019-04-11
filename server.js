const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
// const data = require('./product')
const path = require("path")
const PORT = process.env.PORT || 7000


app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))


app.use("/products" , require ('./routes/estoreRoutes.js'))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/products-db", {useNewUrlParser: true}, () => {
    console.log('[XD] connected to DB')
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

app.listen(PORT, () => {
    console.log('[+] Server is running on Port 7000')
})

// console.log(data)