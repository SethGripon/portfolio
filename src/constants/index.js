import { FaGithub, FaLinkedin, FaFacebook, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFlask } from "react-icons/si";

const mediaIcons = [FaLinkedin, FaGithub, FaFacebook]
const skillIcons = [FaHtml5, FaCss3Alt, IoLogoJavascript, FaPython, FaGitAlt, FaReact, RiTailwindCssFill, SiFlask]

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
    name: 'Github',
    URL: 'https://github.com/SethGripon',
    icon: mediaIcons[1]
  },
  {
    id: 2,
    name: 'LinkedIn',
    URL: 'https://www.linkedin.com/in/seth-arvin-gripon/',
    icon: mediaIcons[0]
  },
  {
    id: 3,
    name: 'Facebook',
    URL: 'https://www.facebook.com/griponseth',
    icon: mediaIcons[2]
  }
]

export const skillLogo = [
  {
    id: 1,
    icon: skillIcons[0],
    name: 'HTML',
    hover: false
  },
  {
    id: 2,
    icon: skillIcons[1],
    name: 'CSS',
    hover: false
  },
  {
    id: 3,
    icon: skillIcons[2],
    name: 'Javascript',
    hover: false
  },
  {
    id: 4,
    icon: skillIcons[3],
    name: 'Python',
    hover: false
  },
  {
    id: 5,
    icon: skillIcons[4],
    name: 'Git',
    hover: false
  },
  {
    id: 6,
    icon: skillIcons[5],
    name: 'ReactJS',
    hover: false
  },
  {
    id: 7,
    icon: skillIcons[6],
    name: 'TailwindCSS',
    hover: false
  },
  {
    id: 8,
    icon: skillIcons[7],
    name: 'Flask',
    hover: false
  }
]