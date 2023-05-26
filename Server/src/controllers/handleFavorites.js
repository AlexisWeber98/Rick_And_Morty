let myFvorites = [];

const postFav = (req,res) => {

    const character = req.body

    myFvorites.push(character)
    return res.status(200).json(myFvorites);
};



const deleteFav = (req,res) => {
const {id} = req.params;

myFvorites = myFvorites.filter((fav) => fav.id !== (id))

return res.status(200).json(myFvorites)
};




module.exports = {
    postFav,
    deleteFav
}