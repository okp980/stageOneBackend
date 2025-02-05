export function isPerfectNumber(n) {
  // Guard Clause for non-positive
  // or non-integer input
  if (!Number.isInteger(n) || n <= 0) {
    console.log("Please provide a valid positive integer.")
    return false
  }

  let sum = 0

  // Loop to find proper divisors
  // and calculate the sum
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i
    }
  }

  // Check if the sum of proper divisors
  // equals the original number
  const isPerfect = sum === n

  // Output the result
  if (isPerfect) {
    console.log(`${n} is a perfect number.`)
  } else {
    console.log(`${n} is not a perfect number.`)
  }

  return isPerfect
}

export function isPrime(num) {
  if (num <= 1) return false
  if (num <= 3) return true
  if (num % 2 === 0 || num % 3 === 0) return false
  let i = 5
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false
    i += 6
  }
  return true
}

export function sumDigits(num) {
  return num.split("").reduce((prev, curr) => {
    return prev + parseInt(curr)
  }, 0)
}

export function checkNumberProperties(num) {
  // Helper function to check if the number is an Armstrong number
  function isArmstrong(n) {
    const digits = n.toString().split("")
    const power = digits.length
    const sum = digits.reduce(
      (acc, digit) => acc + Math.pow(parseInt(digit), power),
      0
    )
    return sum === n
  }

  const result = []

  // Check for Armstrong number
  if (isArmstrong(num)) {
    result.push("armstrong")
  }

  // Check if the number is even or odd
  result.push(num % 2 === 0 ? "even" : "odd")

  return result
}
