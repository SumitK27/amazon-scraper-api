const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// Routes
const routes = require("./routes");
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
