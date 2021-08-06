

let toastyRemoveTimeout
function toasty(msg, color) {
    let snackbar = document.querySelector("#snackbar");
    if (snackbar.hasAttribute('active')) {
        snackbar.removeAttribute('active')
        setTimeout(function () { toasty(msg, color) }, 600)
        clearTimeout(toastyRemoveTimeout)
        return
    }
    snackbar.style.backgroundColor = color ?? 'var(--textColor)'
    snackbar.setAttribute('active', '')
    snackbar.innerHTML = msg ?? 'Success!';
    toastyRemoveTimeout = setTimeout(function () { snackbar.removeAttribute('active'); }, 3000);
}