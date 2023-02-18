const {Schema, model} = require("mongoose");
const PapelitoSchema = Schema({
    contenido: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        enums: ["Por hacer", "Hecho", "Repetible"], 
        required: true  
    },
    tipo: {
        type: String,
        enums: ["Plan", "Libro", "Receta", "Película", "Serie"],
        required: true
    },
    link_icono: {
        type: String,
        default: "https://cdn-icons-png.flaticon.com/512/5730/5730959.png",
    },
    calificacion: {
        type: Number,
        enums: [0,1,2,3,4,5]
    },
    deleted: {
        type: Boolean,
        default: false
    }
})
PapelitoSchema.methods.toJSON = function(){
    let {_id, __v, ...papelito} = this.toObject();
    return {id: _id, ...papelito};
}
const PapelitoModelo = model('Papelito', PapelitoSchema)
module.exports = PapelitoModelo;