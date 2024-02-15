'use strict';

// My projects data
const ecommerce = {
  name: 'ecommerce',
  title: 'Ecommerce Website',
  type: 'Website',
  date: 'May 2022',
  description: [
    'I conceptualized, designed, and developed an eCommerce website with user accounts for both customers and merchants. Customers can browse, purchase, add items to the cart, and view their purchase history. Merchants have the capability to showcase and edit their products, as well as monitor their earnings.',
    'Additionally, I designed the flowchart and user interfaces for the website, ensuring a seamless and intuitive user experience. For the database structure, I created an Entity-Relationship Diagram (ERD) and implemented it using MySQL. Finally, I rigorously implemented and tested each backend module using Flask.',
  ],
  shortDescription: '',
  bullets: [
    'Planned, designed and built the webpage.',
    'Resulting in a responsive design achieved through a desktop-first development approach.',
    'Debugged and optimized the webpage according to accessibility, image dimensions.',
    'Verified that the website functions seamlessly across all major browsers.',
  ],
  image: 'ecommerce.png',
  tools: ['HTML', 'CSS', 'JavaScript', 'Flask', 'SQL', 'MySQL', 'GIT'],
  liveLink: 'https://github.com/ahmedtayseer303/Ecommerce_website/tree/main/website-demo-images',
  codeLink: 'https://github.com/ahmedtayseer303/Ecommerce_website',
};
const omnifood = {
  name: 'omnifood',
  title: 'Omnifood Webpage',
  type: 'Responsive webpage',
  date: 'Nov 2023',
  description: [
    // First one is a longer short description with
    'I conceptualized, designed, and developed a marketing page for a company specializing in healthy diets. The page features sections showcasing details such as an overview, testimonials, pricing, and a signup form.',
    'To begin, I meticulously planned, designed, and built the webpage, ensuring a cohesive and visually appealing layout. I prioritized responsiveness by adopting a desktop-first development approach, making the webpage accessible across various devices.',
    'Additionally, I meticulously debugged and optimized the webpage, addressing issues related to accessibility and image dimensions to enhance user experience. Finally, I conducted thorough testing to ensure the website functions seamlessly across all major browsers, guaranteeing maximum reach and usability',
  ],
  shortDescription:
    'Simulation for a marketing page for a company providing healthy diets.',
  bullets: [
    'Planned, designed and built the webpage.',
    'Resulting in a responsive design achieved through a desktop-first development approach.',
    'Debugged and optimized the webpage according to accessibility, image dimensions.',
    'Verified that the website functions seamlessly across all major browsers.',
  ],
  image: 'omnifood.jpg',
  tools: ['HTML', 'CSS', 'JavaScript', 'GIT'],
  liveLink: 'https://omnifood-tayseer.netlify.app/',
  codeLink: 'https://github.com/ahmedtayseer303/Omnifood-Project',
};

const mapty = {
  name: 'mapty',
  title: 'Mapty Application',
  type: 'JavaScript application',
  date: 'Dec 2023',
  description: [
    "An application for logging workouts, allowing users to track their exercises and visualize them on a map. The app stores workout data locally for each user in the browser's local storage.",
    "To start, I carefully planned the project by outlining user stories, defining features, and creating a flowchart to guide development. I then implemented the application's architecture using Object-Oriented Programming (OOP) principles to ensure scalability and maintainability.",
    'For mapping functionality, I integrated a third-party package to provide map visualization features, enhancing the user experience and adding value to the application.',
  ],
  shortDescription:
    'Log your workouts all in one place and trace them on the map.',
  bullets: [
    'Planned the project by making user stories, features, & flowchart.',
    'Implemented the architecture using OOP.',
    'Used map as 3rd party package.',
  ],
  image: 'mapty.jpg',
  tools: ['HTML', 'CSS', 'JavaScript', 'NPM', 'OOP', '3rd party (map)'],
  liveLink: 'https://matpy-tayseer.netlify.app/',
  codeLink: 'https://github.com/ahmedtayseer303/Matpy-Project',
};

