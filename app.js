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

const user = require('./src/routes/user')
const decks = require('./src/routes/decks');
const auth = require('./src/routes/auth')

app.use('/auth', auth);
app.use('/user', user);
app.use('/decks', decks);


app.use((err, req, res, next) => {
    console.error(err)
    const status = err.status || 500
    res.status(status).json({ error: err })
  })
  
  app.use((req, res, next) => {
    res.status(404).json({ error: { message: 'Not found' }})
  })
  
if (process.env.NODE_ENV !== 'development') {
    const listener = () => console.log(`listening on ${port}`)
    let server = app.listen(port, listener)
}