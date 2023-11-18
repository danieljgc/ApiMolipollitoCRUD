const routersAPI = require('./routes')
const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

routersAPI(app)

app.listen(PORT, function(){
    console.log("App escuchando en puerto: " + PORT)
})