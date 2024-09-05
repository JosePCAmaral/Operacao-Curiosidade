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