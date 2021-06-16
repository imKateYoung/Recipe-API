import './App.css';
import Axios from "axios";  //async 
import {useState} from "react";
import RecipeTile from './RecipeTile';
import {ID} from './key.js';
import {KEY} from './key.js';


function App() {

  const [query, setquery] = useState("")
  const [recipes, setRecipes] = useState([])

  var url = `https://api.edamam.com/search?q=${query}&app_id=${ID}&app_key=${KEY}&from=0&to=10`;
  
  async function getRecipe(){
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);

  }

  const submit = (e) =>{
    e.preventDefault();
    getRecipe();
  }


  return (
    <div className="App">
        <h1> Recipe Plaza</h1>
        <form className="App-search" onSubmit={submit}>
          <input className="App-input" type="text" placeholder="Please enter ingredient" value={query} onChange={(e) => setquery(e.target.value)}/>
          <input className="App-submit" type="submit" value="Search"/>
        </form>
        <div className="App-recipe">
         {recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} />
         })}
        </div>
    </div>
  );
}

export default App;


//if user type in ingredients, it display related recipe
// store user input and do a fetch, display