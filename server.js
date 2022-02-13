const express = require("express");
const app = express();
const port = 5000;

app.use(express.static("public"));
app.set('view engine', 'ejs');

/* Rotas principais */
app.get('/', (req, res) => res.render('initialCap'));
app.get('/home', (req, res) => res.render('home'));
app.get('/taskList', (req, res) => res.render('taskList'));
app.get('/thingCap', (req, res) => res.render('thingCap'));

/* rotas modal */

app.listen(port, () => console.log(`Server is running!${port}`));