const forkify = {
  name: 'forkify',
  title: 'Forkify Application',
  type: 'JavaScript application',
  date: 'Jan 2024',
  description: [
    'A recipe application that allows users to search for recipes, bookmark their favorites, and even upload their own recipes while ensuring all their data is securely stored.',
    'To begin, I meticulously planned the project by defining user stories, outlining features, and creating a flowchart to guide development. The application was implemented using the Model-View-Controller (MVC) architecture, employing modules, classes, and the Publisher-Subscriber Pattern to organize and manage the codebase effectively.',
    "For data retrieval, I integrated an online API to fetch the necessary recipe information. Additionally, I utilized the Parcel bundler to transpile, polyfill, and eliminate dead code, optimizing the application's performance and ensuring compatibility across different environments.",
  ],
  shortDescription: 'Recipe application with custom recipe uploads.',
  bullets: [
    'Planned the project by making user stories, features & flowchart.',
    'Implemented with MVC architecture using modules, classes, and Publisher Subscriber Pattern.',
    'Fetched needed data from online API.',
    'Used Parcel bundler for transpiling, polyfilling and dead code.',
  ],
  image: 'forkify.jpg',
  tools: ['HTML', 'CSS', 'JavaScript', 'NPM', 'MVC', 'OOP', 'APIs', 'Bundler'],
  liveLink: 'https://forkify-tayseer.netlify.app/',
  codeLink: 'https://github.com/ahmedtayseer303/forkify-project',
};
const projects = { forkify, mapty, omnifood, ecommerce };

//////////////////////////////////////////////////
// Fill portfolio from data
const projectsContainer = document.querySelector('[data-projects-container]');
const generateProjectMarkup = function (project) {
  return `
    <li
      class="project-item active"
      data-filter-item
      data-category="${project.type}"
    >
      <a href="${project.liveLink}" target="_blank">
        <figure class="project-img">
          <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>

          <img
            src="./assets/images/${project.image}"
            alt="finance"
            loading="lazy"
          />
        </figure>

        <h3 class="project-title">${project.title}</h3>

        <p class="project-category">${project.type}</p>
      </a>

      <button class="project-details-btn" data-project-name="${project.name}">
        <ion-icon name="list-outline"></ion-icon>
      </button>
    </li>
  `;
};
projectsContainer.innerHTML = Object.values(projects)
  .map(prj => generateProjectMarkup(prj))
  .join('');

//////////////////////////////////////////////////
// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle('active');
};

// sidebar variables
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener('click', function () {
  elementToggleFunc(sidebar);
});

// // testimonials variables
// const testimonialsItem = document.querySelectorAll('[data-testimonials-item]');
// const modalContainer = document.querySelector('[data-modal-container]');
// const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
// const overlay = document.querySelector('[data-overlay]');

// // modal variable
// const modalImg = document.querySelector('[data-modal-img]');
// const modalTitle = document.querySelector('[data-modal-title]');
// const modalText = document.querySelector('[data-modal-text]');

// // modal toggle function
// const testimonialsModalFunc = function () {
//   modalContainer.classList.toggle('active');
//   overlay.classList.toggle('active');
// };

// // add click event to all modal items
// for (let i = 0; i < testimonialsItem.length; i++) {
//   testimonialsItem[i].addEventListener('click', function () {
//     modalImg.src = this.querySelector('[data-testimonials-avatar]').src;
//     modalImg.alt = this.querySelector('[data-testimonials-avatar]').alt;
//     modalTitle.innerHTML = this.querySelector(
//       '[data-testimonials-title]'
//     ).innerHTML;
//     modalText.innerHTML = this.querySelector(
//       '[data-testimonials-text]'
//     ).innerHTML;

//     testimonialsModalFunc();
//   });
// }

