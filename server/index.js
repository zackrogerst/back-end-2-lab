const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const { getHouses, deleteHouse, createHouse, updateHouse } = require("./controller");

////////////////////////////////////

app.get("/api/houses", getHouses);
app.post("/api/houses", createHouse);
app.put("/api/houses/:id", updateHouse);
app.delete("/api/houses/:id", deleteHouse);

////////////////////////////////////

app.listen(4004, console.log("Port 4004 is str8 jammin"));