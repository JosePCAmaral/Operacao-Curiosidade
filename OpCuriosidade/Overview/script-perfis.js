let uc = document.getElementById('uc');
let cm = document.getElementById('cm');
let cc = document.getElementById('cc');
let ifr = document.getElementById('iframe');
let params = new URLSearchParams(window.location.search);
let userId = params.get('userId');
console.log('ID do usuáriooOverview:', userId);
ifr.src = `../Last-Shared/perfis-ult.html?userId=${userId}`;

document.addEventListener("DOMContentLoaded", function() {

    fetch(`https://localhost:7299/api/user-model/api/users`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        return response.json();
    })
    .then(users => {

        let totalUsers = users.length;
        let usersWithOperations = users.filter(user => user.operation !== null).length;
        let usersWithoutOperations = totalUsers - usersWithOperations;

        const ContUserT = document.getElementById('total');
        const divcriadaT = document.createElement('div');
        divcriadaT.classList.add('quantidade');
        divcriadaT.innerHTML = `
            <p>${totalUsers}</p>
            `;
        ContUserT.appendChild(divcriadaT);

        const ContUserS = document.getElementById('totalSem');
        const divcriadaS = document.createElement('div');
        divcriadaS.classList.add('quantidade');
        divcriadaS.innerHTML = `
            <p>${usersWithoutOperations}</p>
            `;
        ContUserS.appendChild(divcriadaS);

        const ContUserC = document.getElementById('totalCom');
        const divcriadaC = document.createElement('div');
        divcriadaC.classList.add('quantidade');
        divcriadaC.innerHTML = `
            <p>${usersWithOperations}</p>
            `;
        ContUserC.appendChild(divcriadaC);
    })
    .catch(error => {
        console.error('Houve um erro ao buscar os dados dos usuários:', error);
    });

});

let selectedDiv = uc;

uc.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';

function ultCad(){
    if (selectedDiv !== uc) {
        resetStyles();
        selectedDiv = uc;
        uc.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
        selecionaPagina();
    }
}

function cadmin(){
    if (selectedDiv !== cm) {
        resetStyles();
        selectedDiv = cm;
        cm.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
        selecionaPagina();
    }
}

function comco(){
    if (selectedDiv !== cc) {
        resetStyles();
        selectedDiv = cc;
        cc.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
        selecionaPagina();
    }
}

function resetStyles() {
    uc.style.backgroundColor = 'white';
    cm.style.backgroundColor = 'white';
    cc.style.backgroundColor = 'white';
}

uc.onmouseover = function() {
    if (selectedDiv !== uc) {
        uc.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
    }
};

uc.onmouseout = function() {
    if (selectedDiv !== uc) {
        uc.style.backgroundColor = 'white';
    }
};

cm.onmouseover = function() {
    if (selectedDiv !== cm) {
        cm.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
    }
};

cm.onmouseout = function() {
    if (selectedDiv !== cm) {
        cm.style.backgroundColor = 'white';
    }
};

cc.onmouseover = function() {
    if (selectedDiv !== cc) {
        cc.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
    }
};

cc.onmouseout = function() {
    if (selectedDiv !== cc) {
        cc.style.backgroundColor = 'white';
    }
};

function selecionaPagina(){
    if(selectedDiv === uc){
        ifr.src = "../Last-Shared/perfis-ult.html";
    }else if(selectedDiv === cm){
        ifr.src = "../Shared-By-Me/perfis-cm.html";
    }else if(selectedDiv === cc){
        ifr.src = "../Shared-With-Me/perfis-cc.html";
    }
}


window.addEventListener('message', function(event) {
    window.parent.postMessage(event.data, '*');
});

window.addEventListener('message', function(event) {
    console.log('Mensagem recebida:', event.data);

    if (event.data === 'trocaTela') {
        console.log('Mensagem "trocaTela" recebida, alterando seleção para cc.');
        comco();
    }
});