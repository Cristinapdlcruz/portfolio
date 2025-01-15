import './Header.css'

export const Header = () => {
  const headerHTML = document.querySelector('header')
  const name = document.createElement('h1')
  const divOptions = document.createElement('div')
  const ulHeader = document.createElement('ul')
  const contactDiv = document.createElement('div')

  divOptions.className = 'divH'
  name.textContent = 'Cristina A. Pérez'
  contactDiv.textContent = 'Contact'

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
}
