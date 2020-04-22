const server = require("./api/server.js");
const accountRouter = require('./routes/accountsRoute')
const express = require('express');
const PORT = process.env.PORT || 5000;

server.use(express.json())

server.use('/accounts', accountRouter);

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
