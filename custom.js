const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0

loveMe.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()
        console.log(clickTime)
    }
})