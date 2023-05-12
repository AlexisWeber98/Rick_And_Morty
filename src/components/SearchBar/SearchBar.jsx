import style from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({onSearch}) => {

   const [id,setId] = useState('');

   const handleChange = (event)=> {
      setId(event.target.value)
   }

   return (
      <div className={style.searchBar}>
         <input className={style.input} type='search' onChange={handleChange} placeholder="ingrese un número de personaje" />
         <button className={style.button} onClick={()=> {onSearch(id)}}>Agregar</button>

      </div>
   );
}






export default SearchBar;