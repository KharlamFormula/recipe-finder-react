import { useState, useEffect } from 'react';
import './App.css';
import myVideo from './video.mp4';
import { GoSearch } from "react-icons/go";
import MyRecipesComponents from './myRecipesComponents';
function App() {

  const [mySearch, setMySearch] = useState('');
  const[wordSubmitted, setWordsubmitted]= useState('');
  const [myRecipes, setMyRecipes] = useState([]);

  useEffect(()=>{
    const getRecipe = async ()=>{
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=e80caeef&app_key=6fdd63b3c37740be4ff08c8b4c4b75f3`);
      const data = await response.json();
      setMyRecipes(data.hits);
    }

    getRecipe();
  }, [wordSubmitted]);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch =(e)=>{
    e.preventDefault();
    setWordsubmitted(mySearch);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      finalSearch(e);
    }
  };
  
  return (
    <div className='main_container'>
      <video autoPlay loop muted>
        <source src={myVideo} type='video/mp4'/>
      </video>

      <h1>Find a Recipe</h1>

      <div className='container'>
      <form onSubmit={finalSearch}>
        <input 
        className='search' 
        type='text' 
        value={mySearch} 
        onChange={myRecipeSearch} 
        onKeyDown={handleKeyDown} 
       />

        <button onClick={finalSearch}><GoSearch color="red" size={32} margin ="5px"/></button>
      </form>
      </div>

     {myRecipes.map((element, index) =>(
        <MyRecipesComponents
        key = {index}
        label = {element.recipe.label}
        image ={element.recipe.image}
        ingredientLines = {element.recipe.ingredientLines} />
      ))}    
    </div>
  )
}

export default App;
