const express = require('express');
const cors = require('cors');
const sendContactEmail = require('./utils/sendContactEmail');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.post('/', (req, res) => {
  try {
    sendContactEmail(req.body.name, req.body.email, req.body.message);
    return res.status(200).send({
      message: `Message submitted successfully!`,
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});