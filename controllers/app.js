module.exports = {
    getPasswords(req, res){
        return res.status(200).json({
            passwords: ['tkmm202', 's4tsug3m'],
            msg: 'Contraseñas obtenidas exitósamente',
            err: false
        })
    }
}