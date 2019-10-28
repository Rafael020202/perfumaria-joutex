const express = require('express');
const path = require('path');
const hbs = require('hbs');
const {fetchAll} = require('./Models/Perfume.js');

const app = express();
const staticDrectory = path.join(__dirname, '../public');
const viewsDirectory = path.join(__dirname, '../templates/views');
const partialsDirectory = path.join(__dirname, '../templates/partials');

app.use(express.static(staticDrectory));
hbs.registerPartials(partialsDirectory);

app.set('view engine', 'hbs');
app.set('views', viewsDirectory);

app.listen(3000);

app.get('/', (req,res) => {
    
    fetchAll((err,arr) => {
        res.render('index', {title: 'Menu', data: arr});
    }); 
}); 

app.get('/sobre', (req,res) => {
    res.render('sobre');
});


