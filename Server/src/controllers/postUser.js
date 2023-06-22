const { User } = require('../DB_connection');



module.exports = async (req, res)=> {
    try {
        const { name, email, password } = req.body;
    
        if (!name || !email || !password) return res.status(400).send("Faltan Datos")
        
            const user = await User.findOrCreate({where: {name, email, password } });
            return res.status(200).json(user)
        
    } catch (error) {
        res.status(500).json(error.message)
    } 
    };