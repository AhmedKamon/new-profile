import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kamon Ahmed', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kamon Ahmed',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Gents Parlour',
    info: `Welcome to MERN website named GENT'S PARLOUR. A whole new world to gents. Web-site features Admin or Regular user: different options for different user protected: you have to submit your mobile number and address to place an order _responsive: responsive for mobile users Transition-Effect: transition effect on hover in service section Dynamic: Services and reviews are dynamic`,
    info2: '',
    url: 'https://e-seloon.web.app/',
    repo: 'https://github.com/AhmedKamon/Gent-s-Parlour', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Dev Town',
    info: `Learn more about your favourite Developer Create a Team with Pro developers Add developer in cart Add or Remove developer from cart price will be adjusted Created with React Redux

    Used Technologies: Bootstrap, React.js, React-Redux, VS-CODE, react-router-dom.`,
    info2: '',
    url: 'https://elegant-raman-ce9abf.netlify.app/',
    repo: 'https://github.com/AhmedKamon/Dev-town.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Mobile Shopping Cart',
    info: 'This days e-commerce websites are has become  part of our life. Cart option is another important part odf e-commerce websites. This project represent cart option of e-commerce websites. Add or remove items in cart. Price and quantity will be adjusted automatically on add or remove.I used context API and Reducer instead of Redux for state management.',
    info2: '',
    url: 'https://relaxed-chandrasekhar-a28f45.netlify.app/',
    repo: 'https://github.com/AhmedKamon/Mobile-Shopping-Cart', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'https://www.linkedin.com/in/kamon-ahmed/',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kamon-ahmed/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/AhmedKamon?tab=repositories',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
