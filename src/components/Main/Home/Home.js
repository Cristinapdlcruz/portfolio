import './Home.css'

export const Home = () => {
  const mainHTML = document.querySelector('main')
  const sectionHome = document.createElement('section')
  const divMain = document.createElement('div')
  const saludo = document.createElement('h3')
  const webD = document.createElement('h2')
  const idea = document.createElement('h3')
  const myPhoto = document.createElement('img')

  sectionHome.className = 'Home'
  divMain.className = 'welcome'
  saludo.className = 'saludo'
  saludo.textContent = 'Hello 👋🏻'
  webD.className = 'webH2'
  webD.innerHTML = "I'm a web <br> Developer"
  idea.className = 'ideaH3'
  idea.textContent = 'I build thing for web'
  myPhoto.className = 'photo'
  myPhoto.src = './src/components/Main/Home/me.PNG'
  myPhoto.alt = 'Foto de [Cristina A. Pérez]'

  mainHTML.append(sectionHome)
  sectionHome.append(divMain)
  divMain.append(saludo)
  divMain.append(webD)
  divMain.append(idea)
  sectionHome.append(myPhoto)
}
