const express = require("express");
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));
app.set('view engine', 'ejs');

/* Rotas principais */

app.get('/', (req, res) => res.render('home'));
app.get('/initialCap', (req, res) => res.render('initialCap'));
app.get('/taskList', (req, res) => res.render('taskList'));
app.get('/thingCap', (req, res) => res.render('thingCap'));


/* rotas modal */
/* rotas process */
app.get('/firstAct', (req, res) => res.render('processar/firstAct'));
app.get('/nextAct', (req, res) => res.render('processar/nextAct'));
app.get('/not', (req, res) => res.render('processar/not'));
app.get('/yes', (req, res) => res.render('processar/yes'));
app.get('/agendar', (req, res) => res.render('processar/agendar'));
app.get('/delegate', (req, res) => res.render('processar/delegate'));
app.get('/now', (req, res) => res.render('processar/now'));


/* rotas execute */
app.get('/eMain', (req, res) => res.render('executar/eMain'));
app.get('/eDelegate', (req, res) => res.render('executar/eDelegate'));
app.get('/eSchedule', (req, res) => res.render('executar/eSchedule'));
app.get('/eScheduleWeek', (req, res) => res.render('executar/eScheduleWeek'));
app.get('/eHome', (req, res) => res.render('executar/eHome'));
app.get('/eJob', (req, res) => res.render('executar/eJob'));
app.get('/eStreet', (req, res) => res.render('executar/eStreet'));






app.listen(port, () => console.log(`Server is running!${port}`));