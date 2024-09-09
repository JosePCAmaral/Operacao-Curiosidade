
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


const excluirButton = document.getElementById('exc');
const excluirButton2 = document.getElementById('exc2');
const excluirButton3 = document.getElementById('exc3');
const excluirButton4 = document.getElementById('exc4');
const excluirButton5 = document.getElementById('exc5');

excluirButton.addEventListener('click', function() {
    window.parent.postMessage('openExcluirModal', '*');
});

excluirButton2.addEventListener('click', function() {
    window.parent.postMessage('openExcluirModal', '*');
});

excluirButton3.addEventListener('click', function() {
    window.parent.postMessage('openExcluirModal', '*');
});

excluirButton4.addEventListener('click', function() {
    window.parent.postMessage('openExcluirModal', '*');
});

excluirButton5.addEventListener('click', function() {
    window.parent.postMessage('openExcluirModal', '*');
});