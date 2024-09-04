document.getElementById('toggleBt').addEventListener('click', function() {
    this.classList.toggle('active');
});

var vg = document.getElementById('vg');
var cc = document.getElementById('cc');

function cadastrarCuri(){
    vg.style.backgroundColor = 'white';
    vg.style.color = '#6b1bc6';
    cc.style.backgroundColor = '#6b1bc6';
    cc.style.color = 'white';
    vg.onmouseover = function() {
        vg.style.backgroundColor = '#6b1bc6';
        vg.style.color = 'white'; // Talvez você também queira alterar a cor do texto para algo que contraste
    };

    // Quando o mouse sair de cima
    vg.onmouseout = function() {
        vg.style.backgroundColor = 'white';
        vg.style.color = '#6b1bc6';
}
}