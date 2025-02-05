## Description

A simple express application that for the HNG stage 0 task for backend

### Set Up

- Clone project into directory
- `cd` into directory
- run `npm install`to install all dependencies
- run `node index.mjs` to start project

### API documentation

- When you send a request to `/api/classify-number?number=371`, the server returns:

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

https://hng.tech/hire/nodejs-developers
