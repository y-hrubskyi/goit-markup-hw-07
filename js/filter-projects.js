const refs = {
  filterBtnsList: document.querySelector('ul.filter-list'),
  projectsCards: document.querySelectorAll('li.projects-list-item'),
};
refs.filterBtnsList.addEventListener('click', onFilterBtnsListClick);

function onFilterBtnsListClick(event) {
  if (!event.target.classList.contains('button')) {
    return;
  }

  const category = event.target.dataset.category;
  showProjectsByCategory(category);
}

function showProjectsByCategory(category) {
  refs.projectsCards.forEach(projectCard => {
    if (category === 'All' || projectCard.dataset.category === category) {
      projectCard.classList.remove('visually-hidden');
    } else {
      projectCard.classList.add('visually-hidden');
    }
  });
}
