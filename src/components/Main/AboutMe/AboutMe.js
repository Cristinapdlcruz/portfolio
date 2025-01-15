import './AboutMe.css'

export const AboutMe = () => {
  const aboutHTML = document.querySelector('main')
  const sectionAboutMe = document.createElement('section')
  const AboutTitle = document.createElement('h2')
  const AboutP = document.createElement('p')

  sectionAboutMe.className = 'aboutMe'
  AboutTitle.textContent = 'About Me'
  AboutP.innerHTML =
    'As a web developer, I am responsible for designing and developing web pages. <br> My primary focus is to create responsive, User-friendly experiences that meet the needs of a diverse online audience.'

  aboutHTML.append(sectionAboutMe)
  sectionAboutMe.append(AboutTitle)
  sectionAboutMe.append(AboutP)
}
