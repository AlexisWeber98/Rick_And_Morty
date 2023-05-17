import style from './Cards.module.css'
import Card from '../Card/Card';



function Cards({characters, onClose}) {

const personajesCards = characters.map(({id, name, status, species,gender, origin,image}) =>
<Card 
key = {id}
id={id}
name={name}
status={status}
species={species}
gender={gender}
origin={origin}
image={image}
onClose={onClose}/>)



   return <div className={style.contenedor}>
      < div className={style.cards}>
      {personajesCards}
      </div>
     
   </div>;
}

export default Cards
