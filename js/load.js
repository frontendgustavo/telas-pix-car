const preLoaderEl = document.querySelector('.pre-loader');

setTimeout(() => {
    preLoaderEl.style.opacity = '0'
    setInterval(() => {
        preLoaderEl.style.display = 'none'
    }, "500")
}, "3000")
