import './Projects.css'
import projectImage1 from './assets/project1.png'
import projectImage2 from './assets/project2.png'
import projectImage3 from './assets/project3.png'
import projectImage4 from './assets/project4.png'

export const Projects = () => {
  const projectsHTML = document.querySelector('main')
  const sectionProjects = document.createElement('section')
  const projectTitle = document.createElement('h2')
  const subtitle = document.createElement('h4')
  const divProjects = document.createElement('div')

  sectionProjects.className = 'Projects'
  projectTitle.textContent = 'My Projects'
  subtitle.textContent = 'Some things I built so far'
  divProjects.className = 'divProjects'

  const projects = [
    {
      title: 'App Experiences',
      description:
        'A travel app that simplifies planning, bookings, and alerts for a hassle-free experience.',
      image: projectImage1,
      url: '#'
    },
    {
      title: 'Web Site',
      description:
        'A website for ice cream offering unique flavors and fast home delivery.',
      image: projectImage2,
      url: '#'
    },
    {
      title: 'Weayher App',
      description:
        'An app for weather providing accurate forecasts and real-time updates.',
      image: projectImage3,
      url: '#'
    },
    {
      title: 'App Experience',
      description:
        'Una app de viajes que simplifica la planificación y reservas para una experiencia sin complicaciones.',
      image: projectImage4,
      url: '#'
    }
  ]

  projects.forEach((project) => {
    const projectCard = document.createElement('div')
    projectCard.className = 'project-card'

    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-image" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <button onclick="window.open('${project.url}', '_blank')" class="project-button">View App</button>
    `

    divProjects.appendChild(projectCard)
  })
  sectionProjects.append(projectTitle, subtitle, divProjects)
  projectsHTML.appendChild(sectionProjects)
}
