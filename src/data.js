import proj1 from './images/proj1.png'
import proj2 from './images/proj2.png'
import proj3 from './images/proj3.png'
import proj4 from './images/proj4.png'
import proj5 from './images/proj5.png'
import proj6 from './images/proj6.png'

export const skills = {
  dev: ['HTML', 'CSS','Tailwind CSS', 'JavaScript', 'React','Node.js', 'Webpack','Git', 'Linux Shell','Python', 'SQL'],
  design: ['Figma', 'Procreate', 'Photoshop', 'Clip Studio Paint'],
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
    link: "https://thisisshiki.github.io/odin-todo-list/"
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
    link: "https://thisisshiki.github.io/etch-a-sketch/"
  },
  {
    id: 5,
    title: "Weather App Website",
    description: "A Weather Forecast Website using Web API",
    image: proj5, 
    technologies: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    link: "https://thisisshiki.github.io/odin-weather-app/"
  },
  // {
  //   id: 5,
  //   title: "Book Library",
  //   description: "A fake book library web application",
  //   image: proj5, 
  //   technologies: ["JavaScript", "HTML", "CSS"],
  //   link: "https://thisisshiki.github.io/odin-library/"
  // },
  {
    id: 6,
    title: "Tic Tac Toe Game",
    description: "A 2-Player Tic Tac Toe Game Played in Browser",
    image: proj6, 
    technologies: ["JavaScript", "HTML", "CSS", "Game"],
    link: "https://thisisshiki.github.io/odin-tic-tac-toe/"
  }
]
