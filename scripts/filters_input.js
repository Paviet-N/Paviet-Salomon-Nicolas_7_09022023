/*** Rechercher dans les inputs des filtres ***/

/** Fonction pour rechercher dans le filtre ingrédient via input **/
function getSearchIngredients() {

  const filterRender = document.querySelectorAll('.filter_ingredients_list li');
  const cards = document.querySelectorAll('.filter_ingredients_items');
  const searchQuery = document.getElementById('ingredients_input').value;

  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove('is_hidden');
    } else {
      card.classList.add('is_hidden');
    }
  });
  return (filterRender);
}

/* Used on filters_recipes.js */ 
// eslint-disable-next-line no-unused-vars
function inputIngredient() {
  const searchInputIngredient = document.getElementById('ingredients_input');
  searchInputIngredient.addEventListener('keyup', () => {
    // clearTimeout is defined on search_bar.js
    // eslint-disable-next-line no-undef
    clearTimeout(typingTimer);
    // eslint-disable-next-line no-undef
    typingTimer = setTimeout(getSearchIngredients, typeInterval);
  });
}

/** Fonction pour rechercher dans le filtre appareis via input **/

function getSearchAppliances() {
  const filterRender = document.querySelectorAll('.filter_appliances_list li');
  const cards = document.querySelectorAll('.filter_appliances_items');
  const searchQuery = document.getElementById('appliances_input').value;

  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove('is_hidden');
    } else {
      card.classList.add('is_hidden');
    }
  });
  return (filterRender);
}

/* Used on filters_recipes.js */ 
// eslint-disable-next-line no-unused-vars
function inputAppliance() {
  const searchInputAppliance = document.getElementById('appliances_input');
  searchInputAppliance.addEventListener('keyup', () => {
        // clearTimeout is defined on search_bar.js 
    // eslint-disable-next-line no-undef
    clearTimeout(typingTimer);
  // eslint-disable-next-line no-undef
  typingTimer = setTimeout(getSearchAppliances, typeInterval);
  });
}

/** Fonction pour rechercher dans le filtre ustensil via input **/

function getSearchUstensils() {
  const filterRender = document.querySelectorAll('.filter_ustensils_list li');
  const cards = document.querySelectorAll('.filter_ustensils_items');
  const searchQuery = document.getElementById('ustensils_input').value;

  cards.forEach((card) => {
    if (card.innerText.toLowerCase().includes(searchQuery.toLowerCase())) {
      card.classList.remove('is_hidden');
    } else {
      card.classList.add('is_hidden');
    }
  });
  return (filterRender);
}

/* Used on filters_recipes.js */ 
// eslint-disable-next-line no-unused-vars
function inputUstensil() {
  const searchInputUstensil = document.getElementById('ustensils_input');
  searchInputUstensil.addEventListener('keyup', () => {
        // clearTimeout is defined on search_bar.js 
    // eslint-disable-next-line no-undef
    clearTimeout(typingTimer);
    // eslint-disable-next-line no-undef
    typingTimer = setTimeout(getSearchUstensils, typeInterval);
  });
}

