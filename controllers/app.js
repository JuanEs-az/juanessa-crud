module.exports = {
    getPasswords(req, res){
        return res.status(200).json({
            passwords: process.env.PASSCODES.split(","),
            msg: 'Contraseñas obtenidas exitósamente',
            err: false
        })
    }
}