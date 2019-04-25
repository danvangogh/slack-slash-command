const express = require('express')
const app = express()
const port = 3000
const sayings = [
  "Grrrrreat!",
  "You're not wrong.",
  "Glorious",
  "Kids these days, I tell ya.",
  "You're hired, you got the job.",
  "I don't even work here.",
  "{{ probably_a_dad_joke }}",
  "That only happened once.",
  "Oh fer sure bud.",
  "You're doing your best.",
]

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/jotham', (req, res) => {
  res.send(randomizer(sayings))
})

app.post('/jotham', (req, res) => {
  res.send(randomizer(sayings))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

randomizer = (arr) => {
  let length = arr.length;
  let index = Math.floor(Math.random() * length);
  return arr[index];
}
