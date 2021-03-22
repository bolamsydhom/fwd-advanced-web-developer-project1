
require('dotenv').config();
const cors = require('cors');
const express = require('express');
var bodyParser = require('body-parser')
const axios = require('axios').default;

const mockAPIResponse = require('./mockAPI.js')

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());

app.use(express.json({
    extended: true
}));

app.use(express.urlencoded({
    extended: true
}
));
app.use(cors());
const PORT = 8081;



const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'



// TODO: Configure express static directory.
app.use((req, res, next) => {
    console.log('request url:', req.url);
    console.log('request Method:', req.method);
    console.log('Time:', Date.now())
    next()
})
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})
// INFO: a route that handling post request for new URL that coming from the frontend
app.post('/add-url', async (req, res) => {
    try {
        // console.log(req.body.url);
        axios.post(`${BASE_API_URL}?key=${process.env.API_KEY}&url=${req.body.url}&lang=en`, {
          })
          .then(function (response) {
            res.send({'data':response.data})
          })
          .catch(function (error) {
            console.log('err',error);
          });

    } catch (error) {
        console.log(error.message)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

module.exports = () =>{
  return app;
} 