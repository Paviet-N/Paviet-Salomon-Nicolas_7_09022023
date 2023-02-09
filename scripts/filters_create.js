/*** fonction pour créer / voir les filtres. ***/

/*** function filterAppliances créer et fait apparaitre le filtre Ingrédient. ***/

/** filterIngredients is initiated on index.js **/
// eslint-disable-next-line no-unused-vars
function filterIngredients() {

  const ingredientsBox = document.getElementsByClassName('filter_ingredients');
  const template = document.createElement('div');
  template.className = 'filter_ingredients_template';

  const article = document.createElement('div');
  article.className = 'filter_ingredients_close';

  const headerIngredients = document.createElement('header');
  headerIngredients.className = 'filter_ingredients_header'

  const title = document.createElement('h2');
  title.textContent = 'Ingredients';
  title.className = 'filter_ingredients_name';

  const spanAngle = document.createElement('span');
  spanAngle.className = 'filter_ingredients_angleDown';

  const arrowDown = document.createElement('i');
  arrowDown.className = 'fa-solid fa-angle-down fa-lg';
  arrowDown.style.cursor = 'pointer';

  const hiddenAngle = document.createElement('span');
  hiddenAngle.className = 'filter_ingredients_angleUp';

  const arrowUp = document.createElement('i');
  arrowUp.className = 'fa-solid fa-angle-up fa-lg';
  arrowUp.style.cursor = 'pointer';
  arrowUp.style.display = 'none';

  const inputIngredients = document.createElement('input');
  inputIngredients.setAttribute('id', 'ingredients_input');
  inputIngredients.style.display = 'none';
  inputIngredients.setAttribute('placeholder', 'Sélectionner un ingrédient...');
  inputIngredients.className = 'filter_ingredients_input';

  const ingredientsListBox = document.createElement('ul');
  ingredientsListBox.className = 'filter_ingredients_list';
  ingredientsListBox.style.display = 'none';

  /** Ingredients Event **/

  /* Lors du clique sur ArrowDown */
  arrowDown.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-down fa-lg') {
      article.classList.remove('filter_ingredients_close');
      article.classList.add('filter_ingredients_view');
      headerIngredients.style.display = 'none';
      inputIngredients.style.display = 'flex';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'flex';
      template.style.width = '650px';
      ingredientsListBox.style.display = 'flex';
      inputIngredients.focus();
      
    /* défini dans filters_input */
      // eslint-disable-next-line no-undef
      inputIngredient();
    }
    /* Défini dans tags.js */
    // eslint-disable-next-line no-undef
    addTagFilterIngredients();
  });
  
  /* Lors du clique sur ArrowUp */
  arrowUp.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-up fa-lg') {
      article.classList.remove('filter_ingredients_view');
      article.classList.add('filter_ingredients_close');
      headerIngredients.style.display = 'flex';
      inputIngredients.style.display = 'none';
      arrowDown.style.display = 'flex';
      arrowUp.style.display = 'none';
      template.style.width = '170px';
      ingredientsListBox.style.display = 'none';

    }
  });

  /* Append Section */
  ingredientsBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerIngredients);
  headerIngredients.appendChild(title);
  headerIngredients.appendChild(spanAngle);
  spanAngle.appendChild(arrowDown);
  article.appendChild(hiddenAngle);
  hiddenAngle.appendChild(arrowUp);
  article.appendChild(inputIngredients);
  article.appendChild(ingredientsListBox);

  return(article);
}


