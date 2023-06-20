import { useState } from "react";
import style from '../Form/Form.module.css'
import { NavLink } from "react-router-dom";
import Rick_and_Morty from "../Form/images/Rick_and_Morty.png"


const SignUp = (props) => {

    //----------Local States-------------------------------------//

    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
    });

   const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: ""
    });


    //------------Handlers---------------------------------//

    const handleChange = (event)=> {
        setUserInfo({
            ...userInfo,
            [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.signup(userInfo)
    }

    return (
        <div >
        <img className={style.contain} src={Rick_and_Morty} alt="Rick And Morty" />
    <div>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.img}></div>

          <label htmlFor="name">Name</label>
          <input name="name" type="text" placeholder="Name" value={userInfo.name} onChange={handleChange}/>
          <p className={style.errors}>{errors.name}</p>
          
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="E-mail" value={userInfo.email} onChange={handleChange}/>
        <p className={style.errors}>{errors.email}</p>
    

          <label htmlFor="password" >Password</label>
          <input name="password" type="password" placeholder="Password" value={userInfo.password} onChange={handleChange}/>
          <p className={style.errors}>{errors.password}</p>

          <button className={style.formButton} type="submit" disabled={!userInfo.email || !userInfo.password || errors.email.length >1 || errors.password.length > 1}>Create</button>
   
          <p>you have an account? log in</p>
          <NavLink to="/" ><button className={style.formButton}>Log In</button></NavLink> 
        </form>
    </div>
    
    </div>
    )
}

export default SignUp;