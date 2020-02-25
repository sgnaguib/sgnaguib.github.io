let express = require('express')
let path = require('path');
let bodyParser = require('body-parser');
let artist_db = require('./artists');

let app = express();


app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))

})

app.post('/submit',(req, res)=> {
    artist_db.add(req.body)
    res.send(artist_db.getall());
});

app.post('/remove',(req, res)=> {
    artist_db.remove(req.body)
    res.send("successfully removed!");
});

app.get('/getArtists',(req, res)=> {
    res.send(artist_db.getall());
});

app.post('/search',(req, res)=> {
    matches = artist_db.search(req.body)
    res.send(matches);
});



app.listen(8080);