const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
var router = express.Router();


// middleware
app.use(cors());
app.use(express.json());

var gtts = require('node-gtts')('en');



app.get('/tts/:text', function (req, res) {
    const input = req.params.text;
    console.log(input);
    res.set({ 'Content-Type': 'audio/mpeg' });
    gtts.stream(input).pipe(res);
})


app.get('/', (req, res) => {
    res.send('Server is running!!!!!!!!!!!')
})
app.listen(port, () => {
    console.log('listening to port', port);
})
