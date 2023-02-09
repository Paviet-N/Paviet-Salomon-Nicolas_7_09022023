/*** Fonction pour remplir les filtres par catégorie ***/


/** fillfilters() is initiated on index.js **/
// eslint-disable-next-line no-unused-vars
function fillFilters(recipes) {
  const ingredientsBloc = document.querySelector('.filter_ingredients_list');
  const appliancesBloc = document.querySelector('.filter_appliances_list');
  const ustensilsBloc = document.querySelector('.filter_ustensils_list');

  const ingredientsList = [];
  const appliancesList = [];
  const ustensilsList = [];

  // On vide les listes à chaque fois que l'on appel la fonction.
  ingredientsBloc.innerHTML = '';
  appliancesBloc.innerHTML = '';
  ustensilsBloc.innerHTML = '';

  
  recipes.forEach((recipe) => {
    /** Ingredients **/
    // if tags already used, don't push it.
    const itags = [...document.querySelectorAll('.tag_ingredient')].map( (itag) => itag.innerText);
    recipe.ingredients.forEach(({ ingredient }) => {
      if (ingredientsList.includes(ingredient) === false && itags.includes(ingredient) === false) {
        ingredientsList.push(ingredient);
        const filterItem = document.createElement('li');
        filterItem.classList.add('filter_ingredients_items');
        filterItem.innerText = ingredient;
        ingredientsBloc.appendChild(filterItem);
      }
    });
    
    /** appliances **/
    // if tags already used, don't push it.
    const atags = [...document.querySelectorAll('.tag_appliance')].map( (atag) => atag.innerText);
      if (appliancesList.includes(recipe.appliance) === false && atags.includes(recipe.appliance) === false) {
        appliancesList.push(recipe.appliance);
        const filterItem = document.createElement('li');
        filterItem.classList.add('filter_appliances_items');
        filterItem.innerText = recipe.appliance;
        appliancesBloc.appendChild(filterItem);
      }

    /** ustensils **/
    // if tags already used, don't push it.
    const utags = [...document.querySelectorAll('.tag_ustensil')].map( (utag) => utag.innerText)
    recipe.ustensils.forEach((ustensil) => {
      if (ustensilsList.includes(ustensil) === false && utags.includes(ustensil) === false) {
        ustensilsList.push(ustensil);
        const filterItem = document.createElement('li');
        filterItem.classList.add('filter_ustensils_items');
        filterItem.innerText = ustensil;
        ustensilsBloc.appendChild(filterItem);
      } 
    });
  });
  /* Variable défini dans tags.js */
  // eslint-disable-next-line no-undef
  tagIngredientAlreadyAdded = false;
  // eslint-disable-next-line no-undef
  addTagFilterIngredients();
  // eslint-disable-next-line no-undef
  tagApplianceAlreadyAdded = false;
  // eslint-disable-next-line no-undef
  addTagFilterAppliances();
  // eslint-disable-next-line no-undef
  tagUstensilAlreadyAdded = false;
  // eslint-disable-next-line no-undef
  addTagFilterUstensils();
}

/*** Fonction pour ouvrir qu'un seul filtre à la fois. ***/
// eslint-disable-next-line no-unused-vars
function isArrowClicked() {
  /** Variables **/

  const arrowDownIngredient = document.querySelector('.filter_ingredients_angleDown');
  const arrowDownAppliance = document.querySelector('.filter_appliances_angleDown');
  const arrowDownUstensil = document.querySelector('.filter_ustensils_angleDown');

  let ingredientCloseElt;
  let ingredientArrowUp;
  let applianceCloseElt;
  let applianceArrowUp;
  let ustensilCloseElt;
  let ustensilArrowUp;

  /** Events **/
  
  /* Ingredient */
  arrowDownIngredient.addEventListener('click', () => {
    applianceCloseElt = document.querySelector('.filter_appliances_view');
    applianceArrowUp = document.querySelector('.filter_appliances_angleUp .fa-angle-up');
    ustensilCloseElt = document.querySelector('.filter_ustensils_view');
    ustensilArrowUp = document.querySelector('.filter_ustensils_angleUp .fa-angle-up');
    if (applianceCloseElt != null) {
      applianceArrowUp.click();
    }
    if (ustensilCloseElt != null) {
      ustensilArrowUp.click();
    }
  });

  /* Appliance */ 
  arrowDownAppliance.addEventListener('click', () => {
    ustensilCloseElt = document.querySelector('.filter_ustensils_view');
    ustensilArrowUp = document.querySelector('.filter_ustensils_angleUp .fa-angle-up');
    ingredientCloseElt = document.querySelector('.filter_ingredients_view');
    ingredientArrowUp = document.querySelector('.filter_ingredients_angleUp .fa-angle-up');
    if (ustensilCloseElt != null) {
      ustensilArrowUp.click();
    }
    if (ingredientCloseElt != null) {
      ingredientArrowUp.click();
    }
  });

  /* Ustensil */
  arrowDownUstensil.addEventListener('click', () => {
    ingredientCloseElt = document.querySelector('.filter_ingredients_view');
    ingredientArrowUp = document.querySelector('.filter_ingredients_angleUp .fa-angle-up');
    applianceCloseElt = document.querySelector('.filter_appliances_view');
    applianceArrowUp = document.querySelector('.filter_appliances_angleUp .fa-angle-up');
    if (ingredientCloseElt != null) {
      ingredientArrowUp.click();
      }
    if (applianceCloseElt != null) {
      applianceArrowUp.click();
    }  
  });
}