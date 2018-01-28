const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(__dirname,'public')));
app.use(require('./routes/index'));
app.use(require('./routes/send'));

const server = app.listen(process.env.PORT || 3000);

module.exports = app;