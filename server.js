import express from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"

const app = express()

app.use(morgan("dev"))
app.use(express.static("public"))


nunjucks.configure("views", {
    autoescape: true,
    express: app
})


app.get("/", (req, res) => {
    res.render("index.njk", {
        title: "Our First Dynamic Site.",
        message: "With Nunjucks We Create Magic."
    })
})

app.get("/about", (req, res) => {
    res.render("about.njk", {
        title: "About us",
        message: "This is a school project.",
        image: "/img/Mercenary_shadow.jpeg"
    })
})

app.get("/greeting", (req, res) => {
    console.log(req.query)
    res.send(`Hello ${req.query.name}, ${req.query.message}`)
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})