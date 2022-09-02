const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats })
})


app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit });
})

// app.get('/random', (req, res) => {
//     res.render('random')
// })

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 100) + 1
    res.render('random', { rand: num })
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})
