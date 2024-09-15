document.getElementById('toggleBt').addEventListener('click', function() {
    this.classList.toggle('active');
});

var vg = document.getElementById('vg');
var cc = document.getElementById('cc');
var mc = document.getElementById('mc');
var re = document.getElementById('re');
var co = document.getElementById('cf');
var ifr = document.getElementById('iframe');


var selectedDiv = vg;

vg.style.backgroundColor = '#6b1bc6';
vg.style.color = 'white';

function visaoGeral(){
    if (selectedDiv !== vg) {
        resetStyles();
        selectedDiv = vg;
        vg.style.backgroundColor = '#6b1bc6';
        vg.style.color = 'white';
        co.style.display = 'none';
        selecionaPagina();
    }
}

function cadastrarCuri(){
    if (selectedDiv !== cc) {
        resetStyles();
        selectedDiv = cc;
        cc.style.backgroundColor = '#6b1bc6';
        cc.style.color = 'white';
        co.style.display = 'none';
        selecionaPagina();
    }
}

function meuCad(){
    if (selectedDiv !== mc) {
        resetStyles();
        selectedDiv = mc;
        mc.style.backgroundColor = '#6b1bc6';
        mc.style.color = 'white';
        co.style.display = 'none';
        selecionaPagina();
    }
}

function relatorios(){
    if (selectedDiv !== re) {
        resetStyles();
        selectedDiv = re;
        re.style.backgroundColor = '#6b1bc6';
        re.style.color = 'white';
        co.style.display = 'none';
        selecionaPagina();
    }
}

function configuracoes(){
    if (selectedDiv !== co) {
        resetStyles();
        selectedDiv = co;
        co.style.backgroundColor = '#6b1bc6';
        co.style.color = 'white';
        selecionaPagina();
    }
}

function resetStyles() {
    vg.style.backgroundColor = 'white';
    vg.style.color = '#6b1bc6';
    
    cc.style.backgroundColor = 'white';
    cc.style.color = '#6b1bc6';
    
    mc.style.backgroundColor = 'white';
    mc.style.color = '#6b1bc6';
    
    re.style.backgroundColor = 'white';
    re.style.color = '#6b1bc6';

    co.style.backgroundColor = 'white';
    co.style.color = '#6b1bc6';
}

vg.onmouseover = function() {
    if (selectedDiv !== vg) {
        vg.style.backgroundColor = '#6b1bc6';
        vg.style.color = 'white';
    }
};

vg.onmouseout = function() {
    if (selectedDiv !== vg) {
        vg.style.backgroundColor = 'white';
        vg.style.color = '#6b1bc6';
    }
};

cc.onmouseover = function() {
    if (selectedDiv !== cc) {
        cc.style.backgroundColor = '#6b1bc6';
        cc.style.color = 'white';
    }
};

cc.onmouseout = function() {
    if (selectedDiv !== cc) {
        cc.style.backgroundColor = 'white';
        cc.style.color = '#6b1bc6';
    }
};

mc.onmouseover = function() {
    if (selectedDiv !== mc) {
        mc.style.backgroundColor = '#6b1bc6';
        mc.style.color = 'white';
    }
};

mc.onmouseout = function() {
    if (selectedDiv !== mc) {
        mc.style.backgroundColor = 'white';
        mc.style.color = '#6b1bc6';
    }
};

re.onmouseover = function() {
    if (selectedDiv !== re) {
        re.style.backgroundColor = '#6b1bc6';
        re.style.color = 'white';
    }
};

re.onmouseout = function() {
    if (selectedDiv !== re) {
        re.style.backgroundColor = 'white';
        re.style.color = '#6b1bc6';
    }
};

co.onmouseover = function() {
    if (selectedDiv !== co) {
        co.style.backgroundColor = 'white';
        co.style.color = '#6b1bc6';
    }
};

