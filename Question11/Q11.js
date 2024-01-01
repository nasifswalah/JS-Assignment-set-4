
const showDetails = () => {
    document.getElementById('ow').value = window.outerWidth;
    document.getElementById('iw').value = window.innerWidth;
    document.getElementById('oh').value = window.outerHeight;
    document.getElementById('ih').value = window.innerHeight;

}

const reload = () => {
    location.reload()
}