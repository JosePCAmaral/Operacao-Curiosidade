document.addEventListener("DOMContentLoaded", function() {

    fetch('https://localhost:7299/api/user-model/api/users')
        .then(User => {
            console.log(User);
            if (!User.ok) {
                throw new Error('Network response was not ok');
            }
            return User.json();
        })
        .then(users => {
            const userList = document.getElementById('user-list');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.classList.add('user');

                let statusText = user.status === true ? 'Ativo' : 'Inativo';
                let statusId = user.status === true ? 'statusA' : 'statusI';

                let typeText = user.type === true ? 'Administrador' : 'Operador';
                let typeId = user.type === true ? 'typeA' : 'typeO';

                let data = user.creationDate.substring(0, 10);
                let partesData = data.split('-');
                let dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;
                
                listItem.innerHTML = `<div class="box">
                            <input type="checkbox" name="selecionar" id="selecionar" class="checkbox-item">
                        </div>
                        <div class="container-dados" id="code">
                            <p class="codigo">${user.code}</p>
                        </div>
                        <div class="container-dados" id="name">
                            <p class="nome">${user.facts.name}</p>
                        </div>
                        <div class="container-dados" id="email">
                            <p class="email">${user.facts.email}</p>
                        </div>
                        <div class="container-dados" id="date">
                            <p class="data">${dataFormatada}</p>
                        </div>
                        <div class="container-dados" id="Id">
                            <p class="data">${user.id}</p>
                        </div>
                        <div class="container-dados" id="status">
                            <p class="status" id="${statusId}" data-id="${user.id}" data-status="${user.status}" onclick="toggleStatus(this)">${statusText}</p>
                        </div>
                        <div class="container-dados" id="type">
                            <p class="tipo" id="${typeId}">${typeText}</p>
                        </div>
                        <div class="container-dados" id="button">
                            <p class="botao" id="btn" onclick="openAtivarInativarModal()"><span class="material-symbols-outlined">more_vert</span>Detalhes</p>
                        </div>`;
                        
                userList.appendChild(listItem);
            });
        })
        
        .catch(error => {
            console.error('Houve um erro ao buscar os usuários:', error);
        });

});

let selectedUserId = null;

function marcarTodos(checkbox) {
    var checkboxes = document.querySelectorAll('.checkbox-item');
    
    checkboxes.forEach(function(item) {
        item.checked = checkbox.checked;
    });
}

function Limpar(){
    location.reload();
}

function cadastrarUsu() {
    window.parent.postMessage('OpenModalCadastrarUsuario', '*');
};

function openAtivarInativarModal() {
    window.parent.postMessage('openAtivarInativarModal', '*');
};

function toggleStatus(element) {
    const userId = element.getAttribute('data-id');
    const currentStatus = element.getAttribute('data-status') === 'true';

    selectedUserId = userId;

    if (currentStatus) {
        console.log('Usuário selecionado para possível inativação:', userId);
        window.parent.postMessage({ action: 'openModalzinhoInativar', userId: userId }, '*');
    } else {
        console.log('Usuário selecionado para possível ativação:', userId);
        window.parent.postMessage({ action: 'openModalzinhoAtivar', userId: userId }, '*');
    }
}

window.addEventListener('message', function(event) {
    console.log('Mensagem recebida no neto:', event.data);
    if (event.data === 'AlterarStatusFi') {
        AlterarStatus();
    }
});

function AlterarStatus() {
    console.log('Alterar status do usuário:', selectedUserId);
    fetch(`https://localhost:7299/api/user-model/put-status/${selectedUserId}`, {
        method: 'PUT'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    })
    .then(data => {
        console.log('Status do usuário alterado:', data);
        alert('Status do usuário alterado com sucesso!');
        location.reload();
    })
    .catch(error => {
        console.error('Houve um erro ao alterar o status do usuário:', error);
    });
}