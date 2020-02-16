let express = require('express')
let path = require('path');
let bodyParser = require('body-parser');
let artist_db = require('./artists');

let app = express();

// let router = express.Router();
// let artists = require('./artists');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))

})

app.post('/submit',(req, res)=> {
    //console.log(req.body)
    artist_db.add(req.body)
    console.log(artist_db.getall());
    res.send(artist_db.getall());
});

app.post('/remove',(req, res)=> {
    artist_db.remove(req.body)
    console.log(artist_db.getall());
    res.send("successfully removed!");
});



app.listen(8080);