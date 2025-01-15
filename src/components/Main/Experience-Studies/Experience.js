import './Experience.css'

export const Experience = () => {
  const generalHTML = document.querySelector('main')
  const nav = document.createElement('nav')

  const sectionExperience = document.createElement('section')
  const divExperience = document.createElement('div')
  const experienceTitle = document.createElement('h2')
  const experienceP = document.createElement('p')

  const sectionStudies = document.createElement('section')
  const divStudies = document.createElement('div')
  const studiesTitle = document.createElement('h2')
  const studiesP = document.createElement('p')

  sectionExperience.className = 'expi'
  experienceTitle.className = 'expirience'
  experienceTitle.textContent = 'Experience'
  experienceP.className = 'ExpiP'
  experienceP.innerHTML =
    'Experience 1 <br> Description of the functions you performed in your position. <br> <br> Experience 2 <br> Description of the functions you performed in your position. <br> <br> Experience 3 <br> Description of the functions you performed in your position. <br>'
  sectionExperience.style.display = 'block'

  sectionStudies.className = 'stud'
  studiesTitle.className = 'studies'
  studiesP.className = 'StudP'
  studiesP.innerHTML =
    'Title 1 <br> Description of studies or training completed. <br><br> Title 2 <br> Description of studies or training completed. <br><br> Title 3 <br> Description of studies or training completed. <br>'
  studiesTitle.textContent = 'Studies'
  sectionStudies.style.display = 'none'

  generalHTML.append(nav)
  generalHTML.append(sectionExperience, sectionStudies)
  nav.append(experienceTitle, studiesTitle)

  sectionExperience.append(divExperience)
  divExperience.append(experienceP)

  sectionStudies.append(divStudies)
  divStudies.append(studiesP)

  experienceTitle.addEventListener('click', () => {
    sectionExperience.style.display = 'block'
    sectionStudies.style.display = 'none'
  })

  studiesTitle.addEventListener('click', () => {
    sectionExperience.style.display = 'none'
    sectionStudies.style.display = 'block'
  })
}
