const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu');
const closeBtn = document.querySelector('#close-btn');
const toggle = document.querySelector('.toggle')

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    toggle.querySelector('span:nth-child(1)').classList.toggle('active')
    toggle.querySelector('span:nth-child(2)').classList.toggle('active')
})


