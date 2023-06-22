const URL = "https://rickandmortyapi.com/api/character";
const axios = require("axios");

const getCharById = async (req, res) => {
    const {id} = req.params
    try {
 
    const response = await axios(`${URL}/${id}`)
    const {name, image, status, species, gender, origin, location} = response.data
    const origen = origin.name
        let character ={
            id,
            name,
            gender,
            origin: origen,
            image,
            status,
            species,
            location
        }
    return  character.name?res.status(200).json(character): res.status(404).send("Not Found")

    }   catch  (error) {
    return res.status(500).send(error.message)
  }
};





module.exports = {
    getCharById
};