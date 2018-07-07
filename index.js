const axios = require('axios')
const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('assets/'))

app.post('/search', (req, res) => {
  axios.get(`http://jobs.github.com/positions.json?description=${req.query.q}`)
    .then((result) => res.render('search', { jobsResult: result.data }))
})

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(process.env.PORT || 8080, () => {
  console.log(`listening on ${process.env.PORT || 8080}`)
})
