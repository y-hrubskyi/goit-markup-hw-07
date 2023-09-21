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

//* using json-data
// import projects from '../data/projects.json' assert { type: 'json' };

// const refs = {
//   filterBtnsList: document.querySelector('ul.filter-list'),
//   filterBtns: document.querySelectorAll('ul.filter-list .button'),
//   allFilterBtn: document.querySelector(
//     'ul.filter-list .button[data-category="All"]'
//   ),
//   projectsList: document.querySelector('ul.projects-list'),
// };
// const categoriesList = [...refs.filterBtns].map(btn => btn.dataset.category);
// let filteredCategories = ['All'];

// refs.filterBtnsList.addEventListener('click', onFilterBtnsListClick);
// refs.filterBtnsList.addEventListener('mousedown', event =>
//   event.preventDefault()
// );

// function onFilterBtnsListClick(event) {
//   if (!event.target.classList.contains('button')) {
//     return;
//   }

//   const button = event.target;
//   const category = button.dataset.category;

//   const idx = filteredCategories.indexOf(category);
//   if (idx === -1) {
//     if (category === 'All') {
//       filteredCategories = [...categoriesList];
//       refs.filterBtns.forEach(btn => btn.classList.remove('is-choosed'));
//       refs.allFilterBtn.classList.add('is-choosed');
//     } else {
//       if (filteredCategories.includes('All')) {
//         filteredCategories = [];
//         refs.allFilterBtn.classList.remove('is-choosed');
//       }

//       filteredCategories.push(category);
//       button.classList.add('is-choosed');

//       if (filteredCategories.length === categoriesList.length - 1) {
//         filteredCategories.push('All');
//         refs.filterBtns.forEach(btn => btn.classList.remove('is-choosed'));
//         refs.allFilterBtn.classList.add('is-choosed');
//       }
//     }
//   } else {
//     if (category === 'All') {
//       filteredCategories = [];
//       refs.filterBtns.forEach(btn => btn.classList.remove('is-choosed'));
//     } else {
//       if (filteredCategories.includes('All')) {
//         filteredCategories = [category];
//         refs.allFilterBtn.classList.remove('is-choosed');
//         button.classList.add('is-choosed');
//       } else {
//         filteredCategories.splice(idx, 1);
//         button.classList.remove('is-choosed');
//       }
//     }
//   }

//   console.log(filteredCategories);
//   filterProjectsByCategories(filteredCategories);
// }

// function filterProjectsByCategories(filteredCategories) {
//   if (filteredCategories.includes('All')) {
//     renderProjects(projects);
//     return;
//   }

//   const filteredProjects = projects.filter(project =>
//     filteredCategories.includes(project.category)
//   );
//   console.log(filteredCategories);
//   renderProjects(filteredProjects);
// }

// function renderProjects(projects) {
//   const markup = projects.map(createProjectItemMarkup).join('');
//   refs.projectsList.innerHTML = markup;
// }

// function createProjectItemMarkup({ category, name, link, images }) {
//   return `
// <li class="projects-list-item" data-category="${category}">
//   <a class="project-link link" href="${link}">
//     <div class="project-photo-wrapper">
//       <picture>
//         <!-- desktop -->
//         <source
//           srcset="
//             ${images.desktop.webp['1x']} 1x,
//             ${images.desktop.webp['2x']} 2x,
//             ${images.desktop.webp['3x']} 3x
//           "
//           media="(min-width: 1158px)"
//           type="image/webp"
//         />
//         <source
//           srcset="
//             ${images.desktop.jpeg['1x']} 1x,
//             ${images.desktop.jpeg['2x']} 2x,
//             ${images.desktop.jpeg['3x']} 3x
//           "
//           media="(min-width: 1158px)"
//           type="image/jpeg"
//         />
//         <!-- tablet -->
//         <source
//           srcset="
//             ${images.tablet.webp['1x']} 1x,
//             ${images.tablet.webp['2x']} 2x,
//             ${images.tablet.webp['3x']} 3x
//           "
//           media="(min-width: 768px)"
//           type="image/webp"
//         />
//         <source
//           srcset="
//             ${images.tablet.jpeg['1x']} 1x,
//             ${images.tablet.jpeg['2x']} 2x,
//             ${images.tablet.jpeg['3x']} 3x
//           "
//           media="(min-width: 768px)"
//           type="image/jpeg"
//         />
//         <!-- mobile -->
//         <source
//           srcset="
//             ${images.mobile.webp['1x']} 1x,
//             ${images.mobile.webp['2x']} 2x,
//             ${images.mobile.webp['3x']} 3x
//           "
//           media="(max-width: 767px)"
//           type="image/webp"
//         />
//         <source
//           srcset="
//             ${images.mobile.jpeg['1x']} 1x,
//             ${images.mobile.jpeg['2x']} 2x,
//             ${images.mobile.jpeg['3x']} 3x
//           "
//           media="(max-width: 767px)"
//           type="image/jpeg"
//         />
//         <img src="${images.defaultImg}" alt="${images.alt}" />
//       </picture>
//       <p class="overlay">${images.overlay}</p>
//     </div>
//     <div class="project-data">
//       <h2 class="project-name">${name}</h2>
//       <p class="project-category">${category}</p>
//     </div>
//   </a>
// </li>
//   `;
// }
