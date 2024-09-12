var volt = document.getElementById('voltar');

volt.addEventListener('click', function(){
    window.parent.postMessage('abrirRelatorios', '*');
});