co.onmouseout = function() {
    if (selectedDiv !== co) {
        co.style.backgroundColor = 'white';
        co.style.color = '#6b1bc6';
    }
};

function selecionaPagina(){
    if(selectedDiv === vg){
        ifr.src = "perfis.html";
    }else if(selectedDiv === cc){
        ifr.src = "cadastrar-curiosidade.html";
    }else if(selectedDiv === mc){
        ifr.src = "meus-cadastros.html";
    }else if(selectedDiv === re){
        ifr.src = "relatorios.html";
    }else if(selectedDiv === co){
        ifr.src = "configuracoes.html";
    }
}

const btnclosemodal = document.getElementById('close')

window.addEventListener('message', function(event) {
    if (event.data === 'openCompartModal') {
        document.querySelector('.modal').style.display = 'flex';
    }else if (event.data === 'openExcluirModal') {
        document.getElementsByClassName('modal-excluir')[0].style.display = 'block';
    }else if(event.data === 'closeModalEditar'){
        document.getElementsByClassName('modal-editar')[0].style.display = 'none';
    }else if(event.data === 'openEditarModal'){
        document.getElementsByClassName('modal-editar')[0].style.display = 'block';
    }else if(event.data === 'openMCModalzinho1'){
        document.getElementsByClassName('modalzinho1-mc')[0].style.display = 'block';
    }else if(event.data === 'openMCModalzinho2'){
        document.getElementsByClassName('modalzinho2-mc')[0].style.display = 'block';
    }else if(event.data === 'openMCModalzinho3'){
        document.getElementsByClassName('modalzinho3-mc')[0].style.display = 'block';
    }else if(event.data === 'openMCModalzinho4'){
        document.getElementsByClassName('modalzinho4-mc')[0].style.display = 'block';
    }else if(event.data === 'openMCModalzinho5'){
        document.getElementsByClassName('modalzinho5-mc')[0].style.display = 'block';
    }else if(event.data === 'openMCModalzinho6'){
        document.getElementsByClassName('modalzinho6-mc')[0].style.display = 'block';
    }else if(event.data === 'abrirRelatorio'){
        ifr.src = "relatorio.html"
    }else if(event.data === 'abrirRelatorios'){
        ifr.src = "relatorios.html"
    }else if(event.data === 'CloseModalCadastrarUsuario'){
        document.getElementsByClassName('cadastrar-usuario')[0].style.display = 'none';
    }else if(event.data === 'OpenModalCadastrarUsuario'){
        document.getElementsByClassName('cadastrar-usuario')[0].style.display = 'block';
    }else if(event.data === 'openMCModalzinhoG1'){
        document.getElementsByClassName('modalzinho1-g')[0].style.display = 'block';
    }else if(event.data === 'openMCModalzinhoG2'){
        document.getElementsByClassName('modalzinho2-g')[0].style.display = 'block';
    }else if(event.data === 'openMCModalzinhoG3'){
        document.getElementsByClassName('modalzinho3-g')[0].style.display = 'block';
    }else if(event.data === 'openMCModalzinhoG4'){
        document.getElementsByClassName('modalzinho4-g')[0].style.display = 'block';
    }else if(event.data === 'openMCModalzinhoG5'){
        document.getElementsByClassName('modalzinho5-g')[0].style.display = 'block';
    }else if(event.data === 'openMCModalzinhoG6'){
        document.getElementsByClassName('modalzinho6-g')[0].style.display = 'block';
    }
});

btnclosemodal.addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
});

var v1 = document.getElementById('v1');
var v2 = document.getElementById('v2');
var v3 = document.getElementById('v3');

var e1 = document.getElementById('e1');
var e2 = document.getElementById('e2');
var e3 = document.getElementById('e3');

var abrirModalzinho1 = document.getElementsByClassName('modalzinho1')[0];
var abrirModalzinho2 = document.getElementsByClassName('modalzinho2')[0];
var abrirModalzinho3 = document.getElementsByClassName('modalzinho3')[0];

