var mp = document.getElementById('mp');
var gu = document.getElementById('gu');
var ta = document.getElementById('ta');
var ifr = document.getElementById('iframe');
var difr = document.getElementById('diframe');
var alt = document.getElementById('alterar');

var selectedDiv = mp;

mp.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';

function MeuPerf(){
    if (selectedDiv !== mp) {
        resetStyles();
        selectedDiv = mp;
        mp.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
        selecionaPagina();
        difr.style.width = '70%';
        alt.style.display = 'block';
    }
}

function GerenUsu(){
    if (selectedDiv !== gu) {
        resetStyles();
        selectedDiv = gu;
        gu.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
        selecionaPagina();
        difr.style.width = '100%';
        alt.style.display = 'none';
    }
}

function TriAudi(){
    if (selectedDiv !== ta) {
        resetStyles();
        selectedDiv = ta;
        ta.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
        selecionaPagina();
        difr.style.width = '100%';
        alt.style.display = 'none';
    }
}


function resetStyles() {
    mp.style.backgroundColor = 'white';
    gu.style.backgroundColor = 'white';
    ta.style.backgroundColor = 'white';
}

mp.onmouseover = function() {
    if (selectedDiv !== mp) {
        mp.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
    }
};

mp.onmouseout = function() {
    if (selectedDiv !== mp) {
        mp.style.backgroundColor = 'white';
    }
};

gu.onmouseover = function() {
    if (selectedDiv !== gu) {
        gu.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
    }
};

gu.onmouseout = function() {
    if (selectedDiv !== gu) {
        gu.style.backgroundColor = 'white';
    }
};

ta.onmouseover = function() {
    if (selectedDiv !== ta) {
        ta.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
    }
};

ta.onmouseout = function() {
    if (selectedDiv !== ta) {
        ta.style.backgroundColor = 'white';
    }
};

function selecionaPagina(){
    if(selectedDiv === mp){
        ifr.src = "../My-Profile/meu-pefil.html";
    }else if(selectedDiv === gu){
        ifr.src = "../Manage-User/gerir-usuario.html";
    } else if(selectedDiv === ta){
        ifr.src = "../Trail/trilha.html";
    }
}

window.addEventListener('message', function(event) {
    window.parent.postMessage(event.data, '*');
    if (event.data === 'AlterarStatusF') {
        const iframeNeto = document.getElementById('iframe');
        iframeNeto.contentWindow.postMessage('AlterarStatusFi', '*');
    }else if(event.data === 'AtualizarGerir'){
        const iframeNeto = document.getElementById('iframe');
        iframeNeto.contentWindow.postMessage('AtualizarGerir', '*');
    }
});

