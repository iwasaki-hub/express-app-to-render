const express = require("express")
const app = express()

const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("<h1>Hello Express + Render 👋</h1>")
})

app.listen(PORT, () => {
    console.log(`🚀 server is running on port ${PORT}`)
})