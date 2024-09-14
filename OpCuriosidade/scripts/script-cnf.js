var mp = document.getElementById('mp');
var oc = document.getElementById('oc');
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

function OpCompart(){
    if (selectedDiv !== oc) {
        resetStyles();
        selectedDiv = oc;
        oc.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
        selecionaPagina();
        difr.style.width = '100%';
        alt.style.display = 'none';
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
    oc.style.backgroundColor = 'white';
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

oc.onmouseover = function() {
    if (selectedDiv !== oc) {
        oc.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
    }
};

oc.onmouseout = function() {
    if (selectedDiv !== oc) {
        oc.style.backgroundColor = 'white';
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
        ifr.src = "meu-pefil.html";
    }else if(selectedDiv === oc){
        ifr.src = "perfis-cm.html";
    }else if(selectedDiv === gu){
        ifr.src = "gerir-usuario.html";
    } else if(selectedDiv === ta){
        ifr.src = "perfis-cc.html";
    }
}

window.addEventListener('message', function(event) {
    window.parent.postMessage(event.data, '*');
});