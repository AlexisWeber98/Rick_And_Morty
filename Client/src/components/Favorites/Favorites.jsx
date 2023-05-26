import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/action";
import { useEffect, useState } from "react";
import style from './Favorites.module.css'

const Favorites = ({myFavorites, removeFav}) => {

    const [aux, setAux] = useState(false);
    
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.vaue))
        setAux(true)
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    };



    return(
        <div>
            <div className={style.container}>
            <h4>Order By</h4>
        <select onChange={handleOrder}>
            <option value="A"> Ascendente</option>
            <option value ="D">Descentente</option>
        </select>

        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="all" > Show All</option>
        </select>

        </div>
       

        {myFavorites && myFavorites.map(({id, name, gender, status, image,onClose}) => {
            return(
                <Card
                id={id}
                key={id}
                image={image}
                name={name}
                gender={gender}
                status={status}
                onClose={onClose}
                />
            )
        })}
        </div>
        
    )
    
};

const mapStateToProps = (state) =>{

    return {
myFavorites: state.myFavorites,
    }
}


export default connect (mapStateToProps, null) (Favorites);