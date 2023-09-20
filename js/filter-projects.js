//* using visually-hidden
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

//* using json-data
// import projects from '../data/projects.json' assert { type: 'json' };

// const refs = {
//   filterBtnsList: document.querySelector('ul.filter-list'),
//   projectsList: document.querySelector('ul.projects-list'),
// };
// refs.filterBtnsList.addEventListener('click', onFilterBtnsListClick);

// function onFilterBtnsListClick(event) {
//   if (!event.target.classList.contains('button')) {
//     return;
//   }

//   const category = event.target.dataset.category;
//   filterProjectsByCategory(category);
// }

// function filterProjectsByCategory(category) {
//   if (category === 'All') {
//     renderProjects(projects);
//     return;
//   }

//   const filteredProejcts = projects.filter(
//     project => project.category === category
//   );
//   renderProjects(filteredProejcts);
// }

// function renderProjects(projects) {
//   const markup = projects.map(createProjectItemMarkup).join('');
//   refs.projectsList.innerHTML = markup;
// }

// function createProjectItemMarkup({ category, name, link, images }) {
//   return `
//   <!--* template -->
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