v1.addEventListener('click', function() { abrirModal(abrirModalzinho1); });
e1.addEventListener('click', function() { abrirModal(abrirModalzinho1); });

v2.addEventListener('click', function() { abrirModal(abrirModalzinho2); });
e2.addEventListener('click', function() { abrirModal(abrirModalzinho2); });

v3.addEventListener('click', function() { abrirModal(abrirModalzinho3); });
e3.addEventListener('click', function() { abrirModal(abrirModalzinho3); });

function abrirModal(modal) {
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    }else{
        modal.style.display = 'block';
    }
}

var V1 = document.getElementById('V1');
var E1 = document.getElementById('E1');

var V2 = document.getElementById('V2');
var E2 = document.getElementById('E2');

var V3 = document.getElementById('V3');
var E3 = document.getElementById('E3');

V1.addEventListener('click', function(){
    v1.style.display = 'block';
    e1.style.display = 'none';
    abrirModal(abrirModalzinho1)
});

E1.addEventListener('click', function(){
    v1.style.display = 'none';
    e1.style.display = 'block';
    abrirModal(abrirModalzinho1)
});

V2.addEventListener('click', function(){
    v2.style.display = 'block';
    e2.style.display = 'none';
    abrirModal(abrirModalzinho2)
});

E2.addEventListener('click', function(){
    v2.style.display = 'none';
    e2.style.display = 'block';
    abrirModal(abrirModalzinho2)
});

V3.addEventListener('click', function(){
    v3.style.display = 'block';
    e3.style.display = 'none';
    abrirModal(abrirModalzinho3)
});

E3.addEventListener('click', function(){
    v3.style.display = 'none';
    e3.style.display = 'block';
    abrirModal(abrirModalzinho3)
});


var can = document.getElementById('can');
var rem = document.getElementById('rem');

var modalExcluir = document.getElementsByClassName('modalExcluir');

can.addEventListener('click', function(){
    document.getElementsByClassName('modal-excluir')[0].style.display = 'none';
});

rem.addEventListener('click', function(){
    document.getElementsByClassName('modal-excluir')[0].style.display = 'none';
});

var sino = document.getElementById('sino');
var closesino = document.getElementById('close-notf');

sino.addEventListener('click', function(){
    document.getElementsByClassName('modal-notf')[0].style.display = 'block';
});

closesino.addEventListener('click', function(){
    document.getElementsByClassName('modal-notf')[0].style.display = 'none';
});

var contadorNotf = document.getElementById('contador-notf');

contadorNotf.addEventListener('click', function(){
    var iframe = document.getElementById('iframe');
    iframe.contentWindow.postMessage('trocaTela', '*');
    document.getElementsByClassName('modal-notf')[0].style.display = 'none';
});

var expandOpcPerfil = document.getElementById('expan-perfil-opt');

expandOpcPerfil.addEventListener('click', function(){
    document.getElementsByClassName('modal-perfil')[0].style.display = 'block';
});

var closeModalPerfil = document.getElementById('modal-perfil');

closeModalPerfil.addEventListener('click', function(){
    document.getElementsByClassName('modal-perfil')[0].style.display = 'none';
});

var mce1 = document.getElementById('mc-e1');
var mce2 = document.getElementById('mc-e2');
var mce3 = document.getElementById('mc-e3');
var mce4 = document.getElementById('mc-e4');
var mce5 = document.getElementById('mc-e5');
var mce6 = document.getElementById('mc-e6');

mce1.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho1-mc')[0].style.display = 'none';
    document.getElementsByClassName('modal-editar')[0].style.display = 'block';
});

mce2.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho2-mc')[0].style.display = 'none';
    document.getElementsByClassName('modal-editar')[0].style.display = 'block';
});

mce3.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho3-mc')[0].style.display = 'none';
    document.getElementsByClassName('modal-editar')[0].style.display = 'block';
});