/*** function filterAppliances créer et fait apparaitre le filtre appareil. ***/
/** filterAppliances() is initiated on index.js **/
// eslint-disable-next-line no-unused-vars
function filterAppliances() {
  
  const appliancesBox = document.getElementsByClassName('filter_appliances');
  const template = document.createElement('div');
  template.className = 'filter_appliances_template';

  const article = document.createElement('div');
  article.className = 'filter_appliances_close';

  const headerAppliances = document.createElement('header');
  headerAppliances.className = 'filter_appliances_header'

  const title = document.createElement('h2');
  title.textContent = 'Appareils';
  title.className = 'filter_appliances_name';

  const spanAngle = document.createElement('span');
  spanAngle.className = 'filter_appliances_angleDown';

  const arrowDown = document.createElement('i');
  arrowDown.className = 'fa-solid fa-angle-down fa-lg';
  arrowDown.style.cursor = 'pointer';

  const hiddenAngle = document.createElement('span');
  hiddenAngle.className = 'filter_appliances_angleUp';

  const arrowUp = document.createElement('i');
  arrowUp.className = 'fa-solid fa-angle-up fa-lg';
  arrowUp.style.cursor = 'pointer';
  arrowUp.style.display = 'none';

  const inputAppliances = document.createElement('input');
  inputAppliances.setAttribute('id', 'appliances_input');
  inputAppliances.setAttribute('placeholder', 'Sélectionner un appareil...');
  inputAppliances.className = 'filter_appliances_input';

  const appliancesListBox = document.createElement('ul');
  appliancesListBox.className = 'filter_appliances_list';
  appliancesListBox.style.display = 'none';

  /** Appliances Event **/

  /* Lors du clique sur ArrowDown */
  arrowDown.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-down fa-lg') {
      article.classList.remove('filter_appliances_close');
      article.classList.add('filter_appliances_view');
      headerAppliances.style.display = 'none';
      inputAppliances.style.display = 'flex';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'flex';
      template.style.width = '650px';
      appliancesListBox.style.display = 'flex';
      inputAppliances.focus();

    /* Défini dans filters_input */
    // eslint-disable-next-line no-undef
    inputAppliance();
    }
    /* Défini dans tags.js */
    // eslint-disable-next-line no-undef
    addTagFilterAppliances();
  });

  /* Lors du clique sur ArrowUp */
  arrowUp.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-up fa-lg') {
      article.classList.remove('filter_appliances_view');
      article.classList.add('filter_appliances_close');
      headerAppliances.style.display = 'flex';
      inputAppliances.style.display = 'none';
      arrowDown.style.display = 'flex';
      arrowUp.style.display = 'none';
      template.style.width = '170px';
      appliancesListBox.style.display = 'none';
    }
  });

  /* Append Section */
  appliancesBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerAppliances);
  headerAppliances.appendChild(title);
  headerAppliances.appendChild(spanAngle);
  spanAngle.appendChild(arrowDown);
  article.appendChild(hiddenAngle);
  hiddenAngle.appendChild(arrowUp);
  article.appendChild(inputAppliances);
  article.appendChild(appliancesListBox);

  return(article);
}

/*** function filterUstensils créer et fait apparaitre le filtre ustensil. ***/
/** filterUstensils() is initiated on index.js **/
// eslint-disable-next-line no-unused-vars
function filterUstensils() {
  
  const ustensilsBox = document.getElementsByClassName('filter_ustensils');
  const template = document.createElement('div');
  template.className = 'filter_ustensils_template';

  const article = document.createElement('div');
  article.className = 'filter_ustensils_close';

  const headerUstensils = document.createElement('header');
  headerUstensils.className = 'filter_ustensils_header'

  const title = document.createElement('h2');
  title.textContent = 'Ustensils';
  title.className = 'filter_ustensils_name';

  const spanAngle = document.createElement('span');
  spanAngle.className = 'filter_ustensils_angleDown';

  const arrowDown = document.createElement('i');
  arrowDown.className = 'fa-solid fa-angle-down fa-lg';
  arrowDown.style.cursor = 'pointer';

  const hiddenAngle = document.createElement('span');
  hiddenAngle.className = 'filter_ustensils_angleUp';

  const arrowUp = document.createElement('i');
  arrowUp.className = 'fa-solid fa-angle-up fa-lg';
  arrowUp.style.cursor = 'pointer';
  arrowUp.style.display = 'none';

  const inputUstensils = document.createElement('input');
  inputUstensils.setAttribute('id', 'ustensils_input');
  inputUstensils.setAttribute('placeholder', 'Sélectionner un ustensil...');
  inputUstensils.className = 'filter_ustensils_input';

  const ustensilsListBox = document.createElement('ul');
  ustensilsListBox.className = 'filter_ustensils_list';
  ustensilsListBox.style.display = 'none';

  /** Ustensils Event **/

  /* Lors du clique sur ArrowDown */
  arrowDown.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-down fa-lg') {
      article.classList.remove('filter_ustensils_close');
      article.classList.add('filter_ustensils_view');
      headerUstensils.style.display = 'none';
      inputUstensils.style.display = 'flex';
      arrowDown.style.display = 'none';
      arrowUp.style.display = 'flex';
      template.style.width = '650px';
      ustensilsListBox.style.display = 'flex';
      inputUstensils.focus();

      /* Défini dans Filters_input */
      // eslint-disable-next-line no-undef
      inputUstensil();
    }
    /* Défini dans tags.js */
    // eslint-disable-next-line no-undef
    addTagFilterUstensils();
  });

  /* Lors du clique sur ArrowUp */
  arrowUp.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-angle-up fa-lg') {
      article.classList.remove('filter_ustensils_view');
      article.classList.add('filter_ustensils_close');
      headerUstensils.style.display = 'flex';
      inputUstensils.style.display = 'none';
      arrowDown.style.display = 'flex';
      arrowUp.style.display = 'none';
      template.style.width = '170px';
      ustensilsListBox.style.display = 'none';
    }
  });

  /* Append Section */
  ustensilsBox[0].appendChild(template);
  template.appendChild(article);
  article.appendChild(headerUstensils);
  headerUstensils.appendChild(title);
  headerUstensils.appendChild(spanAngle);
  spanAngle.appendChild(arrowDown);
  article.appendChild(hiddenAngle);
  hiddenAngle.appendChild(arrowUp);
  article.appendChild(inputUstensils);
  article.appendChild(ustensilsListBox);

  return(article);
}