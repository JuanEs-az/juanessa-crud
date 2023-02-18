const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const conectar = async () => {
    try{
        await mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("DB Online");
    }catch(lg){
        console.log(lg)
        throw new Error("DB Offline")
    }
}
module.exports = {
    conectar
}