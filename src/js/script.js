const ham = document.querySelector('ham')
const nav = document.querySelector('nav')

ham.addEventListener('click', () => {
    let visible = ham.dataset.visible
    visible = (visible == 'true') ? true : false
    nav.classList.toggle('nav-hidden')
    ham.setAttribute('data-visible', !visible)
})
