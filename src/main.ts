const body = document.querySelector('body') as HTMLElement
const menu = document.querySelector('.js-menu') as HTMLUListElement
const menuButton = document.querySelector('.js-menuButton') as HTMLButtonElement

menuButton.addEventListener('click', event => {
  event.stopPropagation()
  menu.classList.toggle('hidden')
  menu.classList.toggle('block')

  body.addEventListener(
    'click',
    () => {
      menu.classList.replace('block', 'hidden')
    },
    {
      once: true,
    }
  )
})
