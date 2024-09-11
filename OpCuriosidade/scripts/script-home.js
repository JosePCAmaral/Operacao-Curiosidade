document.getElementById('toggleBt').addEventListener('click', function() {
    this.classList.toggle('active');
});

var vg = document.getElementById('vg');
var cc = document.getElementById('cc');
var mc = document.getElementById('mc');
var re = document.getElementById('re');
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
        selecionaPagina();
    }
}

function cadastrarCuri(){
    if (selectedDiv !== cc) {
        resetStyles();
        selectedDiv = cc;
        cc.style.backgroundColor = '#6b1bc6';
        cc.style.color = 'white';
        selecionaPagina();
    }
}

function meuCad(){
    if (selectedDiv !== mc) {
        resetStyles();
        selectedDiv = mc;
        mc.style.backgroundColor = '#6b1bc6';
        mc.style.color = 'white';
        selecionaPagina();
    }
}

function relatorios(){
    if (selectedDiv !== re) {
        resetStyles();
        selectedDiv = re;
        re.style.backgroundColor = '#6b1bc6';
        re.style.color = 'white';
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

function selecionaPagina(){
    if(selectedDiv === vg){
        ifr.src = "perfis.html";
    }else if(selectedDiv === cc){
        ifr.src = "cadastrar-curiosidade.html";
    }else if(selectedDiv === mc){
        ifr.src = "meus-cadastros.html";
    }else if(selectedDiv === re){
        ifr.src = "relatorios.html";
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

