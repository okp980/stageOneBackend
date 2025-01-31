const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.json({
    email: "okpunorrex@gmail.com",
    current_datetime: "2025-01-30T09:30:00Z",
    github_url: "<https://github.com/yourusername/your-repo>",
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
