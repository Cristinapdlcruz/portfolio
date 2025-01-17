import './Contact.css'
import planeSendIcon from './assets/planeSend.png'
import gitHubIcon from './assets/github.png'
import linkedInIcon from './assets/linkedin.png'

export const Contact = () => {
  const contactHTML = document.querySelector('main')
  const sectionContact = document.createElement('section')
  const divOne = document.createElement('div')
  const contactTitle = document.createElement('h4')
  const contactP = document.createElement('p')
  const optionsContainer = document.createElement('div')

  divOne.className = 'intro'
  optionsContainer.className = 'optionsInter'
  sectionContact.className = 'contactSect'
  contactTitle.innerHTML =
    contactTitle.innerHTML = `Let's discuss <br> on something <span class="highlight">cool</span> <br> together`

  contactP.textContent = "I'm interested in..."
  const options = [
    'Ecommerce Website',
    'Data Base',
    'Landing Page',
    'Blog Website',
    'App'
  ]

  options.forEach((option) => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = option
    buttonElement.classList.add('option-button')

    optionsContainer.appendChild(buttonElement)
    buttonElement.addEventListener('click', () => {
      document
        .querySelectorAll('.option-button')
        .forEach((btn) => btn.classList.remove('clicked'))
      buttonElement.classList.add('clicked')
    })
  })

  contactHTML.append(sectionContact)
  sectionContact.append(divOne)
  divOne.append(contactTitle)
  divOne.append(contactP)
  divOne.append(optionsContainer)

  const form = document.createElement('form')
  form.action = '/submit'
  form.method = 'POST'
  form.classList.add('contact-form')

  const nameInput = document.createElement('input')
  nameInput.placeholder = 'Your Name'
  nameInput.type = 'text'
  nameInput.classList.add('form-input')

  const emailInput = document.createElement('input')
  emailInput.placeholder = 'Your Email'
  emailInput.type = 'email'
  emailInput.classList.add('form-input')

  const messageTextarea = document.createElement('textarea')
  messageTextarea.placeholder = 'Your Message'
  messageTextarea.classList.add('form-textarea')

  const submitButton = document.createElement('button')
  submitButton.type = 'submit'
  submitButton.innerHTML = `Submit <img src="${planeSendIcon}" alt="Send Icon">`
  submitButton.classList.add('form-button')

  const imagesContainer = document.createElement('div')
  imagesContainer.className = 'img-container'

  const img1 = document.createElement('a')
  img1.href = '#'
  img1.innerHTML = ` <img src="${gitHubIcon}" alt="Linkedin Icon">`

  const img2 = document.createElement('a')
  img2.href = '#'
  img2.innerHTML = `<img src="${linkedInIcon}" alt="Linkedin Icon">`

  imagesContainer.appendChild(img1)
  imagesContainer.appendChild(img2)

  form.appendChild(nameInput)
  form.appendChild(emailInput)
  form.appendChild(messageTextarea)
  form.appendChild(submitButton)
  form.appendChild(imagesContainer)

  sectionContact.appendChild(form)
}
