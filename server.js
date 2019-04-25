const express = require('express')
const app = express()
const port = 3000
const sayings = [
  ":jotham: Grrrrreat!",
  ":jotham: You're not wrong.",
  ":jotham: Glorious",
  ":jotham: Kids these days, I tell ya.",
  ":jotham: You're hired, you got the job.",
  ":jotham: I don't even work here.",
  ":jotham: {{ probably_a_dad_joke }}",
  ":jotham: That only happened once.",
  ":jotham: Oh fer sure bud.",
  ":jotham: You're doing your best.",
  ":jotham: Just as nature intended",
]

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/jotham', (req, res) => {
  res.send(randomizer(sayings))
})

app.post('/jotham', (req, res) => {
  console.log("it's a post");
  res.status(200).send(randomizer(sayings))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

randomizer = (arr) => {
  let length = arr.length;
  let index = Math.floor(Math.random() * length);
  return arr[index];
}
