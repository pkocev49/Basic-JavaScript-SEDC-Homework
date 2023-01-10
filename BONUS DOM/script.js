

function createRecipe(element) {
    

    let nameOfRecipe = document.querySelector('#nameofrecipe')
    let numOfIng = document.querySelector('#numOfIng')
    let nameOfing = document.querySelector('#nameOfing')

    let recipe = document.querySelector('.recipe')

    const Recipe = {
        nameofrecipe: "",
        numOfIng: 0,
        nameOfing: [],
    }
    console.log(Recipe)
    console.log(recipe)
    Recipe.nameofrecipe = nameOfRecipe.value
    Recipe.numOfIng = numOfIng.value
    Recipe.nameOfing = nameOfing.value

    const html = `<h2>${Recipe.nameofrecipe}</h2> 
    <h3>Number of ingredients:${Recipe.numOfIng}</h3>
    <div><h3>Name of ingredients:<ul><li>${Recipe.nameOfing}</li></ul></h3></div>
    `
    recipe.innerHTML = html
  
   
}



