import { IRecipes } from '../../interfaces/IRecipes'
import './allRecipes.css'
import { Link } from 'react-router-dom'
export var recI:any = {}
export var urlI:any = `/recipe/${recI.id}`
export function AllRecipes(props:IRecipes) {
  recI = props
  return(
    <>
    <div className="item">
      <div className="item__photo" onClick={() =>{
          recI = props
          urlI = `/recipe/${recI.id}`
          console.log(urlI)
        }}>
        <Link to={`/recipe/${recI.id}`} key={recI.id}>
        <img src={props.image} alt={props.title} width={100} height={60}/>
        </Link>
      </div>
      <div className="item__title">
        <h2>{props.title}</h2>
      </div>
      <div className='Span'><div className="item__time">
        <h3>Время приготовления: <span>{props.time}</span></h3>
      </div>
      <div className="item__ingridients">
        <h3>Ингридиенты: <span>{props.ingridients}</span></h3>
      </div>
      </div>
    </div>
    </>
  )
}

