let express = require('express')
let path = require('path');
let bodyParser = require('body-parser');
let mod = require('./models/dbModel');

let app = express();

const expressHbs = require('express-handlebars');
app.engine(
    'hbs',
    expressHbs({
      layoutsDir: 'views/layouts/',
      defaultLayout: 'main-layout',
      extname: 'hbs'
    })
  );
  app.set('view engine', 'hbs');
  app.set('views', 'views');


app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) // middleware

app.get('/', (req,res) => {

  res.render('login', { pageTitle: 'Artist App', loginCSS: true});
    
})

let playerRoutes = require('./routes/dataRoutes');

app.use(playerRoutes);



app.listen(8080);