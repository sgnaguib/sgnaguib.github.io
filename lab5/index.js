let express = require('express')
let path = require('path');
let app = express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res) => {
    res.sendFile(__dirname, 'views', 'index.html')
})


app.listen(8000);