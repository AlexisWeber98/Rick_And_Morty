const {getCharById} = require('../controllers/getCharById');
const login = require('../controllers/login')
const deleteFav= require('../controllers/deleteFav')
const postFav = require('../controllers/postFav');
const postUsers =require('../controllers/postUser')




const router = require ('express').Router();


router.get('/login', login);
router.post('/login',postUsers )
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);
router.get('/character/:id', getCharById);







module.exports = router;


