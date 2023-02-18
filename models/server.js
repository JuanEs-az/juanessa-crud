const express = require("express");
const cors = require("cors");
const { conectar } = require("../db/config");
class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.settings();
        this.setRoutes();
    }
    settings(){
        this.connectDB();
        this.app.use(cors());
        this.app.use(express.json());
    }
    setRoutes(){
        this.app.use('/papelito', require('../routes/papel'))
        this.app.use('/app', require('../routes/app'))
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log("Running on port " + this.port);
        });
    }
    async connectDB(){
        await conectar()
    }
}
module.exports = Server;