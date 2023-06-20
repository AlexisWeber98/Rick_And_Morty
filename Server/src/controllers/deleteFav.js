const {Favorite }= require('../DB_connection');


module.exports = async (req, res) => {
  
  try {
    const { id }= req.params.id;
    
    await Favorite.destroy({where: {id}});

    const allFavorites = await Favorite.findAll();
    
    return res.json(allFavorites);
    
  } catch (error) {
      res.status(500).send(error.message)
    }


  
};