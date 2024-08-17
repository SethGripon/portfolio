import { FaGithub, FaLinkedin, FaFacebook, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaReact, FaInstagram } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFlask } from "react-icons/si";

import allDayMovers from "../assets/projects/all-day-movers.jpg"
import toDoListApp from "../assets/projects/todo-list-app.png"
import periodicTable from "../assets/projects/periodic-table-elements.jpg"
import kuriSuri from "../assets/projects/kurosuri.jpg"
import pizzaSystem from "../assets/projects/pizza-ordering-system.jpg"

const mediaIcons = [FaLinkedin, FaGithub, FaFacebook, FaInstagram]
const skillIcons = [FaHtml5, FaCss3Alt, IoLogoJavascript, FaPython, FaGitAlt, FaReact, RiTailwindCssFill, SiFlask]

export const navbarlist = [
  {
    id: 1,
    path: 'home',
    name: 'Home',
    offset: 0
  },
  {
    id: 2,
    path: 'about',
    name: 'About',
    offset: -50
  },
  {
    id: 3,
    path: 'project',
    name: 'Projects',
    offset: -100
  },
  {
    id: 4,
    path: 'contact',
    name: 'Contact',
    offset: 0
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

export const contactLinks = [
  {
    id: 1,
    name: 'LinkedIn',
    URL: 'https://www.linkedin.com/in/seth-arvin-gripon/',
    icon: mediaIcons[0]
  },
  {
    id: 3,
    name: 'Facebook',
    URL: 'https://www.facebook.com/griponseth',
    icon: mediaIcons[2]
  },
  {
    id: 3,
    name: 'Instagram',
    URL: 'https://www.instagram.com/_sethings',
    icon: mediaIcons[3]
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

export const projectList = [
  {
    id: 1,
    name: 'All Days Movers',
    imgURL: allDayMovers,
    lngList: ['React', 'JavaScript', 'Tailwind']
  },
  {
    id: 2,
    name: 'Todo List App',
    imgURL: toDoListApp,
    lngList: ['React', 'JavaScript', 'Tailwind']
  },
  {
    id: 3,
    name: 'Periodic Table of Elements',
    imgURL: periodicTable,
    lngList: ['React', 'JavaScript', 'Tailwind', 'API']
  },
  {
    id: 4,
    name: 'KuroSuri',
    imgURL: kuriSuri,
    lngList: ['Python', 'Machine Learning', 'Tkinter']
  },
  {
    id: 5,
    name: 'Pizza Ordering System',
    imgURL: pizzaSystem,
    lngList: ['Python', 'SQLite3', 'CustomTkinter']
  },
]