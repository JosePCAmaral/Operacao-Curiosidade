var link = document.getElementById('link');

link.addEventListener('click', function() {
    window.parent.postMessage('abrirRelatorio', '*');
});