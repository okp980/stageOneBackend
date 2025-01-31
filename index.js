const express = require("express")
const app = express()
const cors = require("cors")
const port = 3000

app.use(cors())
app.get("/", (req, res) => {
  res.json({
    email: "okpunorrex@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/okp980/stage0",
  })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
