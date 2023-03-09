const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../public')));


/**
 * @type {string|number}
 */

const port = 5555; 
app.listen(port, () => {
  console.log(`Listening ${port} port`);
});
