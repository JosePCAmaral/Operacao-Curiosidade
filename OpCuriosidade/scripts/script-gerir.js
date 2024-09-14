function marcarTodos(checkbox) {
    var checkboxes = document.querySelectorAll('.checkbox-item');
    
    checkboxes.forEach(function(item) {
        item.checked = checkbox.checked;
    });
}

const cad = document.getElementById('cadastrarUsu');

cad.addEventListener('click', function(){
    window.parent.postMessage('OpenModalCadastrarUsuario', '*');
});
