const express = require('express');
const cors = require("cors");

//database
const db = require('./app/models');
//db.sequelize.sync();
db.sequelize.sync({force: true}).then(()=>{
    console.log("reinicie o banco de dados")
})


const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

//rotas

app.get("/", (req, res)  =>{
    res.json({ message: "teste"});
});

//porta 
const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> {
    console.log(`SERVIDOR RODANDO NA PORTA ${PORT}.`);
});