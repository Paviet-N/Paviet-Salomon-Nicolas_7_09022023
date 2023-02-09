/** searchLive is defined in search_bar.js **/
/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */
/*** Variables ***/

/** On sélectionne les items dans chaque filtre **/

const filterItemIngredients = document.getElementsByClassName('filter_ingredients_items');
const filterItemAppliances = document.getElementsByClassName('filter_appliances_items');
const filterItemUstensils = document.getElementsByClassName('filter_ustensils_items');


let tagIngredientAlreadyAdded = false;
let tagApplianceAlreadyAdded = false;
let tagUstensilAlreadyAdded = false;

/** TAGS blockS - Conteneur des tags **/

const tagIngredientblock = document.querySelector('.tag_ingredients_block');
const tagApplianceblock = document.querySelector('.tag_appliances_block');
const tagUstensilblock = document.querySelector('.tag_ustensils_block');

/*** FUNCTIONS ***/

/** Ajouter des tags pour les filtres **/

/* Ingrédients */

// eslint-disable-next-line no-unused-vars
function addTagFilterIngredients() {
  if (tagIngredientAlreadyAdded === false) {
    tagIngredientAlreadyAdded = true;
    Array.from(filterItemIngredients).forEach((element) => {
      element.addEventListener('click', (e) => {
        const tagIngredientContainer = document.createElement('div');
        tagIngredientContainer.setAttribute('class', 'tag_ingredient');
        
        const tagIngredient = document.createElement('li');
        tagIngredient.innerText = e.target.innerText;
        tagIngredient.classList.add('tag_blue');
        
        const deleteTagIcon = document.createElement('span');
        deleteTagIcon.classname = 'deleteIcon';
        
        const deleteIconImg = document.createElement('i');
        deleteIconImg.className = 'fa-regular fa-circle-xmark';
        deleteIconImg.style.cursor = 'pointer';
        deleteIconImg.style.width = '20px';
        
        deleteIconImg.addEventListener('click', () => {
          tagIngredientContainer.remove();
          searchLive();
          return false;
        });
        tagIngredientblock.appendChild(tagIngredientContainer);
        tagIngredientContainer.appendChild(tagIngredient);
        tagIngredientContainer.appendChild(deleteTagIcon);
        deleteTagIcon.appendChild(deleteIconImg);
        searchLive();
      });
    });
  }
}

/* Appareils */ 

// eslint-disable-next-line no-unused-vars
function addTagFilterAppliances() {
  if (tagApplianceAlreadyAdded === false) {
    tagApplianceAlreadyAdded = true;
    Array.from(filterItemAppliances).forEach((element) => {
      element.addEventListener('click', (e) => {

        const tagApplianceContainer = document.createElement('div');
        tagApplianceContainer.setAttribute('class', 'tag_appliance');

        const tagAppliance = document.createElement('li');
        tagAppliance.innerText = e.target.innerText;
        tagAppliance.classList.add('tag_green');

        const deleteTagIcon = document.createElement('span');
        deleteTagIcon.className = 'deleteIcon';
        
        const deleteIconImg = document.createElement('i');
        deleteIconImg.className = 'fa-regular fa-circle-xmark';
        deleteIconImg.style.cursor = 'pointer';
        deleteIconImg.style.width = '20px';
        deleteTagIcon.addEventListener('click', () => {
          tagApplianceContainer.remove();
          // défini dans search_bar.js 
          searchLive();
          return false;
        });
        tagApplianceblock.appendChild(tagApplianceContainer);
        tagApplianceContainer.appendChild(tagAppliance);
        tagApplianceContainer.appendChild(deleteTagIcon);
        deleteTagIcon.appendChild(deleteIconImg);
        // défini dans search_bar.js
        searchLive();
      });
    });
  }
}

/* Ustensils */ 

