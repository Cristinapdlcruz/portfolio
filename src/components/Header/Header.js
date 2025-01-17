import './Header.css'
import imgMenu from './optionmenu.png'

export const Header = () => {
  const headerHTML = document.querySelector('header')
  const name = document.createElement('h1')
  const divOptions = document.createElement('div')
  const ulHeader = document.createElement('ul')
  const contactDiv = document.createElement('div')
  const contactName = document.createElement('h6')

  const imgM = document.createElement('a')
  imgM.href = '#'
  imgM.innerHTML = ` <img src="${imgMenu}" alt="Linkedin Icon">`
  imgM.className = 'iconMenu'

  divOptions.className = 'divH'
  name.textContent = 'Cristina A. Pérez'
  contactName.className = 'contactName'
  contactName.textContent = 'Contact'

  const menuHeader = [
    'Home',
    'About me',
    'Skills',
    'Experience/Studies',
    'Projects'
  ]
  menuHeader.forEach((item) => {
    const liHeader = document.createElement('li')
    liHeader.textContent = item
    ulHeader.append(liHeader)
  })

  headerHTML.append(name)
  headerHTML.append(divOptions)
  divOptions.append(ulHeader)
  headerHTML.append(contactDiv)
  contactDiv.appendChild(contactName)
  contactDiv.appendChild(imgM)
}
