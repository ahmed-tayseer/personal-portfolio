'use strict';

// My Work data
const edigits = {
  name: 'eDigits',
  title: 'eDigits | NetSuite Technical Consultant',
  type: 'Work',
  date: 'December 2024 – Present',
  // description: [],
  shortDescription: '',
  bullets: [
    'Acquired comprehensive knowledge of SuiteScript and the NetSuite system within one month, enabling the completion of 12 solutions in the first two months.',
    'Delivered an average of one thoroughly tested, high-quality solution per day, achieving a 95% error-free success rate by adhering to best practices and quality standards.',
    'Collaborated with technical and functional teams to introduce innovative approaches, resulting in improved efficiency, faster delivery times, and enhanced project outcomes.',
  ],
  // image: '',
  tools: [
    'JavaScript',
    'SuiteScript',
    'OAuth 1.0',
    'NetSuite',
    'HTML',
    'CSS',
    'SQL',
  ],
  // liveLink: '',
  // codeLink: '',
};

// My projects data
const ecommerce = {
  name: 'ecommerce',
  title: 'Ecommerce Website',
  type: 'Flask app',
  date: 'May 2022',
  description: [
    'I conceptualized, designed, and developed an eCommerce website with user accounts for both customers and merchants. Customers can browse, purchase, add items to the cart, and view their purchase history. Merchants have the capability to showcase and edit their products, as well as monitor their earnings.',
    'Additionally, I designed the flowchart and user interfaces for the website, ensuring a seamless and intuitive user experience. For the database structure, I created an Entity-Relationship Diagram (ERD) and implemented it using MySQL. Finally, I rigorously implemented and tested each backend module using Flask.',
  ],
  shortDescription:
    'An ecommerce platform for managing product listings and customer orders.',
  bullets: [
    'Designed user flow, UI components, and database Entity Relationship Diagram (ERD).',
    'Developed and implemented a MySQL database for efficient data storage and retrieval.',
    'Built backend APIs using Flask, ensuring proper module integration.',
  ],
  image: 'ecommerce.png',
  tools: ['HTML', 'CSS', 'JavaScript', 'Flask', 'SQL', 'MySQL', 'GIT'],
  liveLink:
    'https://github.com/ahmedtayseer303/Ecommerce_website/tree/main/website-demo-images',
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
    'A responsive marketing webpage for a company offering healthy diet plans.',
  bullets: [
    'Planned, designed, and developed a responsive website following a desktop-first approach.',
    'Optimized webpage for accessibility, performance, and SEO by debugging layout issues and optimizing image dimensions.',
    'Ensured cross-browser compatibility and smooth functionality across major web browsers.',
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
    'A workout-tracking app that allows users to log activities and visualize them on an interactive map.',
  bullets: [
    'Designed user stories, features, and system flowchart for structured development.',
    'Implemented a modular and scalable architecture using Object-Oriented Programming (OOP).',
    'Integrated third-party mapping library for interactive location tracking.',
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
  shortDescription:
    'Created a recipe application allowing users to upload custom recipes.',
  bullets: [
    'Planned the project using user stories, feature analysis, and flowcharts.',
    'Built the app using modular architecture, classes, and object-oriented programming.',
    'Fetched recipe data from an external API.',
  ],
  image: 'forkify.jpg',
  tools: ['HTML', 'CSS', 'JavaScript', 'NPM', 'MVC', 'OOP', 'APIs', 'Bundler'],
  liveLink: 'https://forkify-tayseer.netlify.app/',
  codeLink: 'https://github.com/ahmedtayseer303/forkify-project',
};

const shop = {
  name: 'shop',
  title: 'Shop Website',
  type: 'Nodejs application',
  date: 'Mar 2024',
  description: [
    'Developed a comprehensive e-commerce platform designed for seamless order management and product uploads. Utilized MongoDB to design and implement a robust database structure, ensuring efficient data storage and retrieval.',
    'Implemented a wide range of features including user authentication, robust security measures against CSRF attacks, secure file uploads, data validation, and pagination for enhanced user experience.',
    'Integrated Stripe payment gateway to facilitate streamlined payment processing.',
  ],
  shortDescription:
    'A shop platform for managing product listings and customer orders.',
  bullets: [
    'Developed a shop website using the MVC architecture and template engines.',
    'Designed and implemented the database using MongoDB.',
    'Added features like authentication (sessions), CSRF attack prevention, file uploads, payment integration (Stripe), validation, and pagination.',
  ],
  image: 'shop.jpg',
  tools: [
    'NodeJs',
    'ExpressJs',
    'Session',
    'Stripe',
    'ejs',
    'HTML',
    'JavaScript',
    'NPM',
    'MVC',
  ],
  liveLink: 'https://shop-nodejs-website.onrender.com',
  codeLink: 'https://github.com/ahmedtayseer303/shop-nodejs-website',
};

const posts = {
  name: 'posts',
  title: 'Posts Application',
  type: 'Nodejs application',
  date: 'April 2024',
  description: [
    'Developed a versatile REST API application tailored for efficient management of user-generated content. Leveraged the REST architectural style to design and implement a scalable and robust backend system.',
    'Designed and implemented a MongoDB database schema to seamlessly store and retrieve user posts and associated data.',
    'Implemented a myriad of features including user authentication utilizing JSON Web Tokens (JWT), real-time communication through Web Sockets, secure file uploads, data validation, and pagination for enhanced performance.',
    'Seamlessly integrated the API with a React frontend application to provide users with a seamless and intuitive browsing experience.',
  ],
  shortDescription: "Built a REST API app for managing users' posts.",
  bullets: [
    'Implemented the app using REST API and Graphql',
    'Designed and implemented a MongoDB database.',
    'Added features like authentication using JWT, WebSockets, file uploads, validation, and pagination.',
    'Integrated the API and GraphQL queries/mutations with a React frontend.',
  ],
  image: 'posts.jpg',
  tools: [
    'NodeJs',
    'ExpressJs',
    'Web Sockets',
    'JWT',
    'HTML',
    'JavaScript',
    'NPM',
    'REST-APIs',
    'Graphql',
  ],
  liveLink: 'https://posts-tayseer.onrender.com',
  codeLink: 'https://github.com/ahmedtayseer303/posts-nodejs-REST-APIs',
};

const projects = { posts, shop, forkify, mapty, omnifood, ecommerce };

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
// fill Resume from data
const resumeWorkContainer = document.querySelector('[resume-work-container]');
const resumeProjectsContainer = document.querySelector(
  '[resume-projects-container]'
);
const generateResumeMarkup = function (project) {
  return `
    <li class="timeline-item">
      <h4 class="h4 timeline-item-title">${project.title}</h4>

      <span>${project.date}</span>
      <div class="timeline-container">
        <p class="timeline-text">
          ${project.shortDescription}
        </p>
        <ul class="timeline-text-list">
            ${project.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </li>
  `;
};

const resumeWork = { edigits };
// const resumeProjects = { posts, shop, forkify, ecommerce };
// const html = Object.values(resumeProjects)
const projectsHtml = Object.values(projects)
  .map(prj => generateResumeMarkup(prj))
  .join('');
const workHtml = Object.values(resumeWork)
  .map(prj => generateResumeMarkup(prj))
  .join('');
resumeProjectsContainer.insertAdjacentHTML('afterbegin', projectsHtml);
resumeWorkContainer.insertAdjacentHTML('afterbegin', workHtml);
// resumeProjectsContainer.innerHTML = Object.values(projects)
//   .map(prj => generateResumeMarkup(prj))
//   .join('');

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
//   if (btn.innerText.toLowerCase() === 'portfolio') btn.click();
// });
