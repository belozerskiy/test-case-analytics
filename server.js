const express = require("express");
const router = require("./routes");
const { port } = require("./config");

const app = express();
app.use(express.static("./public"));
app.use("/api/v1/", router);
app.listen(port, () => console.log(`Listening on port ${port}`));
