import style from './About.module.css';
import me from './me.png'

const About = () =>{
return(
    <div  calssName = {style.container}>
    <h1 className={style.title}>Hello There!</h1>
    <div >
    <img className={style.me} src={me} alt="Alexis Weber" />

    < article className = {style.article}>
    <h3>I am Alexis Weber</h3>
    <h4>Full Stack developer</h4>

    <h5>"My name is Alexis Weber and I developed this application</h5>
    <p>I hope you like it. It's basic, I know, but I'm learning to program with Henry! I have developed both the frontend and the backend, including the database. Would you like me to tell you which technologies I'm using?"</p>
    
    </article>
    </div>
    </div>


)
};



export default About;