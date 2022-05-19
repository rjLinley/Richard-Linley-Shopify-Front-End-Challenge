const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

const PORT = 3011;
// I gitignored my access file because I don't want to commit my key.// for the purposes of shopfiy testing perhaps you will have to supply your own key?
const { api_key } = require('../access.js');

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../build')));

app.post('/sendQuestion', (req, res) => {
  console.log(req.body);
  console.log(api_key)

  var data = JSON.stringify({
    "prompt": req.body.formText,
    "temperature": 0.5,
    "max_tokens": 64,
    "top_p": 1,
    "frequency_penalty": 0,
    "presence_penalty": 0
  });

  var config = {
    method: 'post',
    url: 'https://api.openai.com/v1/engines/text-curie-001/completions?',
    headers: {
      'Authorization': 'Bearer ' + api_key,
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res.status(200).send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      res.sendStatus(500);
      console.log(error);
    });



}

)


app.listen(PORT, () => { console.log(`Serving up ${PORT}`) });