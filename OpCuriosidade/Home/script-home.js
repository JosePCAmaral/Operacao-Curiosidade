let HomeUserId = null;

let params = new URLSearchParams(window.location.search);
let userId = params.get('userId');

let vg = document.getElementById('vg');
let cc = document.getElementById('cc');
let mc = document.getElementById('mc');
let re = document.getElementById('re');
let co = document.getElementById('cf');
let ifr = document.getElementById('iframe');
ifr.src = `../Overview/perfis.html?userId=${userId}`;

document.addEventListener("DOMContentLoaded", function() {

    fetch(`https://localhost:7299/api/user-model/get-user-id/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(user => {

            const pai = document.getElementById('iHeaderHome');
            const divcreate = document.createElement('div');

            const nameParts = user.facts.name.split(' ');
            const firstName = nameParts[0];
            const lastName = nameParts[nameParts.length - 1];

            const fullName = `${firstName} ${lastName}`;

            const typeText = user.type === true ? 'Administrador' : 'Operador';


            divcreate.className = 'perfilzinho';
            divcreate.innerHTML = `
                <img src="${user.facts.imagePath}">
                    <p>${fullName} <br> |${typeText}|</p>
                    <span class="material-symbols-outlined" id="expan-perfil-opt">expand_circle_down</span>
            `;
            pai.appendChild(divcreate);

            const expandOpcPerfil = document.getElementById(`expan-perfil-opt`);

            expandOpcPerfil.addEventListener('click', function(){
                const photousu = document.getElementById('fotoUsuarioPerfilzinho');
                photousu.src = user.facts.imagePath;
                document.getElementsByClassName('modal-perfil')[0].style.display = 'block';
            });

        })
        .catch(error => {
            console.error('Houve um erro ao buscar os dados do usuário:', error);
        });
});


let selectedDiv = vg;

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
    ifr.src = `../Overview/perfis.html?userId=${userId}`;
    }else if(selectedDiv === cc){
        ifr.src = "../Operation-Registration/cadastrar-curiosidade.html";
    }else if(selectedDiv === mc){
        ifr.src = "../My-Registrations/meus-cadastros.html";
    }else if(selectedDiv === re){
        ifr.src = "../Reports/relatorios.html";
    }else if(selectedDiv === co){
        ifr.src = `../Settings/configuracoes.html?userId=${userId}`;
    }
}

window.addEventListener('message', function(event) {
    console.log('Mensagem recebida:', event.data);
    if (event.data.action === 'openCompartModal') {
        const idUserComp = event.data.userId;
        console.log('Abrir modal de compartilhamento para o usuário:', idUserComp);
        const iframeCompart = document.getElementById('iframeCompart');
        iframeCompart.contentWindow.postMessage({action: 'passandoIdParaCompartilhar', userId: idUserComp }, '*');
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
    else if(event.data.action === 'openEditarModal'){
        const idUserEditar = event.data.userId;
        console.log('Abrir modal de editar para o usuário:', idUserEditar);
        const iframeEditarOp = document.getElementById('iframeEditarOp');
        iframeEditarOp.contentWindow.postMessage({action: 'passandoIdParaEditarOp', userId: idUserEditar }, '*');
        document.getElementsByClassName('modal-editar')[0].style.display = 'block';
    }
    else if(event.data.action === 'openMCModalzinho1'){
        let userIdModalzinho1 = event.data.userId;
        document.getElementsByClassName('modalzinho1-mc')[0].style.display = 'block';
    }
    else if(event.data === 'abrirRelatorio'){
        ifr.src = "../Report/relatorio.html"
    }
    else if(event.data === 'abrirRelatorios'){
        ifr.src = "../Reports/relatorios.html"
    }
    else if(event.data === 'CloseModalCadastrarUsuario'){
        document.getElementsByClassName('cadastrar-usuario')[0].style.display = 'none';
        const iframe = document.getElementById('iframe');
        iframe.contentWindow.postMessage('AtualizarGerir', '*');
    }
    else if(event.data === 'OpenModalCadastrarUsuario'){
        document.getElementsByClassName('cadastrar-usuario')[0].style.display = 'block';
    }
    else if(event.data.action === 'openAtivarInativarModal'){
        HomeUserId = event.data.userId;
        if(event.data.status){
            document.getElementsByClassName('modalInativarUsu')[0].style.display = 'block';
        }else{
            document.getElementsByClassName('modalAtivarUsu')[0].style.display = 'block';
        }
    }
    else if(event.data === 'CloseModalEditarUsuario'){
        document.getElementsByClassName('editar-usuario')[0].style.display = 'none';
        const iframe = document.getElementById('iframe');
        iframe.contentWindow.postMessage('AtualizarGerir', '*');
    }
    else if (event.data.action === 'openModalzinhoInativar') {
        console.log('Abrir modal de inativação para o usuário:', event.data.userId);
        document.getElementsByClassName('modal-Desativar')[0].style.display = 'block';
    }
    else if (event.data.action === 'openModalzinhoAtivar') {
        console.log('Abrir modal de ativação para o usuário:', event.data.userId);
        document.getElementsByClassName('modal-Ativar')[0].style.display = 'block';
    }
    else if(event.data === 'closeModalzinhoAtivar'){
        document.getElementsByClassName('modal-Ativar')[0].style.display = 'none';
    }
    else if(event.data === 'closeModalzinhoDesativar'){
        document.getElementsByClassName('modal-Desativar')[0].style.display = 'none';
    }
    else if(event.data === 'AlterarStatus'){
        const iframe = document.getElementById('iframe');
        iframe.contentWindow.postMessage('AlterarStatusF', '*');
        document.getElementsByClassName('modal-Desativar')[0].style.display = 'none';
        document.getElementsByClassName('modal-Ativar')[0].style.display = 'none';
    }
});

var can = document.getElementById('can');
var rem = document.getElementById('rem');

var modalExcluir = document.getElementsByClassName('modalExcluir');

can.addEventListener('click', function(){
    document.getElementsByClassName('modal-excluir')[0].style.display = 'none';
});

rem.addEventListener('click', function(){
    console.log('Remover operação', userIdModalzinho1);
    fetch(`https://localhost:7299/api/operation-model/delete-operation/${userIdModalzinho1}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao remover a operação');
        }
        console.log('Operação removida com sucesso');
        alert('Operação removida com sucesso!');
    })
    .catch(error => {
        console.error('Houve um erro ao remover a operação:', error);
        alert('Houve um erro ao remover a operação');
    });
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

