// server.js
const express = require('express');
const app = express();
const PORT = 3000;

let files = [];

app.use(express.json());
app.use(express.static('public'));

app.get('/files', (req, res) => res.json(files));

app.post('/files', (req, res) => {
  const { name, date } = req.body;
  const expiry = new Date(date);
  expiry.setMonth(expiry.getMonth() + 6);
  files.push({ name, date, expiry });
  res.status(201).json({ message: 'File added' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
