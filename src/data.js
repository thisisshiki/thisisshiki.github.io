import proj1 from './images/proj1.png'
import proj2 from './images/proj2.png'
import proj3 from './images/proj3.png'
import proj4 from './images/proj4.png'
import proj5 from './images/proj5.png'
import proj6 from './images/proj6.png'
import proj7 from './images/proj7.png'
import proj8 from './images/proj8.png'
import proj9 from './images/proj9.png'

export const skills = {
  dev: ['HTML', 'CSS','Tailwind CSS', 'JavaScript', 'TypeScript', 'React','Node.js' ,'Jest','Webpack', 'Vite', 'Git', 'Linux Shell','Python','SQL'],
  design: ['UX', 'UI', 'Illustration', 'Figma', 'Procreate', 'Photoshop', 'Clip Studio Paint'],
  languages: ['English', '中文', '日本語']
}

export const projects = [
  {
    id: 1,
    title: "Journal Mate Mobile App",
    description: "AI Journal Mobile App Prototype",
    image: proj1,
    technologies: ["UX", "UI", "Figma", "User Research"],
    link: "https://www.figma.com/deck/3cn7qNdAbughgFlWG4Cyhf/Untitled?node-id=1-43&t=8v1kDWjdDj7Ilc6j-1"
  },
  {
    id: 2, 
    title: "My Todo Website",
    description: "A To-do List Web Application Using Local Storage",
    image: proj2,
    technologies: ["JavaScript","HTML", "CSS", "Webpack"],
    link: "https://github.com/thisisshiki/odin-todo-list"
  },
  {
    id: 3,
    title: "Herts-UTS Car Rental Website",
    description: "E-commerce Website with Shopping Cart and Order",
    image: proj3, 
    technologies: ["JavaScript", "HTML", "CSS", "PHP", "MySQL"],
    link: "https://youtu.be/-hyL--d6r9U"
  },
  {
    id: 4,
    title: "Etch-A-Sketch Game",
    description: "A Browser Version of A Sketchpad Etch-A-Sketch",
    image: proj4, 
    technologies: ["JavaScript", "HTML", "CSS", "Game"],
    link: "https://github.com/thisisshiki/odin-etch-a-sketch"
  },
  {
    id: 5,
    title: "Weather App Website",
    description: "A Weather Forecast Website using Web API",
    image: proj5, 
    technologies: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    link: "https://thisisshiki.github.io/odin-weather-app/"
  },
  {
    id: 6,
    title: "Zodiac Card Memory Game",
    description: "A Card Memory Game Played in Browser",
    image: proj6, 
    technologies: ["React", "TypeScript", "HTML", "CSS", "Game"],
    link: "https://github.com/thisisshiki/odin-memory-card"
  },
  {
    id: 7,
    title: "Book Library",
    description: "A Fake Book Library Web Application",
    image: proj7, 
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/thisisshiki/odin-library"
  },
  {
    id: 8,
    title: "Calculator",
    description: "A JavaScript Calculator in Browser",
    image: proj8, 
    technologies: ["JavaScript", "HTML", "CSS", "Calculator"],
    link: "https://github.com/thisisshiki/odin-calculator"
  },
  {
    id: 9,
    title: "Tic Tac Toe Game",
    description: "A 2-Player Tic Tac Toe Game Played in Browser",
    image: proj9, 
    technologies: ["JavaScript", "HTML", "CSS", "Game"],
    link: "https://github.com/thisisshiki/odin-tic-tac-toe"
  },
]
