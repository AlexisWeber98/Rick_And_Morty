import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css"


const Detail = () => {
    
    const { id } = useParams();
    const [characters, setCharacters] = useState({});
    const url= 'http://localhost:3001/rickandmorty/character/'
    
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`) 
        .then(({data}) => {
            if (data.name) {
                setCharacters(data);
            }else {
                <p>'No hay personajes con ese ID'</p>
            
            }
        });
        return setCharacters({})
    },[id]);

return(
    <div className={style.detail}>
        <div className={style.detailCont}>
        <h1>Character Detail</h1>
            <h2> {characters.name && characters.name} </h2>
            <p>STATUS | {characters.status && characters.status }</p>
            <p>GENDER | {characters.gender && characters.gender }</p>
            <p>ORIGIN | {characters.origin?.name}</p>
            <p>LOCATION | {characters.location && characters.location.name}</p>
        </div>
            <img className={style.imgDetail} src={characters.image} alt={characters.name} />
    </div>
)
}

export default Detail;