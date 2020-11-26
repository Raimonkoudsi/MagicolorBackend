const express = require('express');
const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

//rutas
app.use(require('./routes/trabajadores'));

//start
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});