// // add click event to modal close button
// modalCloseBtn.addEventListener('click', testimonialsModalFunc);
// overlay.addEventListener('click', testimonialsModalFunc);

// custom select variables
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-selecct-value]');
const filterBtn = document.querySelectorAll('[data-filter-btn]');

select.addEventListener('click', function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener('click', function () {
    // let selectedValue = this.innerText.toLowerCase();
    let selectedValue = this.innerText;
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll('[data-filter-item]');

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === 'All') {
      filterItems[i].classList.add('active');
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add('active');
    } else {
      filterItems[i].classList.remove('active');
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener('click', function () {
    // let selectedValue = this.innerText.toLowerCase();
    let selectedValue = this.innerText;
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove('active');
    this.classList.add('active');
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener('input', function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute('disabled');
    } else {
      formBtn.setAttribute('disabled', '');
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener('click', function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add('active');
        navigationLinks[i].classList.add('active');
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove('active');
        navigationLinks[i].classList.remove('active');
      }
    }
  });
}
/////////////////////////////////////
// Open project modal
const overlayProjects = document.querySelector('.overlay.my');
const modalProjects = document.querySelector('.my-modal');

const modalProjectsCloseBtn = modalProjects.querySelector(
  '[data-modal-close-btn]'
);

// modal data to be filled
const projectName = modalProjects.querySelector('.article-title');
const projectImg = modalProjects.querySelector('img');
const projectDate = modalProjects.querySelector('time');
const projectDescription = modalProjects.querySelector('.project-description');
const projecttools = modalProjects.querySelector('.tools');
const projectLiveLink = modalProjects.querySelector('.link-fill');
const projectCodeLink = modalProjects.querySelector('.link-out');

// modal toggle function
const projectsModalFunc = function () {
  modalProjects.classList.toggle('active');
  overlayProjects.classList.toggle('active');
};

modalProjectsCloseBtn.addEventListener('click', projectsModalFunc);
overlayProjects.addEventListener('click', projectsModalFunc);

// listen event for open project modal
projectsContainer.addEventListener('click', function (e) {
  const btn = e.target.closest('[data-project-name]');
  if (!btn) return;
  const project = projects[btn.dataset.projectName];
  projectName.innerHTML = project.title;
  projectImg.src = `./assets/images/${project.image}`;
  projectDate.innerHTML = project.date;
  projectDescription.innerHTML = project.description
    .map(des => `<p>${des}</p>`)
    .join('');
  projecttools.innerHTML = project.tools
    .map(tool => `<div class="tool">${tool}</div>`)
    .join('');
  projectLiveLink.href = project.liveLink;
  projectCodeLink.href = project.codeLink;

  // open modal
  projectsModalFunc();
});
/////////////////////////////////////
// Contact form submition
const formMessage = form.querySelector('.form-message');
const formDate = document.querySelector('[data-form-input-date]');

const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
};

const scriptURL =
  'https://script.google.com/macros/s/AKfycbycrbph_L7syUO-kc4VqT9wpb2TRVlPMolDpBzvXMzZoAdDdK-1up00IToFw4N883iVfQ/exec';

form.addEventListener('submit', e => {
  e.preventDefault();

  // Make date input
  formDate.value = new Intl.DateTimeFormat('en-US', options).format(new Date());

  // Show message for the process
  formMessage.style.display = 'block';
  formMessage.innerHTML = 'Sending the message. Please wait...';

  // Disaple btn after sending
  formBtn.setAttribute('disabled', '');

  // Send message
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      formMessage.innerHTML = '✔ Thank you for your message!';
    })
    .catch(error => {
      formMessage.innerHTML =
        // "🔴 An error happend. if it's repeated then your message was sent.";
        '✔ Thank you for your message!';
    })
    .finally(() => {
      form.reset();
      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 5000);
    });
});
/////////////////////////////////////
// for development
// navigationLinks.forEach(btn => {
//   if (btn.innerText.toLowerCase() === 'contact') btn.click();
// });
