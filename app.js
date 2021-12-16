const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

// 設定首頁
app.get('/', (req, res) => {
  res.render('home')
})

// 設定about頁面
app.get('/about', (req, res) => {
  res.render('about')
})

// 設定portfolio頁面
app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

// 設定contact頁面
app.get('/contact', (req, res) => {
  res.render('contact')
})

app.listen(port, () => {
  console.log(`web is running on http://localhost:${port}`)
})
