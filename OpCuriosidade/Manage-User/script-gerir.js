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

var btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    window.parent.postMessage('openAtivarInativarModal', '*');
});

var btnAtivo1 = document.getElementById('status');
var btnAtivo2 = document.getElementById('ativo2');
var btnAtivo3 = document.getElementById('ativo3');
var btnAtivo4 = document.getElementById('ativo4');
var btnInativo1 = document.getElementById('inativo1');
var btnInativo2 = document.getElementById('inativo2');

btnAtivo1.addEventListener('click', function() {
    console.log('teste');
    window.parent.postMessage('openMCModalzinhoInativo', '*');
});

btnAtivo2.addEventListener('click', function() {
    window.parent.postMessage('openMCModalzinhoInativo', '*');
});

btnAtivo3.addEventListener('click', function() {
    window.parent.postMessage('openMCModalzinhoInativo', '*');
});

btnAtivo4.addEventListener('click', function() {    
    window.parent.postMessage('openMCModalzinhoInativo', '*');
});

btnInativo1.addEventListener('click', function() {   
    window.parent.postMessage('openMCModalzinhoAtivo', '*');
});

btnInativo2.addEventListener('click', function() {   
    window.parent.postMessage('openMCModalzinhoAtivo', '*');
});