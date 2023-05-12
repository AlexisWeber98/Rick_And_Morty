import { NavLink, Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import style from "./NavBar.module.css"

const NavBar = ({onSearch}) => {
    return(
        <div className={style.nav}>
            <NavLink to='/home' className={style.button} >Home</NavLink>
            
            <NavLink to='/about' className={style.button} >About</NavLink>
            
            <NavLink to='/favorites' className={style.button}>Favorites</NavLink>
            <SearchBar onSearch={onSearch}/>
            
            <NavLink className={style.button} to="/">LogOut</NavLink>
        
        
        </div>
    )
}




export default NavBar;