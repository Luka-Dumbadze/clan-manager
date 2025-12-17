const express = require("express");
const app = express();
const cors = require("cors");  // <--- LINE 3: Did you import it?

app.use(express.json());
app.use(cors());               // <--- LINE 6: Did you use it?

// The Route
app.get("/", (req, res) => {
    res.send("The Clan Manager API is alive!");
});

// The Port
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});