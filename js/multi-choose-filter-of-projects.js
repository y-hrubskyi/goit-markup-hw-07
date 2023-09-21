//* using visually-hidden
const refs = {
  filterBtnsList: document.querySelector('ul.filter-list'),
  filterBtns: document.querySelectorAll('ul.filter-list .button'),
  allFilterBtn: document.querySelector(
    'ul.filter-list .button[data-category="All"]'
  ),
  projectsCards: document.querySelectorAll('li.projects-list-item'),
};
const categoriesList = [...refs.filterBtns].map(btn => btn.dataset.category);
let filteredCategories = ['All'];

refs.filterBtnsList.addEventListener('click', onFilterBtnsListClick);
refs.filterBtnsList.addEventListener('mousedown', event =>
  event.preventDefault()
);

function onFilterBtnsListClick(event) {
  if (!event.target.classList.contains('button')) {
    return;
  }

  const button = event.target;
  const category = button.dataset.category;

  const idx = filteredCategories.indexOf(category);
  if (idx === -1) {
    if (category === 'All') {
      filteredCategories = [...categoriesList];
      refs.filterBtns.forEach(btn => btn.classList.remove('is-choosed'));
      refs.allFilterBtn.classList.add('is-choosed');
    } else {
      if (filteredCategories.includes('All')) {
        filteredCategories = [];
        refs.allFilterBtn.classList.remove('is-choosed');
      }

      filteredCategories.push(category);
      button.classList.add('is-choosed');

      if (filteredCategories.length === categoriesList.length - 1) {
        filteredCategories.push('All');
        refs.filterBtns.forEach(btn => btn.classList.remove('is-choosed'));
        refs.allFilterBtn.classList.add('is-choosed');
      }
    }
  } else {
    if (category === 'All') {
      filteredCategories = [];
      refs.filterBtns.forEach(btn => btn.classList.remove('is-choosed'));
    } else {
      if (filteredCategories.includes('All')) {
        filteredCategories = [category];
        refs.allFilterBtn.classList.remove('is-choosed');
        button.classList.add('is-choosed');
      } else {
        filteredCategories.splice(idx, 1);
        button.classList.remove('is-choosed');
      }
    }
  }

  console.log(filteredCategories);
  showProjectsByCategory(filteredCategories);
}

function showProjectsByCategory(filteredCategories) {
  refs.projectsCards.forEach(projectCard => {
    if (
      filteredCategories.includes('All') ||
      filteredCategories.includes(projectCard.dataset.category)
    ) {
      projectCard.classList.remove('visually-hidden');
    } else {
      projectCard.classList.add('visually-hidden');
    }
  });
}
