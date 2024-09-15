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

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');

btn1.addEventListener('click', function() {
    window.parent.postMessage('openMCModalzinhoG1', '*');
});

btn2.addEventListener('click', function() {
    window.parent.postMessage('openMCModalzinhoG2', '*');
});

btn3.addEventListener('click', function() {
    window.parent.postMessage('openMCModalzinhoG3', '*');
});

btn4.addEventListener('click', function() {
    window.parent.postMessage('openMCModalzinhoG4', '*');
});

btn5.addEventListener('click', function() {
    window.parent.postMessage('openMCModalzinhoG5', '*');
});

btn6.addEventListener('click', function() {
    window.parent.postMessage('openMCModalzinhoG6', '*');
});

var btnAtivo1 = document.getElementById('ativo1');
var btnAtivo2 = document.getElementById('ativo2');
var btnAtivo3 = document.getElementById('ativo3');
var btnAtivo4 = document.getElementById('ativo4');
var btnInativo1 = document.getElementById('inativo1');
var btnInativo2 = document.getElementById('inativo2');

btnAtivo1.addEventListener('click', function() {
    window.parent.postMessage('openMCModalzinhoAtivo', '*');
});

btnAtivo2.addEventListener('click', function() {
    window.parent.postMessage('openMCModalzinhoAtivo', '*');
});

btnAtivo3.addEventListener('click', function() {
    window.parent.postMessage('openMCModalzinhoAtivo', '*');
});

btnAtivo4.addEventListener('click', function() {    
    window.parent.postMessage('openMCModalzinhoAtivo', '*');
});

btnInativo1.addEventListener('click', function() {   
    window.parent.postMessage('openMCModalzinhoInativo', '*');
});

btnInativo2.addEventListener('click', function() {   
    window.parent.postMessage('openMCModalzinhoInativo', '*');
});