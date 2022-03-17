import {
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa'

export const socials = [
  { name: 'linkedin', url: '/', icon: FaLinkedin },
  { name: 'github', url: 'https://github.com/a-meraji', icon: FaGithub },
  { name: 'telegram', url: 'https://t.me/amin_mrj', icon: FaTelegram },
  { name: 'whatsapp', url: '/', icon: FaWhatsapp },
  // { name: 'instagram', url: '/', icon: FaInstagram },
]

export const projects = [
  {
    title: 'nextommerce',
    description: 'an ecommerce web app built with Next.js',
    url: 'https://nextommerce.vercel.app/',
    github: 'https://github.com/a-meraji/nextommerce',
    image: '/projects/nextommerce.png',
    features: [
      'JWT authentication',
      ' TailwindCSS',
      ' Bilingual',
      ' Dark & light theme',
      'Admin Pannel (CRUD products and orders)',
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
  { name: 'Bootstrap' },
  { name: 'TailwindCSS' },
  { name: 'StyledComponents' },
]
