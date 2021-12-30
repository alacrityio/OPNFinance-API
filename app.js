const express = require("express");
const bodyParser = require("body-parser");
const btcRouter = require("./routes/btc");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/btc", btcRouter);

const port = process.env.PORT || 4000;

server = app.listen(port, () => console.log(`Server running on port ${port}`));