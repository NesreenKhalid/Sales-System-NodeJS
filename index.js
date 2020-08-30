const express = require("express");
const app = express();  //??
const db = require("./models");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));    //??
app.use(express.json());    //??

const clientRoutes = require("./routes/clientRoutes");
app.use("/client", clientRoutes);

const itemRoutes = require("./routes/itemRoutes");
app.use("/item", itemRoutes);

db.sequelize.sync().then(()=> {
    app.listen(PORT, ()=>{
        console.log(`listening on: http://localhost:${PORT}`);
    });
});