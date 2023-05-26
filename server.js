const express = require("express");

const app = express();

const PORT = 5000;


app.listen(PORT, (req, res) => {
    try {
        console.log(`Server running. Use our API on PORT: ${PORT}`);
        
    } catch (error) {
        console.log(error);
    }
})