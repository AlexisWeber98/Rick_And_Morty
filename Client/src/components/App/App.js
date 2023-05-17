import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import './App.css';
import Cards from '../Cards/Cards';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Detail from '../Detail/Detail';
import Error404 from '../Error/Error404';
import Form from '../Form/Form';
import Favorites from '../Favorites/Favorites';
import { useEffect, useState} from 'react';
import axios from 'axios';



function  App() {
   
   const [characters,setCharacters] = useState([]);

   const [ acces, setAcces ] = useState(false);

   const EMAIL = "Alexis.Weber@mailfence.com";
   const PASSWORD = "passw0rd";

   
   const url = `https://rickandmortyapi.com/api/character`;

   const location = useLocation();
   
   const navigate = useNavigate();



   //-------------------FUNCTIONS--------------------------------------------//


   const login = (userData) => {

      if (EMAIL === userData.email && PASSWORD === userData.password){
         setAcces(true) 
         navigate("/home");
      }
   }


   useEffect(() => {
      !acces && navigate("/");
   }, [acces]);


   const onClose = (id) =>{
      setCharacters(characters.filter((char) => char.id!== id))
   };


   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({data}) => {
         if (data.name){
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!' )
         }
      })
   };
   
   const handleInvalidRoute = () => {
      navigate("/404")
   }


   return (
      <div className='App'>

         {location.pathname !== '/' && (<Nav className='Nav' onSearch={onSearch} />)}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path={`/detail/:id`} element= {<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path="/404" element={<Error404 />} />
            <Route path='*' element={handleInvalidRoute} /> 
         </Routes>

        
         
      </div>
   );
}

export default App;
