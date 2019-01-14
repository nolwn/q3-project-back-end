const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(cors());
require('dotenv').config();

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

const user = require('./src/routes/users');
const decks = require('./src/routes/decks');
const cards = require('./src/routes/cards');
const auth = require('./src/routes/auth');

app.use('/auth', auth)
app.use('/users', user)
// app.use('/users/:user_id/decks', decks)
app.use('/users/:user_id/decks/:deck_id/cards', cards)


app.use(function(req, res, next) {
  next({status: 404, error: 'Route Not Found'})
})

app.use((err, _req, res, _next)=> {
    console.error(err)
    const status = err.status || 500
    const error = err.error || 'Internal Server Error'
    res.status(status).json({error, status})
 })

if (process.env.NODE_ENV !== 'development') {
    const listener = () => console.log(`listening on ${port}`)
    let server = app.listen(port, listener)
}
