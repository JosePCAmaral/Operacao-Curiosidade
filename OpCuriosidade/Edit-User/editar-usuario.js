const closeEditar = document.getElementById('close-editarUser');

closeEditar.addEventListener('click', function(){
    window.parent.postMessage('CloseModalEditarUsuario', '*');
});