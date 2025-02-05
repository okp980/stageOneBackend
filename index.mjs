import express from "express"
import cors from "cors"
import {
  checkNumberProperties,
  isPerfectNumber,
  isPrime,
  sumDigits,
} from "./util.mjs"

const app = express()

const port = 3000

app.use(cors())

app.get("/api/classify-number", async (req, res) => {
  try {
    const number = parseInt(req.query.number)
    if (!Number.isInteger(number) || number < 0) {
      return res.status(400).json({
        number: "alphabet",
        error: true,
      })
    }
    const response = await fetch(
      `http://numbersapi.com/${req?.query?.number}/math?json`
    )
    const result = await response.json()

    res.status(200).json({
      number,
      is_prime: isPrime(number),
      is_perfect: isPerfectNumber(number),
      properties: checkNumberProperties(number),
      digit_sum: sumDigits(req?.query?.number),
      fun_fact: result?.test,
    })
  } catch (error) {
    res.status(500).json({ error: true })
  }
})

app.use((req, res, next) => {
  res.status(404).json({ error: true })
})
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
