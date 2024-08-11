import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";

const mediaIcons = [FaLinkedin, FaGithub, FaFacebook]

export const navbarlist = [
  {
    id: 1,
    path: '/',
    name: 'Home'
  },
  {
    id: 2,
    path: '/about',
    name: 'About'
  },
  {
    id: 3,
    path: '/projects',
    name: 'Projects'
  },
  {
    id: 4,
    path: '/contact',
    name: 'Contact'
  }
]

export const mediaLinks = [
  {
    id: 1,
    name: 'LinkedIn',
    URL: 'https://www.linkedin.com/in/seth-arvin-gripon/',
    icon: mediaIcons[0]
  },
  {
    id: 2,
    name: 'Github',
    URL: 'https://github.com/SethGripon',
    icon: mediaIcons[1]
  },
  {
    id: 3,
    name: 'Facebook',
    URL: 'https://www.facebook.com/griponseth',
    icon: mediaIcons[2]
  }
]