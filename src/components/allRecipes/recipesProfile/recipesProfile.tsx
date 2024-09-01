import './recipesProfile.css'
import { Link } from "react-router-dom"
import { recI } from "../allRecipes"
export default function RecipesProfile() {
  return(
    <>
    <div className='recipesProfile'>
    <main>
      <div className="recipesImg">
    <img src={recI.image} alt={recI.title}/>
      </div>
      <div className="recipesTitle">
    <h1>{recI.title}</h1>
      </div>
      <div className="Span">
      <div className="recipesIngridients">
    <h3>Ингридиенты: <span>{recI.ingridients}</span></h3>
      </div>
      <div className="recipesTime">
    <h3>Время приготовления: <span>{recI.time}</span></h3>
      </div>
      <div className="recipesRecipe">
    <h3>Инструкция: <span>{recI.recipe}</span></h3>
      </div>
      </div>
    </main>
    <footer><Link to='/' key={recI.id} className='link'>К рецептам</Link></footer>
    </div>
    </>
  )
}