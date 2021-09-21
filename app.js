const express = require("express")
const app = express()

app.use(express.static("public"))


app.get("/",(req,res)=>{
    res.sendFile(`${__dirname}/views/home.html`)
})

app.get("/about",(req,res)=>{
    res.sendFile(`${__dirname}/views/about.html`)
})

app.get("/photo-gallery",(req,res)=>{
    res.sendFile(`${__dirname}/views/photo-gallery.html`)
})

app.get("/work",(req,res)=>{
    res.sendFile(`${__dirname}/views/work.html`)
})

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})