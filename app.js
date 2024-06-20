const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('keep at it Mr T! You will get that DevOps joint within 3weeks God Willing!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
