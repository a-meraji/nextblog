import {
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa'

export const socials = [
  { name: 'linkedin', url: 'https://www.linkedin.com/in/m-amin-meraji/', icon: FaLinkedin },
  { name: 'github', url: 'https://github.com/a-meraji', icon: FaGithub },
  { name: 'telegram', url: 'https://t.me/amin_mrj', icon: FaTelegram },
  { name: 'twitter', url: 'https://twitter.com/mamad_coder', icon: FaTwitter },
  // { name: 'instagram', url: '/', icon: FaInstagram },
]

export const projects = [
  {
    title: 'nextommerce',
    description: 'an ecommerce web-app built with Nextjs + TailwindCSS + mongoDB',
    url: 'https://nextommerce.vercel.app/',
    github: 'https://github.com/a-meraji/nextommerce',
    image: '/projects/nextommerce.png',
    features: [
      'JWT authentication',
      ' Bilingual(english/فارسی)',
      ' Dark & light theme',
      'Admin Pannel',
      'CRUD admins, users, products and orders',
      'Admin with two level access control(owner & admin)',
      'Filter and sort search results',
    ],
  },
  {
    title: 'Quiz App',
    description: 'A Nextjs Quiz Web-App built with Redux-Saga + Redux toolkit + react-redux.',
    url: 'https://quiz-redux.vercel.app/',
    github: 'https://github.com/a-meraji/quiz',
    image: '/projects/quiz.png',
    features: [
      'Asynchronous state management in Redux-Saga',
      'Middlewares and side effects in Redux-Saga',
      'Redux-Saga multiple watchers',
      'Multiple sotre and reducers with redux-toolkit',
      'Create & read quizes (give & take exam)',
      'Calculate score of the taken exam',
    ],
  },
]

export const skills = [
  { name: 'ES6' },
  { name: 'CSS3' },
  { name: 'Sass' },
  { name: 'Figma' },
  { name: 'HTML5' },
  { name: 'Jquery' },
  { name: 'NextJS' },
  { name: 'NodeJS' },
  { name: 'ReactJS' },
  { name: 'Express' },
  { name: 'MongoDB' },
  { name: 'Webpack' },
  { name: 'Mongoose' },
  { name: 'Redux' },
  { name: 'Redux-Sage' },
  { name: 'react-redux' },
  { name: 'Redux Toolkit' },
  { name: 'Bootstrap' },
  { name: 'TailwindCSS' },
  { name: 'StyledComponents' },
]
