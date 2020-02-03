//ohjeita: https://www.youtube.com/watch?v=-RCnNyD0L-s
//serverin käynnistys: npm run devStart
//restarttaa automaattisesti joka kerta kun server.js muuttuu

//tuodaan express mukaan
const express = require('express')
const app = express()

app.set('view-engine', 'ejs')

//kotisivu, johon päästäkseen pitää olla kirjautuneena
app.get('/', (req, res) => {
    //mikä sivu renderöidään
    res.render('index.ejs', {name: 'Johanna'})
})

app.get('/login', (req, res) => {
    //mikä sivu renderöidään
    res.render('login.ejs')
})

app.get('/register', (req, res) => {
    //mikä sivu renderöidään
    res.render('register.ejs')
})
app.post('/register', (req, res) => {
    //POST ottaa vastaan rekisteröintilomakkeen tietoja
})

//localhost:3000
app.listen(3000)