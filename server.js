const express = require("express");
const router = require("./routes");

const app = express();

app.use(router);

app.listen(8000, () => console.log("Listening on port 8000"));
