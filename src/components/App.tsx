import { ChangeEvent, useContext, useState } from 'react'
import './App.css'
import { AllRecipes } from './allRecipes/allRecipes'
import { recipesContext } from '../contexts/recipecContext'
import { IRecipes} from '../interfaces/IRecipes'


export default function App() {
  const recipes:IRecipes[] = useContext(recipesContext)
  
  const [userSearch, setUserSearch]:any = useState("")
  const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
    setUserSearch(e.target.value)
  }
  var recipesFilter = recipes.filter (item => item.title.toLowerCase().includes(userSearch.toLowerCase()))
  return (
    <div className='all'>
       <input type="text" value={userSearch} onChange={handleInput} className='form' placeholder='Поиск рецепта'/>
      <main>
      <div className="items">
        {userSearch == "" ? (recipes.map((item:any) => (
          <AllRecipes key = {item.id}
          {...item}
          />))) : (recipesFilter.map((item:any) => (
            <AllRecipes key = {item.id}
            {...item}
            />)))}
      </div>
      </main>
      <footer>
      </footer>
    </div>
  )
}

