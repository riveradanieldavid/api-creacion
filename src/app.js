// IMPORTAR FUNCIONALIDADES
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

// ENLACES A RUTAS
const indexRouter = require('./routes/index');
const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');

// Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

// RUTAS
app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

// APIs

// ENLACES A RUTAS API
const apiGenresRouter = require('./routes/api/genresApiRoutes');
const apiMoviesRouter = require('./routes/api/moviesApiRoutes');

// RUTAS APIs
app.use('/api/genres', apiGenresRouter);
app.use('/api/movies', apiMoviesRouter);


// SERVIDOR EXPRESS CONFIG
app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
