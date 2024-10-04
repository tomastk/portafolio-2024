'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react"

const GlassesSVG = ({
  className
}) => (
  <svg
    className={className}
    viewBox="0 0 100 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 15C15 9.47715 19.4772 5 25 5H35C40.5228 5 45 9.47715 45 15V25C45 30.5228 40.5228 35 35 35H25C19.4772 35 15 30.5228 15 25V15Z"
      stroke="currentColor"
      strokeWidth="2" />
    <path
      d="M55 15C55 9.47715 59.4772 5 65 5H75C80.5228 5 85 9.47715 85 15V25C85 30.5228 80.5228 35 75 35H65C59.4772 35 55 30.5228 55 25V15Z"
      stroke="currentColor"
      strokeWidth="2" />
    <path d="M45 20H55" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const MovingGlasses = () => {
  const [glasses, setGlasses] = useState([]);

  useEffect(() => {
    const createGlasses = () => {
      const newGlasses = [];
      for (let i = 0; i < 3; i++) {
        newGlasses.push({
          id: i,
          top: 25 + Math.random() * 50,
          left: Math.random() * 100,
          size: 30 + Math.random() * 20,
          speed: 15 + Math.random() * 10,
          direction: Math.random() > 0.5 ? 1 : -1,
        });
      }
      setGlasses(newGlasses);
    };

    createGlasses();
    const interval = setInterval(createGlasses, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {glasses.map((glass) => (
        <div
          key={glass.id}
          className="absolute transition-transform duration-[10000ms] ease-linear"
          style={{
            top: `${glass.top}%`,
            left: `${glass.left}%`,
            width: `${glass.size}px`,
            height: `${glass.size * 0.4}px`,
            transform: `translateX(${100 * glass.direction}vw)`,
          }}
        >
          <GlassesSVG className="w-full h-full text-red-600 opacity-50" />
        </div>
      ))}
    </div>
  );
};

const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div className="w-1/2 h-screen bg-white"></div>
    <div className="w-1/2 h-screen bg-black"></div>
    <div className="absolute">
      <GlassesSVG className="w-24 h-24 text-red-600 animate-pulse" />
    </div>
  </div>
)

export function PortfolioComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 50)

    return () => clearTimeout(timer);
  }, [])

  const projects = [
    {
      title: "Solar Wiki",
      description: "Solar Wiki es un proyecto que muestra información del sistema solar extrayendo información del sitio web de la NASA. Cuenta con información interesante de los planetas.",
      image: "https://i.imgur.com/1MT4AgR.png",
      technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "Framer Motion"],
      github: "https://github.com/tomastk/solar-wiki",
      demo: "https://solar-wiki.vercel.app/",
    },
    {
      title: "Seguridad Vial",
      description: "Este es un proyecto que recopila información sobre las diferentes leyes de tránsito de Argentina. Sirve para cualquier persona que se quiera sacar una licencia de conducir y quiere rendir el exámen teórico.",
      image: "https://i.imgur.com/vNNmEzB.png",
      technologies: ["HTMLL", "CSS", "JavaScript"],
      github: "https://github.com/tomastk/seguridad-vial-cau",
      demo: "https://tomastk.github.io/seguridad-vial-cau/index.html",
    },
    { title: "Shelty", 
      description: "Shelty será una plataforma web de adopción de animales. En la plataforma se podrá contactar a animales de refugios, publicar animales y buscar mediante inteligencia artifical. En desarrollo.",
      image: "https://i.imgur.com/xis2tku.png",
      technologies: ["Nextjs", "ReactJS", "SpringBoot", "MySql"],
      demo: "#",
      github: "https://github.com/tomastk/shelty"     
    }
  ]

  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "Java", "SpringBoot", "MongoDB", "Git", "Github", "SQL", "NextJs"
  ]

  const navItems = [
    { name: "Sobre mí", href: "#about" },
    { name: "Mis proyectos", href: "#projects" },
    { name: "Habilidades", href: "#skills" },
  ]

  if (isLoading) {
    return <Loader />;
  }

  return (
    (<div className="min-h-screen bg-black text-white">
      <MovingGlasses />
      {/* Header with Responsive Navbar */}
      <header
        className="fixed top-0 left-0 right-0 bg-black z-20 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-red-600">tomastk</h1>
            <div className="flex items-center">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-red-600 transition-colors duration-300">
                    {item.name}
                  </a>
                ))}
              </nav>
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 text-white hover:text-red-600 transition-colors duration-300"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-white hover:text-red-600 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-white transform -skew-y-6 origin-top-left z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 text-black">Desarrollador fullstack</h2>
          <h3
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 text-red-600">Java/Javascript</h3>
          <p className="text-lg md:text-xl mb-8 text-black max-w-2xl">
          Desarrollo soluciones web completas, eficientes y escalables, tanto en backend como frontend, personalizadas para resolver con precisión los desafíos únicos de cada proyecto.
          </p>
          <a
            href="#projects"
            className="bg-red-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold hover:bg-red-700 transition-colors duration-300">
            Mis Proyectos
          </a>
        </div>
      </section>
      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Sobre mí</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:w-1/3">
              <img
                src="https://tomastk.github.io/seguridad-vial-cau/img/integrantes/gonza.jpg"
                alt="Tomas TK"
                width={400}
                height={400}
                className="rounded-full shadow-lg" />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-4 text-gray-300">
              Mi nombre es Gonzalo Tomás Dos Santos, desarrollador web y backend con especialización en Java y Spring Boot. Cuento con más de cuatro años de experiencia en la creación de sitios web, desde landing pages hasta aplicaciones empresariales complejas. Actualmente, estoy cursando una Tecnicatura en Programación, lo que me permite seguir mejorando y actualizando mis habilidades.
              </p>
              <p className="text-lg mb-4 text-gray-300">
              Mi experiencia se centra en el desarrollo full-stack de soluciones web, abarcando todo tipo de proyectos: desde aplicaciones interactivas hasta plataformas de gestión a medida. Actualmente, trabajo como pasante en el departamento de informática de Aesa Misiones/Veolia, donde soy responsable del desarrollo de sistemas y aplicaciones de gestión.
              </p>
              <p className="text-lg mb-4 text-gray-300">
              Además de mi trabajo en desarrollo web, también llevo a cabo proyectos electrónicos y desarrollo aplicaciones en AppScript, lo que me permite abordar una amplia gama de desafíos tecnológicos.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-800 text-gray-300 text-xs font-semibold px-2.5 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex items-center text-gray-300 hover:text-red-600 transition-colors duration-300">
                      <Github className="w-5 h-5 mr-1" />
                      GitHub
                    </Link>
                    <Link
                      target="_blank"
                      href={project.demo}
                      className="flex items-center text-gray-300 hover:text-red-600 transition-colors duration-300">
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Demo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Mis habilidades</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-200 text-black rounded-full px-4 py-2 font-semibold transition-all duration-300 hover:bg-red-600 hover:text-white">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div
          className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2024 tomastk.</p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/tomastk"
              target="_blank"
              className="hover:text-red-600 transition-colors duration-300">
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/tomastk"
              target="_blank"
              className="hover:text-red-600 transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:gonzalotomasdossantos@gmail.com"
              className="hover:text-red-600 transition-colors duration-300">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center">
          <Link
            href="https://drive.google.com/file/d/1Rc6-ni07GxbfDpPCxXRMXK9Ev4IBO5I6/view?usp=sharing"
            target="_blank"
            className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors duration-300">
            Ver CV
          </Link>
        </div>
      </footer>

    </div>)
  );
}
