import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './index.css'
import { recipesContext } from './contexts/recipecContext.ts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { recipes } from './constans/recipes.ts'
import RecipesProfile from './components/allRecipes/recipesProfile/recipesProfile.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <body>
  <React.StrictMode>
      <BrowserRouter>
    <recipesContext.Provider value={recipes}>
    <header>
      <div className="title">
        <h1>Рецепты от <span>ИИ</span></h1>
      </div>
    </header>
    <main>
    </main>
    <Routes>
        <Route path='/' element={<App/>} index/>
        <Route path='/recipe/*' element={<RecipesProfile/>}/>
    </Routes>
    </recipesContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
  </body>
)
