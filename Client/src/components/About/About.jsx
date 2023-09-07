import style from "./About.module.css";
import me from "./me.png";

const About = () => {
  return (
    <div calssName={style.body}>
      <h1 className={style.title}>Hello There!</h1>
      <div className={style.cont}>
        <img className={style.me} src={me} alt="Alexis Weber" />

        <article className={style.article}>
          
            <h3 className={style.name}>I am Alexis Weber</h3>
            <h4 className={style.stack}>Full Stack developer</h4>

            
         
          <p className={style.p}>
          My name is Alexis Weber and I developed this application
          <br /><br />
            I hope you like it. It's basic, I know, but I'm learning to program
            with Henry! I have developed both the frontend and the backend,
            including the database. Would you like me to tell you which
            technologies I'm using?"
          </p>
          <div className={style.tech}>
          <img className={style.techSkills} src="https://imgs.search.brave.com/h5LYzGWTbeFcv94uJdSfJbO0QXHMKrzmx4b807AnH_g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtYnJh/bmRzLWluLWNvbG9y/cy8xMjgvcmVhY3Qt/MTI4LnBuZw" alt="React"/>
          <img className={style.techSkills} src= "https://imgs.search.brave.com/DhtoQUAxONiOzKOccFNlt-tWxb4mWXu20I92cZP20iU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXJlZHV4LTI4MzAy/NC5wbmc_Zj13ZWJw/Jnc9MjU2" alt="Redux" />
          <img className={style.techSkills} src="https://imgs.search.brave.com/Y6Mi-k3s0OsyWrIH0dDmMKTg8AhG42-NxUElxaKMQp0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nLzEyOC9h/cHBsaWNhdGlvbi9z/a2lsbHMtc2VjdGlv/bi9qYXZhc2NyaXB0/LTEucG5n" alt="JavaScript"/>
          <img className={style.techSkills} src="https://imgs.search.brave.com/GeBQWomJeOeX11Ev96EmHEppcapbACRD-MYj5xFv1No/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9ub2RlLWpz/LWljb24tMjM5eDI1/Ni1pbXY1dmFpYy5w/bmc" alt="NodeJs"/>
          <img className={style.techSkills} src="https://imgs.search.brave.com/YmLeO7ie97iA9jHsy--Noe-n1GeiHAMTK8VKFhZbKKw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9wb3N0Z3Jl/c3FsLW9yaWdpbmFs/LXdvcmRtYXJrLWlj/b24tMjU2eDI1NC1p/c3RoNTRoaC5wbmc" alt="PostgreSql" />
          </div>
        
        </article>
      </div>
    </div>
  );
};

export default About;
