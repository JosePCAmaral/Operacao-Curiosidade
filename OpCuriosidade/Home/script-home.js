

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
        ifr.src = "../Overview/perfis.html";
    }else if(selectedDiv === cc){
        ifr.src = "../Operation-Registration/cadastrar-curiosidade.html";
    }else if(selectedDiv === mc){
        ifr.src = "../My-Registrations/meus-cadastros.html";
    }else if(selectedDiv === re){
        ifr.src = "../Reports/relatorios.html";
    }else if(selectedDiv === co){
        ifr.src = "../Settings/configuracoes.html";
    }
}

window.addEventListener('message', function(event) {
    console.log('Mensagem recebida:', event.data);
    if (event.data === 'openCompartModal') {
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.modal-comp').style.display = 'block';
    }
    else if (event.data === 'closeModalCompartilhar') {
        document.querySelector('.modal').style.display = 'none';
        document.querySelector('.modal-comp').style.display = 'none';
    }
    else if (event.data === 'openExcluirModal') {
        document.getElementsByClassName('modal-excluir')[0].style.display = 'block';
    }
    else if(event.data === 'closeModalEditar'){
        document.getElementsByClassName('modal-editar')[0].style.display = 'none';
    }
    else if(event.data === 'openEditarModal'){
        document.getElementsByClassName('modal-editar')[0].style.display = 'block';
    }
    else if(event.data === 'openMCModalzinho1'){
        document.getElementsByClassName('modalzinho1-mc')[0].style.display = 'block';
    }
    else if(event.data === 'openMCModalzinho2'){
        document.getElementsByClassName('modalzinho2-mc')[0].style.display = 'block';
    }
    else if(event.data === 'openMCModalzinho3'){
        document.getElementsByClassName('modalzinho3-mc')[0].style.display = 'block';
    }
    else if(event.data === 'openMCModalzinho4'){
        document.getElementsByClassName('modalzinho4-mc')[0].style.display = 'block';
    }
    else if(event.data === 'openMCModalzinho5'){
        document.getElementsByClassName('modalzinho5-mc')[0].style.display = 'block';
    }
    else if(event.data === 'openMCModalzinho6'){
        document.getElementsByClassName('modalzinho6-mc')[0].style.display = 'block';
    }
    else if(event.data === 'abrirRelatorio'){
        ifr.src = "../Report/relatorio.html"
    }
    else if(event.data === 'abrirRelatorios'){
        ifr.src = "../Reports/relatorios.html"
    }
    else if(event.data === 'CloseModalCadastrarUsuario'){
        document.getElementsByClassName('cadastrar-usuario')[0].style.display = 'none';
    }
    else if(event.data === 'OpenModalCadastrarUsuario'){
        document.getElementsByClassName('cadastrar-usuario')[0].style.display = 'block';
    }
    else if(event.data === 'openAtivarInativarModal'){
        document.getElementsByClassName('modalAtivarInativar')[0].style.display = 'block';
    }
    else if(event.data === 'CloseModalEditarUsuario'){
        document.getElementsByClassName('editar-usuario')[0].style.display = 'none';
    }
    else if(event.data === 'openModalzinhoInativar'){
        document.getElementsByClassName('modal-Desativar')[0].style.display = 'block';
    }
    else if(event.data === 'openModalzinhoAtivar'){
        document.getElementsByClassName('modal-Ativar')[0].style.display = 'block';
    }
    else if(event.data === 'closeModalzinhoAtivar'){
        document.getElementsByClassName('modal-Ativar')[0].style.display = 'none';
    }
    else if(event.data === 'closeModalzinhoDesativar'){
        document.getElementsByClassName('modal-Desativar')[0].style.display = 'none';
    }
    else if(event.data === 'AtivarUsuarioP'){
        const iframe = document.getElementById('iframe');
        iframe.contentWindow.postMessage('AtivarUsuario', '*');
    }
    else if(event.data === 'DesativarUsuarioP'){
        const iframe = document.getElementById('iframe');
        iframe.contentWindow.postMessage('DesativarUsuario', '*');
    }
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
var perf = document.getElementById('perfil');

perf.addEventListener('click', function(){
    co.style.display = 'block';
    configuracoes();
});

conf.addEventListener('click', function(){
    co.style.display = 'block';
    configuracoes();
});


var ge1 = document.getElementById('g-e1');

ge1.addEventListener('click', function() {
    document.getElementsByClassName('modalAtivarInativar')[0].style.display = 'none';
    document.getElementsByClassName('editar-usuario')[0].style.display = 'block';
});

var gin1 = document.getElementById('g-in1');

gin1.addEventListener('click', function() {
    document.getElementsByClassName('modalAtivarInativar')[0].style.display = 'none';
    document.getElementsByClassName('modal-ativar')[0].style.display = 'block';
});

var gc1 = document.getElementById('g-c1');

gc1.addEventListener('click', function() {
    document.getElementsByClassName('modalAtivarInativar')[0].style.display = 'none';
    document.getElementsByClassName('modal')[0].style.display = 'flex';
});