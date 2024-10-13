let params = new URLSearchParams(window.location.search);
let userId = params.get('userId');
console.log('ID do usuárioUltimosPerfis:', userId);

document.addEventListener("DOMContentLoaded", function() {

    fetch(`https://localhost:7299/api/user-model/api/users`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        return response.json();
    })
    .then(user => {
        user.reverse().forEach(users => {
            const PaiCadastros = document.getElementById('PaiCadastros');
            const divCriada = document.createElement('div');
            divCriada.classList.add('cadastro');

            let tamanhoInt = users.operation?.interest?.length;
            let tamanhoFeel = users.operation?.feeling?.length;
            let tamanhoVal = users.operation?.value?.length;

            let statusText = users.status === true ? 'Ativo' : 'Inativo';
            let statusId = users.status === true ? 'ativo' : 'inativo';

            let data = users.creationDate.substring(0, 10);
            let partesData = data.split('-');
            let dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;

            const profilePic = users.facts.imagePath !== null 
                ? `<img src="${users.facts.imagePath}"class="profile-pic">`
                : `<div class="person" id="containerImg">
                        <span class="material-symbols-outlined" id="spanPerson">person</span>
                   </div>`;

            const operationSN = users.operation !== null 
                ? `<div class="user-stats">
                        <span class="stat" id="pri"><strong>${tamanhoInt}</strong> Interesses<span class="material-symbols-outlined">school</span></span>
                        <span class="stat"><strong>${tamanhoFeel}</strong> Sentimentos<span class="material-symbols-outlined">favorite</span></span>
                        <span class="stat"><strong>${tamanhoVal}</strong> Valores<span class="material-symbols-outlined">psychiatry</span></span>
                    </div>`
                : `<div class="user-stats">
                        <span class="stat" id="pri">Operação Curiosidade não cadastrada<span class="material-symbols-outlined">no_accounts</span></span>
                    </div>`;

            divCriada.innerHTML = `
                    <div class="user-info">
                        ${profilePic}
                        <div class="user-details">
                            <h2>${users.facts.name} | <span class="username">${users.facts.nameUser}</span></h2>
                            <p>${users.facts.email}</p>
                            <span id="${statusId}">${statusText}</span>
                        </div>
                        <span class="user-id">${users.code}</span>
                    </div>
                    ${operationSN}
                    <div class="user-meta">
                        <p><span class="material-symbols-outlined">calendar_month</span> Criado em: ${dataFormatada}</p>
                        <p><span class="material-symbols-outlined">save_as</span> Editado recentemente por: @BlueDragon</p>
                    </div>
                    <div class="user-actions">
                        <p class="action-btn" ><span class="material-symbols-outlined" id="compart-${users.code}">forward</span></p>
                        <p class="action-btn"><span class="material-symbols-outlined" id="exc-${users.code}">delete</span></p>
                        <p class="action-btn"><span class="material-symbols-outlined" id="edit-${users.code}">edit</span></p>
                    </div>
                `;
            PaiCadastros.appendChild(divCriada);

            const compartButton = document.getElementById(`compart-${users.code}`);
            const excluirButton = document.getElementById(`exc-${users.code}`);
            const editarButton = document.getElementById(`edit-${users.code}`);
            
            compartButton.addEventListener('click', function() {
                window.parent.postMessage('openCompartModal', '*');
            });
            
            excluirButton.addEventListener('click', function() {
                window.parent.postMessage('openExcluirModal', '*');
            });
            
            editarButton.addEventListener('click', function() {
                window.parent.postMessage('openEditarModal', '*');
            });

        });
    })
    .catch(error => {
        console.error('Houve um erro ao buscar os dados dos usuários:', error);
    });



});


