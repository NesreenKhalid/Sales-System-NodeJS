const express = require("express");
const app = express();  
const crud = require('express-sequelize-crud') ;

const db = require("./models");
const PORT = process.env.PORT || 3005;

const clientRoutes = require("./routes/clientRoutes");
const itemRoutes = require("./routes/itemRoutes");
var cors = require('cors')

app.use(cors());
app.use(express.urlencoded({ extended: true}));    
app.use(express.json());    

app.use("/client", clientRoutes);


app.use("/item", itemRoutes);

db.sequelize.sync().then(()=> {
    app.listen(PORT, ()=>{
        console.log(`listening on: http://localhost:${PORT}`);
    });
});