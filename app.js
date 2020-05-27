const body = document.querySelector('body');
body.classList.add('is-loading');

function loadWindow() {
    window.setTimeout(function () {
        body.classList.remove('is-loading');
    }, 100);
}
loadWindow();


function scrollToMain(e) {
    let main = document.getElementById('main');
    main.scrollIntoView({
        behavior: "smooth"
    });
}


if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .getRegistration("/serviceWorker.js", {
                scope: './'
            })
            .then(function (registrations) {
                for (let registration of registrations) {
                    registration.unregister()
                }
            })
    })
}