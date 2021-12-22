const slide = document.querySelectorAll('.slide')

slide.forEach(item => {
    
    item.addEventListener('click', () => {
        removeClass()
        item.classList.add('active')
    })
})

function removeClass() {
    slide.forEach(item => {
        item.classList.remove('active')
    })
}