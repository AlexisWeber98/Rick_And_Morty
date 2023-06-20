const { User } = require ('../DB_connection');



module.exports = async (req, res) => {
    try {
        const { email, password } = req.query;
        
        if (!email || !password) return res.status(400).send({message:"Faltan Datos"});
         
        const findUser = await User.findOne({where: {email}})


        if (!findUser) return res.status(404).send({message:"Usuario no encontrado"});
        
        return findUser.password === password ? res.json({ access: true }) : res.status(403).send("Contraseña incorrecta")
        

    } catch (error) { 
        res.status(500).send(error.message)
    };
};