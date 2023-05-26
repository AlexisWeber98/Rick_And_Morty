import { addFav, removeFav } from '../../redux/action'; 
import { NavLink } from 'react-router-dom'
import style from './Card.module.css'
import { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import red_heart from "./hearts/red_heart.png"
import white_heart from "./hearts/white_heart.png"




const Card = ({onClose, name, status, species, gender, origin, image, id, myFavorites, removeFav, addFav}) => {
   
   const [ isFav, setIsFav ] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id,name,species, gender,image});
      }
   }



   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);




   return (
      
      <div className={style.contenedor}>
         <button onClick={handleFavorite} className={style.addFav}> {isFav ? <img src={red_heart}/> : <img src={white_heart}/>} </button>
         <NavLink className={style.link} to={`/detail/${id}`}>
         <img className={style.img} src={image} alt={name} />
         <h2 >{name}</h2>
         {/* <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>*/}
         </NavLink>
         <button className={style.onClose} onClick={()=> {onClose(id)}} >Cerrar</button>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
};


export default connect(mapStateToProps, mapDispatchToProps) (Card);