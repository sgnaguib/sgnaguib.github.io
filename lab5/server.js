let express = require('express')
let path = require('path');
let bodyParser = require('body-parser');
let artist_db = require('./artists');

let app = express();


app.use(express.static(path.join(__dirname,'public')));
//app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(bodyParser.text());

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))

})

app.post('/submit',(req, res)=> {
    //console.log(req.body)
    artist_db.add(req.body)
    res.send(artist_db.getall());
});

app.post('/remove',(req, res)=> {
    artist_db.remove(req.body)
    //console.log(artist_db.getall());
    res.send("successfully removed!");
});

app.get('/getArtists',(req, res)=> {
    //console.log(artist_db.getall());
    res.send(artist_db.getall());
});

app.post('/search',(req, res)=> {
    // console.log("SEARCH: " + req.body)
    matches = artist_db.search(req.body)
    // console.log("SERVER")
    // console.log(matches);
    res.send(matches);
});



app.listen(8080);