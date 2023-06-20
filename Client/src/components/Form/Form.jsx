import style from  "./Form.module.css"
import { useState } from "react";
import validation from "./validation";
import Rick_and_Morty from "./images/Rick_and_Morty.png"
import { NavLink } from "react-router-dom";


const Form = (props) => {



    const [userData, setUserData] = useState({
        email:"",
        password:"",
     });
  

    const [ errors, setErrors ] = useState({
        email: "",
        password:"",
    });


    const handleChange = (event) => {
   setUserData({
      ...userData,
      [event.target.name]: event.target.value});
      
      validation({userData,setErrors});
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData)

    }



return(
    <div >
        <img className={style.contain} src={Rick_and_Morty} alt="Rick And Morty" />
    <div>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.img}></div>
          
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="E-mail" value={userData.email} onChange={handleChange}/>
        <p className={style.errors}>{errors.email}</p>
    

          <label htmlFor="password" >Password</label>
          <input name="password" type="password" placeholder="Password" value={userData.password} onChange={handleChange}/>
          <p className={style.errors}>{errors.password}</p>

          <button className={style.formButton} type="submit" disabled={!userData.email || !userData.password || errors.email.length >1 || errors.password.length > 1}>Log In</button>
   
          <p>Don't have an account? Create one</p>
          <NavLink to="/signup" ><button className={style.formButton}>Sign Up</button></NavLink> 
        </form>
    </div>
    
    </div>
)
}



export default Form;