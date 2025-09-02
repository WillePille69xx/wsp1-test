import express from "express"

const app = express()

app.get("/", (req, res) => {
    console.log(res)
    res.send("<h1>Hello World!<h1>")
})

app.get("/about", (req, res) => {
    res.json({
        "message": "Hellohaso"
    })
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})