var closeModalPerfil = document.getElementById('modal-perfil');

closeModalPerfil.addEventListener('click', function(){
    document.getElementsByClassName('modal-perfil')[0].style.display = 'none';
});

var mce1 = document.getElementById('mc-e1');


mce1.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho1-mc')[0].style.display = 'none';
    document.getElementsByClassName('modal-editar')[0].style.display = 'block';
});


var mcc1 = document.getElementById('mc-c1');


mcc1.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho1-mc')[0].style.display = 'none';
    document.querySelector('.modal').style.display = 'flex';
});


var mcex1 = document.getElementById('mc-ex1');


mcex1.addEventListener('click', function() {
    document.getElementsByClassName('modalzinho1-mc')[0].style.display = 'none';
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

let iframeEsitarUsu = document.getElementById('iframeEditarUsu');

function detalheEditarUsuarioAtivar(){
    document.getElementsByClassName('modalAtivarUsu')[0].style.display = 'none';
    document.getElementsByClassName('editar-usuario')[0].style.display = 'block';
    iframeEsitarUsu.contentWindow.postMessage({ action: 'recebeUserId', userId: HomeUserId }, '*');
}

function detalheCompartilharUsuarioAtivar(){
    document.getElementsByClassName('modalAtivarUsu')[0].style.display = 'none';
    document.getElementsByClassName('modal')[0].style.display = 'flex';
    document.querySelector('.modal-comp').style.display = 'block';
}

function detalheReativarUsuarioAtivar(){
    document.getElementsByClassName('modalAtivarUsu')[0].style.display = 'none';
    document.getElementsByClassName('modal-Ativar')[0].style.display = 'block';
}

function detalheEditarUsuarioInativar(){
    document.getElementsByClassName('modalInativarUsu')[0].style.display = 'none';
    document.getElementsByClassName('editar-usuario')[0].style.display = 'block';
    iframeEsitarUsu.contentWindow.postMessage({ action: 'recebeUserId', userId: HomeUserId }, '*');
}

function detalheReativarUsuarioInativar(){
    document.getElementsByClassName('modalInativarUsu')[0].style.display = 'none';
    document.getElementsByClassName('modal-Desativar')[0].style.display = 'block';
}

function detalheCompartilharUsuarioInativar(){
    document.getElementsByClassName('modalInativarUsu')[0].style.display = 'none';
    document.getElementsByClassName('modal')[0].style.display = 'flex';
    document.querySelector('.modal-comp').style.display = 'block';
}