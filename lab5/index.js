let express = require('express')
let path = require('path');
let app = express();
let bodyParser = require('body-parser');

let router = express.Router();
let artists = require('./artists');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))

})

app.post('/',(req, res)=> {
    res.send(JSON.stringify(req.body))
    
});



app.listen(8080);