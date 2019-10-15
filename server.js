require('dotenv').config();
const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');
const db = require('./models')

// uses
app.use(express.static('static'))
app.use(layouts);
app.use(express.urlencoded({extended: false}))

// need this bruh
app.set('view engine', 'ejs')


app.use(`/authors`, require(`./routes/authors`))
app.use(`/posts`, require(`./routes/posts`))



app.listen(3000, function() {
    console.log('running')
})