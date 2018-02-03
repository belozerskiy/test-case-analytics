const express = require("express");
const cors = require("cors");
const router = require("./routes");
const { port } = require("./config");

const app = express();
app.use(cors({ origin: ["http://127.0.0.1:8080", "http://localhost:8080"] }));
app.use(express.static("./public"));
app.use("/api/", router);
app.listen(port, () => console.log(`Listening on port ${port}`));
