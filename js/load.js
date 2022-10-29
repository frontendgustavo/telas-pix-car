const preLoaderEl = document.querySelector('.pre-loader');
function loadScreen() {
    setTimeout(() => {
        preLoaderEl.style.opacity = '0'
        setInterval(() => {
            preLoaderEl.style.display = 'none'
        }, "500")
    }, "3000")
}
loadScreen();