// darkmode #1e2124

const themeBtn = document.getElementById('themeBtn')

themeBtn.addEventListener('click', ()=> {
    const html = document.getElementsByTagName('html')[0];
    const bgSwap = document.querySelectorAll('.bg-swap')
    const dark = '#1e2124'
    const light = '#fff'

    const theme = html.getAttribute('data-bs-theme')

    if (theme === 'light') {
        // console.log('light') 
        html.setAttribute('data-bs-theme', 'dark')
        bgSwap.forEach(item => {
            item.style.backgroundColor = dark
        })
    } else {
        // console.log('dark')
        html.setAttribute('data-bs-theme', 'light')
        bgSwap.forEach(item => {
            item.style.backgroundColor = light
        })
    }



})