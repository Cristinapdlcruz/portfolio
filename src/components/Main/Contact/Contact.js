import './Contact.css'

export const Contact = () => {
  const contactHTML = document.querySelector('main')
  const sectionContact = document.createElement('section')
  const contactTitle = document.createElement('h4')
  const contactP = document.createElement('p')
  const optionsContainer = document.createElement('div')

  contactTitle.textContent = "Let's discuss on soomething cool together"
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
  })

  contactHTML.append(sectionContact)
  sectionContact.append(contactTitle)
  sectionContact.append(contactP)
  sectionContact.append(optionsContainer)

  const form = document.createElement('form')
  form.action = '/submit'
  form.method = 'POST'

  const nameInput = document.createElement('input')
  nameInput.placeholder = 'Your Name'
  nameInput.type = 'text'

  const emailInput = document.createElement('input')
  emailInput.placeholder = 'Your Email'
  emailInput.type = 'email'

  const messageTextarea = document.createElement('textarea')
  messageTextarea.placeholder = 'Your Message'

  const submitButton = document.createElement('button')
  submitButton.type = 'submit'
  submitButton.innerHTML = 'Submit <img src="./assets/planeSend.png'

  form.appendChild(nameInput)
  form.appendChild(document.createElement('br'))
  form.appendChild(emailInput)
  form.appendChild(document.createElement('br'))
  form.appendChild(messageTextarea)
  form.appendChild(document.createElement('br'))
  form.appendChild(submitButton)

  sectionContact.appendChild(form)
}