// eslint-disable-next-line no-unused-vars
function addTagFilterUstensils() {
  if (tagUstensilAlreadyAdded === false) {
    tagUstensilAlreadyAdded = true;
    Array.from(filterItemUstensils).forEach((element) => {
      element.addEventListener('click', (e) => {
        
        const tagUstensilContainer = document.createElement('div');
        tagUstensilContainer.setAttribute('class', 'tag_ustensil');

        const tagUstensil = document.createElement('li');
        tagUstensil.innerText = e.target.innerText;
        tagUstensil.classList.add('tag_red');
        
        const deleteTagIcon = document.createElement('span');
        deleteTagIcon.className = 'deleteIcon';
        
        const deleteIconImg = document.createElement('i');
        deleteIconImg.className = 'fa-regular fa-circle-xmark';
        deleteIconImg.style.cursor = 'pointer';
        deleteIconImg.style.width = '20px';
        deleteTagIcon.addEventListener('click', () => {
          tagUstensilContainer.remove();
          // défini dans search_bar.js
          searchLive();
          return false;
        });
        tagUstensilblock.appendChild(tagUstensilContainer);
        tagUstensilContainer.appendChild(tagUstensil);
        tagUstensilContainer.appendChild(deleteTagIcon);
        deleteTagIcon.appendChild(deleteIconImg);
        // défini dans search_bar.js
        searchLive();
      });
    });
  }
}


/** TAG FILTRE RECIPES **/

/* filteredRecipesWithTags */
// eslint-disable-next-line no-unused-vars
function filteredRecipesWithTags(recipesToFilter) {
  /* Faire des tableaux des items afficher pour chaque filtre */ 
  const taggedIngredientsDOM = Array.from(document.querySelectorAll('.tag_ingredients_block .tag_ingredient .tag_blue'));

  const taggedAppliancesDOM = Array.from(document.querySelectorAll('.tag_appliances_block .tag_appliance .tag_green'));

  const taggedustensilsDOM = Array.from(document.querySelectorAll('.tag_ustensils_block .tag_ustensil .tag_red'));
  let recipesToDisplay = [];
  let taggedIngredients = [];
  let taggedAppliances = [];
  let taggedUstensils = [];
  
  /* Créer des tableaux avec map contenant le texte de chaque tableau */
  taggedIngredients = taggedIngredientsDOM.map((taggedIngredient) => taggedIngredient.innerText);
  taggedAppliances = taggedAppliancesDOM.map((taggedAppliance) => taggedAppliance.innerText);
  taggedUstensils = taggedustensilsDOM.map((taggedUstensil) => taggedUstensil.innerText);
  
  /* Définir le tableau recipesToDisplay un filtre de recipes */
  recipesToDisplay = recipesToFilter.filter((recipe) => {
    let recipeIsMatching = false;
    let ingredientIsMatching = false;
    let applianceIsMatching = false;
    let ustensilIsMatching = false;

    let ingredientsMatching = 0;
    let appliancesMatching = 0;
    let ustensilsMatching = 0;

    let ingredientsInTheRecipe = [];
    let appliancesInTheRecipe = [];
    let ustensilsInTheRecipe = [];

    ingredientsInTheRecipe = recipe.ingredients.map(({ ingredient }) => ingredient);
    
    appliancesInTheRecipe.push(recipe.appliance);
    
    ustensilsInTheRecipe = recipe.ustensils.map((ustensil) => ustensil);

    if(taggedIngredients.length > 0) {
      taggedIngredients.forEach((taggedIngredient) => {
        if (ingredientsInTheRecipe.includes(taggedIngredient)) {
          ingredientsMatching += 1;
        }
      });
    }

    if(taggedAppliances.length > 0) {
      taggedAppliances.forEach((taggedAppliance) => {
        if (appliancesInTheRecipe.includes(taggedAppliance)) {
          appliancesMatching += 1;
        }
      });
    }
    
    if (taggedUstensils.length > 0) {
      taggedUstensils.forEach((taggedUstensil) => {
        if (ustensilsInTheRecipe.includes(taggedUstensil)) {
          ustensilsMatching += 1;
        }
      });
    }

    if (ingredientsMatching === taggedIngredients.length) {
      ingredientIsMatching = true;
    }

    if (taggedAppliances.length > 0) {
      if (appliancesMatching > 0) {
        applianceIsMatching = true;
      }
    } else applianceIsMatching = true;

    if (ustensilsMatching === taggedUstensils.length) {
      ustensilIsMatching = true;
    }

    if ((ingredientIsMatching === true) && (applianceIsMatching === true) && (ustensilIsMatching === true)) {
      recipeIsMatching = true;
    }

    return recipeIsMatching;
  });
  // filFilters is defined in filters-fill.js 
  fillFilters(recipesToDisplay);
  return recipesToDisplay;
}