const Papelito = require("../models/papel");
module.exports = {
    async getAllPapelitos(req, res){
        let {tipo, estado} = req.query;
        let query = {deleted: false}; 
        tipo ? query.tipo = tipo : undefined;
        estado ? query.estado = estado : undefined;

        try{
            const papelitos = await Papelito.find(query);
            return res.json({
                papelitos,
                err: false,
                msg: 'Papelitos obtenidos con exito'
            })
        }catch(log){
            return res.json({
                err: true,
                msg: 'Ha ocurrido un error interno del servidor',
                log
            })
        }
    },
    async postPapelito(req, res){
        let {contenido, estado, tipo, link_icono, calificacion} = req.body;
        let tipoiconodef = {
            "Libro": "https://cdn-icons-png.flaticon.com/512/2232/2232688.png",
            "Receta": "https://cdn-icons-png.flaticon.com/512/450/450115.png",
            "Película":"https://cdn-icons-png.flaticon.com/512/704/704939.png",
            "Serie":"https://cdn-icons-png.flaticon.com/512/732/732228.png",
        };
        link_icono = !link_icono ? tipoiconodef[tipo] : link_icono;  
        try{
            const papelito = new Papelito({contenido, estado, link_icono, tipo, calificacion});
            await papelito.save();
            return res.json({
                papelito,
                err: false,
                msg: 'Papelito creado con exito'
            })
        }catch(log){
            return res.json({
                err: true, 
                msg: 'Ha ocurrido un error al crear el papelito',
                log
            })
        }
    },
    async updatePapelito(req, res){
        let {id} = req.params;
        let {contenido, tipo, estado, calificacion, link_icono} = req.body;
        let tipoiconodef = {
            "Libro": "https://cdn-icons-png.flaticon.com/512/2232/2232688.png",
            "Receta": "https://cdn-icons-png.flaticon.com/512/450/450115.png",
            "Película":"https://cdn-icons-png.flaticon.com/512/704/704939.png",
            "Serie":"https://cdn-icons-png.flaticon.com/512/732/732228.png",
        };
        !!tipo ? link_icono = tipoiconodef[tipo] : link_icono
        try{
            const papelito =  await Papelito.findByIdAndUpdate(id, {contenido, tipo, estado, calificacion, link_icono}, {new: true});
            return res.json({
                papelito,
                err: false,
                msg: 'Se ha actualizado con éxito el papelito',
            })
        }catch(log){
            return res.json({
                err: true,
                msg: 'Ha ocurrido un error al actualizar papelito',
                log
            })
        }

    },
    async deletePapelito(req, res){
        let {id} = req.params;
        try{
            const papelito =  await Papelito.findByIdAndUpdate(id, {deleted: true}, {new: true});
            return res.json({
                papelito,
                err: false,
                msg: 'Se ha eliminado con éxito el papelito',
            })
        }catch(log){
            return res.json({
                err: true,
                msg: 'Ha ocurrido un error al actualizar papelito',
                log
            })
        }

    }
};