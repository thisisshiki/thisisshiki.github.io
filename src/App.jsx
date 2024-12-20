import React, { useState, useEffect } from 'react'
import { ArrowUp, Download, Github, Linkedin, Mail, Menu, Moon, Sun, X } from 'lucide-react'
import {skills, projects} from './data'
import Button from './Button';
import importAll from './importAll';
const Card = React.lazy(() => import('./components/Card'));
const Badge = React.lazy(() => import('./components/Badge'));
const CardContent = React.lazy(() => import('./components/CardContent'));
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|gif)$/));

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark')
  })

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`min-h-screen bg-background text-foreground relative ${isDarkMode ? 'dark' : ''}`}>
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_100%_100%_at_0%_0%,#000_70%,transparent_100%)]" />
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <img className="h-8 w-8 rounded-full" src={images['logo.png']}  alt="Shiqi Wang" />
              <span className="hidden font-bold sm:inline-block" style={{ fontFamily: 'Pacifico, cursive' }}>thisisshiki</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#about">About</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#projects">Projects</a>
            </nav>
          </div>
          <div className="flex items-center">
            <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:text-accent-foreground h-10 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </button>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </Button>
          </div>
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-background md:hidden">
              <div className="fixed top-0 left-0 w-full p-4">
                <button className="mb-4" onClick={toggleMenu}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close Menu</span>
                </button>
                <nav className="flex flex-col space-y-4">
                  <a className="text-lg font-medium hover:text-primary" href="#about" onClick={toggleMenu}>About</a>
                  <a className="text-lg font-medium hover:text-primary" href="#projects" onClick={toggleMenu}>Projects</a>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
      <main className="flex-1">
        <section id="about" className="container mx-auto py-12 md:py-24 lg:py-20 px-4">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col items-center justify-center text-center lg:items-center lg:text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Shiqi Wang
              </h1>
              <p className="mt-4 max-w-[700px] text-lg text-muted-foreground sm:text-xl">
                Web Designer & Developer
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <a href="https://github.com/thisisshiki" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/shikiwang/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>
                <a href="mailto:contact@example.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                  </Button>
                </a>
                <a href="https://thisisshiki.hackerresume.io/9dd3a4a8-5dd5-4b63-81b5-05de9daacc8c" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="space-y-4 flex flex-col justify-center">
              <Card>
                <CardContent>
                  <h2 className="text-xl font-semibold mb-2">Skills</h2>
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-medium mb-1">Development</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.dev.map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Design</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.design.map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.languages.map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h2 className="text-xl font-semibold mb-2">Experience</h2>
                  <ul className="space-y-2">
                    <li>
                      <h3 className="font-medium">Master of Interaction Design Extension</h3>
                      <p className="text-sm text-muted-foreground">University of Technology Sydney | 2023 - 2024</p>
                    </li>
                    <li>
                      <h3 className="font-medium">System Administrator</h3>
                      <p className="text-sm text-muted-foreground">Kyndryl | 2019 - 2023</p>
                    </li>
                    <li>
                      <h3 className="font-medium">System Administrator</h3>
                      <p className="text-sm text-muted-foreground">IBM | 2015 - 2019</p>
                    </li>
                    <li>
                      <h3 className="font-medium">Bachelors of Arts Japanese Language </h3>
                      <p className="text-sm text-muted-foreground">Zhongkai University of Agriculture and Engineering | 2011 - 2015</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="projects" className="container mx-auto py-12 md:py-24 lg:py-20 px-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
          <div className="flex justify-center items-center">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Card key={project.id}>
                  <CardContent>
                                        <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <div className="relative w-full pt-[66.67%]">
                        <img
                          src={project.image}
                          srcSet={`${project.image} 300w, ${project.imageSmall} 200w`}
                          sizes="(max-width: 768px) 150px, 300px"
                          loading="lazy"
                          alt={project.title}
                          className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
                        />
                      </div>
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                    </a>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t w-full box-border">
        <div className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} thisisshiki All rights reserved.
          </p>
        </div>
      </footer>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-primary text-primary-foreground rounded-full p-2 shadow-md transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}
