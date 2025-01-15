import './Skills.css'
import logo1 from './assets/1.png'
import logo2 from './assets/2.png'
import logo3 from './assets/3.png'
import logo4 from './assets/4.png'
import logo5 from './assets/5.png'
import logo6 from './assets/6.png'
import logo7 from './assets/7.png'

export const Skills = () => {
  const skillsHTML = document.querySelector('main')
  const sectionSkills = document.createElement('section')
  const skillsTitle = document.createElement('h2')
  const divSkills = document.createElement('div')

  sectionSkills.className = 'skills'
  skillsTitle.textContent = 'My Skills'

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7]

  sectionSkills.append(skillsTitle)
  sectionSkills.append(divSkills)

  logos.forEach((logo) => {
    const img = document.createElement('img')
    img.src = logo
    img.alt = `Logo de ${logo.split('-')[0]}`
    divSkills.append(img)
  })

  skillsHTML.append(sectionSkills)
}
