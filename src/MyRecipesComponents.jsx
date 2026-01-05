function MyRecipesComponents({label, image, ingredientLines}) {
    return(

        <div>
             <h2 className="main_container">{label}</h2>
        <div className="component">
            <img src={image} className="picture" width='180px' height='130px'/> 
            <ul>
                {ingredientLines.map((ingredientLine, index) =>(
                    <li key={index}>{ingredientLine}</li>
                ))}
            </ul> 
        </div>
        </div>
    )
}

export default MyRecipesComponents; 