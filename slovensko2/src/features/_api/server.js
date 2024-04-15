const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/_api/server', (req, res) => {
  const data = req.body;
  const jsonData = JSON.stringify(data);

  fs.writeFile('src/features/_api/steps.json', jsonData, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving data to file.');
      return;
    }
    console.log('Data saved successfully.');
    res.status(200).send('Data saved successfully.');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});