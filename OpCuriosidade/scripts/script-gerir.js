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