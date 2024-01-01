
const showDetails = () => {
    document.getElementById('protocol').value = window.location.protocol;
    document.getElementById('host').value = window.location.hostname;
    document.getElementById('query').value = window.location.pathname;

}

const reload = () => {
    location.reload()
}