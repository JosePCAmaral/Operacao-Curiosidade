
const compartButton = document.getElementById('compart');
const compartButton2 = document.getElementById('compart2');
const compartButton3 = document.getElementById('compart3');
const compartButton4 = document.getElementById('compart4');
const compartButton5 = document.getElementById('compart5');


compartButton.addEventListener('click', function() {
    window.parent.postMessage('openCompartModal', '*');
});

compartButton2.addEventListener('click', function() {
    window.parent.postMessage('openCompartModal', '*');
});

compartButton3.addEventListener('click', function() {
    window.parent.postMessage('openCompartModal', '*');
});

compartButton4.addEventListener('click', function() {
    window.parent.postMessage('openCompartModal', '*');
});

compartButton5.addEventListener('click', function() {
    window.parent.postMessage('openCompartModal', '*');
});


