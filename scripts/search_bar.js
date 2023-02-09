/** recipesToDisplay is defined in tags.js **/
/** filteredRecipesWithTags is defined in tags.js **/
/** fillFilters is defined in filters_fill.js **/
/** DisplayData is defined in index.js **/

/* eslint-disable no-undef */

const searchBarInput = document.querySelector('.search_input');
const noResultText = document.querySelector('.no_result_message');

/** Fonction de recherche  **/
function searchLive() {
  let tagsUsed = false;
  recipesToDisplay = [];
  let mainInput;

  // Retourne un tableau 'recipeToDisplay' qui suit les règles de ma regex.
  if (searchBarInput.value.length > 2) {
    mainInput = searchBarInput.value;

    const regex = new RegExp(`${mainInput.trim().toLowerCase()}`);
    recipesToDisplay = recipes.filter((recipe) => {
      let recipeIsMatching = false;
      if (regex.test(recipe.name.toLowerCase())) {
        recipeIsMatching = true;
      } else if (regex.test(recipe.description)) {
        recipeIsMatching = true;
      }
      recipe.ingredients.forEach(({ ingredient }) => {
        if (regex.test(ingredient)) {
          recipeIsMatching = true;
        }
      });
      return recipeIsMatching;
    });
    /* Remplir les filtres avec le tableau retourné */
    fillFilters(recipesToDisplay);
  }
  
  /* Si l'un de ses tableaux comportent un élément alors un tag est utilisé, applique donc la fonction filteredRecipesWithTags avec comme callback recipesToDisplay;
  Les tableaux sont définis dans tags.js dans la fonction filteredRecipesWithTags. */
  if (Array.from(document.querySelectorAll('.tag_ingredients_block .tag_ingredient .tag_blue')).length > 0
  || Array.from(document.querySelectorAll('.tag_appliances_block .tag_appliance .tag_green')).length > 0
  || Array.from(document.querySelectorAll('.tag_ustensils_block .tag_ustensil .tag_red')).length > 0) {
    tagsUsed = true;
    if (recipesToDisplay.length > 0) {
      recipesToDisplay = filteredRecipesWithTags(recipesToDisplay);
    } else {
    recipesToDisplay = filteredRecipesWithTags(recipes);
    }
  }

  /** Message erreur dans le cas d'une mauvaise recherche **/
  if (recipesToDisplay.length > 0) {
    noResultText.innerHTML = '';
    displayData(recipesToDisplay);
  } else {
    displayData(recipesToDisplay);
     noResultText.innerHTML = '<p>Aucune recette ne correspond à votre critère...</p>';
  } 

  // Si la barre de recherche est vide ou moins de 3 caractères.
  if (((searchBarInput.value === '') || (searchBarInput.value.length < 3)) && tagsUsed === false) {
    fillFilters(recipes);
    displayData(recipes);
    noResultText.innerHTML = '';
  }
}

/*** EVENTS ***/

let typingTimer;
const typeInterval = 100;
searchBarInput.addEventListener('keyup', () => {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(searchLive(), typeInterval);
});