mce4.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho4-mc')[0].style.display = 'none';
    document.getElementsByClassName('modal-editar')[0].style.display = 'block';
});

mce5.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho5-mc')[0].style.display = 'none';
    document.getElementsByClassName('modal-editar')[0].style.display = 'block';
});

mce6.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho6-mc')[0].style.display = 'none';
    document.getElementsByClassName('modal-editar')[0].style.display = 'block';
});

var mcc1 = document.getElementById('mc-c1');
var mcc2 = document.getElementById('mc-c2');
var mcc3 = document.getElementById('mc-c3');
var mcc4 = document.getElementById('mc-c4');
var mcc5 = document.getElementById('mc-c5');
var mcc6 = document.getElementById('mc-c6');

mcc1.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho1-mc')[0].style.display = 'none';
    document.querySelector('.modal').style.display = 'flex';
});

mcc2.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho2-mc')[0].style.display = 'none';
    document.querySelector('.modal').style.display = 'flex';
});

mcc3.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho3-mc')[0].style.display = 'none';
    document.querySelector('.modal').style.display = 'flex';
});

mcc4.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho4-mc')[0].style.display = 'none';
    document.querySelector('.modal').style.display = 'flex';
});

mcc5.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho5-mc')[0].style.display = 'none';
    document.querySelector('.modal').style.display = 'flex';
});

mcc6.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho6-mc')[0].style.display = 'none';
    document.querySelector('.modal').style.display = 'flex';
});

var mcex1 = document.getElementById('mc-ex1');
var mcex2 = document.getElementById('mc-ex2');
var mcex3 = document.getElementById('mc-ex3');
var mcex4 = document.getElementById('mc-ex4');
var mcex5 = document.getElementById('mc-ex5');
var mcex6 = document.getElementById('mc-ex6');

mcex1.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho1-mc')[0].style.display = 'none';
    document.getElementsByClassName('modal-excluir')[0].style.display = 'block';
});

mcex2.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho2-mc')[0].style.display = 'none';
    document.getElementsByClassName('modal-excluir')[0].style.display = 'block';
});

mcex3.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho3-mc')[0].style.display = 'none';
    document.getElementsByClassName('modal-excluir')[0].style.display = 'block';
});

mcex4.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho4-mc')[0].style.display = 'none';
    document.getElementsByClassName('modal-excluir')[0].style.display = 'block';
});

mcex5.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho5-mc')[0].style.display = 'none';
    document.getElementsByClassName('modal-excluir')[0].style.display = 'block';
});

mcex6.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho6-mc')[0].style.display = 'none';
    document.getElementsByClassName('modal-excluir')[0].style.display = 'block';
});

var conf = document.getElementById('Configurações');

conf.addEventListener('click', function(){
    co.style.display = 'block';
    configuracoes();
});


var ge1 = document.getElementById('g-e1');
var ge2 = document.getElementById('g-e2');
var ge3 = document.getElementById('g-e3');
var ge4 = document.getElementById('g-e4');
var ge5 = document.getElementById('g-e5');
var ge6 = document.getElementById('g-e6');

mce1.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho1-g')[0].style.display = 'none';
    document.getElementsByClassName('modal-editar')[0].style.display = 'block';
});

ge2.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho2-g')[0].style.display = 'none';
    document.getElementsByClassName('modal-editar')[0].style.display = 'block';
});

ge3.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho3-g')[0].style.display = 'none';
    document.getElementsByClassName('modal-editar')[0].style.display = 'block';
});

ge4.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho4-g')[0].style.display = 'none';
    document.getElementsByClassName('modal-editar')[0].style.display = 'block';
});

ge5.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho5-g')[0].style.display = 'none';
    document.getElementsByClassName('modal-editar')[0].style.display = 'block';
});

ge6.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho6-g')[0].style.display = 'none';
    document.getElementsByClassName('modal-editar')[0].style.display = 'block';
});