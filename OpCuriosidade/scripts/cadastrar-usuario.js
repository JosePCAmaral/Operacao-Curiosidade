const closeee = document.getElementById('close-editar');

closeee.addEventListener('click', function(){
    window.parent.postMessage('CloseModalCadastrarUsuario', '*');
});