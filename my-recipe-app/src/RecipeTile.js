import React from "react"
import "./RecipeTile.css"

export default function RecipeTile({recipe}){
    return (
        recipe["recipe"]["image"].match(/\.(jpg|jpeg|gif|png)$/) != null && (
        <div className="RecipeTile" onClick={() =>{
            window.open(recipe["recipe"]["url"]);
        }}>
         <img className="recipeTile-pic" src={recipe["recipe"]["image"]}  alt=""/>
         <p className="recipeTile-text">{recipe["recipe"]["label"]}</p>       
        </div>
    )
  ) 
}