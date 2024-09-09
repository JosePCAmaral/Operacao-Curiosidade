
const compartButton = document.getElementById('compart');


compartButton.addEventListener('click', function() {
    window.parent.postMessage('openCompartModal', '*');
});


