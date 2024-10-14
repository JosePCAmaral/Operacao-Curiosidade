document.addEventListener("DOMContentLoaded", function() {

    const itemsPerPage = 6;
    let currentPage = 1;
    let usersData = [];
    let isSortedByCodeAsc = true;
    let isSortedByNameAsc = true;
    let isSortedByEmailAsc = true;
    let isSortedByStatusAsc = true;
    let isSortedByDateAsc = true;


    document.getElementById('filtrar').addEventListener('click', function() {
        const status = document.getElementById('istatus').value;
        const tipo = document.getElementById('itipo').value;
        const code = document.getElementById('icode').value;
        const period = document.getElementById('iperiodo').value;
        const periodAte = document.getElementById('iperiodoAte').value;
        
        const filters = {
            status: status !== '1' ? (status === '2' ? 'true' : 'false') : null,
            type: tipo !== '1' ? (tipo === '2' ? 'true' : 'false') : null,
            code: code ? code : null,
            period: period ? period : null,
            periodAte: periodAte ? periodAte : null
        };
    
        console.log('Filtros:', filters);
        fetchFilteredUsers(filters);
    });
    
    function fetchFilteredUsers(filters) {
        
        fetch(`https://localhost:7299/api/user-model/api/users/filter/${filters.status}/${filters.type}/${filters.code}/${filters.period}/${filters.periodAte}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(users => {
                usersData = users.filter(user => user.operationModel !== null);
                console.log('Usuários filtrados:', users);
                renderPage(currentPage);
                updatePaginationControls();
            })
            .catch(error => {
                console.error('Houve um erro ao buscar os usuários:', error);
            });
    }

    fetch('https://localhost:7299/api/user-model/api/users')
        .then(User => {
            if (!User.ok) {
                throw new Error('Network response was not ok');
            }
            return User.json();
        })
        .then(users => {
            usersData = users.filter(user => user.operationModel !== null);
            renderPage(currentPage);
            updatePaginationControls();
        })
        .catch(error => {
            console.error('Houve um erro ao buscar os usuários:', error);
        });

        function renderPage(page) {
            const userList = document.getElementById('user-list');
            userList.innerHTML = '';

            const headerItem = document.createElement('li');
            headerItem.classList.add('ordem');
            headerItem.innerHTML = `
            <div><p id="code">Código<span class="material-symbols-outlined">swap_vert</span></p></div>
            <div id="nome"><p id="name-header">Nome<span class="material-symbols-outlined">swap_vert</span></p></div>
            <div id="email"><p id="email-header">E-mail<span class="material-symbols-outlined">swap_vert</span></p></div>
            <div id="data"><p id="date-header">Data de criação<span class="material-symbols-outlined">swap_vert</span></p></div>
            <div id="status"><p id="status-header">Status<span class="material-symbols-outlined">swap_vert</span></p></div>
            `;
            userList.appendChild(headerItem);



            const start = (page - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const usersToShow = usersData.slice(start, end);
    
            if (usersToShow.length === 0) {
                const noUserItem = document.createElement('li');
                noUserItem.classList.add('noUser');
                noUserItem.innerHTML = `<p>Nenhum usuário encontrado</p>`;
                userList.appendChild(noUserItem);
            } else {
                usersToShow.forEach(user => {
                    const listItem = document.createElement('li');
                    listItem.classList.add('user');
        
                    let statusText = user.status === true ? 'Ativo' : 'Inativo';
                    let statusId = user.status === true ? 'statusA' : 'statusI';
        
                    let typeText = user.type === true ? 'Administrador' : 'Operador';
                    let typeId = user.type === true ? 'typeA' : 'typeO';
        
                    let data = user.creationDate.substring(0, 10);
                    let partesData = data.split('-');
                    let dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;
        
                    listItem.innerHTML = `
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
                                <div class="container-dados" id="button">
                                    <p class="botao" id="btn" data-id="${user.id}" data-status="${user.status}" onclick="openModal(this)"><span class="material-symbols-outlined">more_vert</span>Detalhes</p>
                                </div>`;
        
                    userList.appendChild(listItem);
                });
            }
            document.getElementById('name-header').onclick = ordenarPorNome;
            document.getElementById('email-header').onclick = ordenarPorEmail;
            document.getElementById('date-header').onclick = ordenarPorData;
            document.getElementById('status-header').onclick = ordenarPorStatus;
            document.getElementById('code').onclick = ordenarPorCodigo;
        }

        function updatePaginationControls() {
            const totalPages = Math.ceil(usersData.length / itemsPerPage);
            document.querySelector('.pag').textContent = `Página ${currentPage} de ${totalPages}`;

            document.querySelector('.first').classList.toggle('disabled', currentPage === 1);
            document.querySelector('.back').classList.toggle('disabled', currentPage === 1);
            document.querySelector('.next').classList.toggle('disabled', currentPage === totalPages);
            document.querySelector('.last').classList.toggle('disabled', currentPage === totalPages);
        }

        document.querySelector('.first').addEventListener('click', function() {
            currentPage = 1;
            renderPage(currentPage);
            updatePaginationControls();
        });

        document.querySelector('.back').addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                renderPage(currentPage);
                updatePaginationControls();
            }
        });

        document.querySelector('.next').addEventListener('click', function() {
            const totalPages = Math.ceil(usersData.length / itemsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderPage(currentPage);
                updatePaginationControls();
            }
        });

        document.querySelector('.last').addEventListener('click', function() {
            currentPage = Math.ceil(usersData.length / itemsPerPage);
            renderPage(currentPage);
            updatePaginationControls();
        });

        function ordenarPorCodigo() {
            console.log('Ordenar por código');
            usersData.sort((a, b) => isSortedByCodeAsc ? a.code.localeCompare(b.code) : b.code.localeCompare(a.code));
            isSortedByCodeAsc = !isSortedByCodeAsc;
            renderPage(currentPage);
        }
    
        function ordenarPorNome() {
            console.log('Ordenar por nome');
            usersData.sort((a, b) => isSortedByNameAsc ? a.facts.name.localeCompare(b.facts.name) : b.facts.name.localeCompare(a.facts.name));
            isSortedByNameAsc = !isSortedByNameAsc;
            renderPage(currentPage);
        }
    
        function ordenarPorEmail() {
            console.log('Ordenar por e-mail');
            usersData.sort((a, b) => isSortedByEmailAsc ? a.facts.email.localeCompare(b.facts.email) : b.facts.email.localeCompare(a.facts.email));
            isSortedByEmailAsc = !isSortedByEmailAsc;
            renderPage(currentPage);
        }
    
        function ordenarPorData() {
            console.log('Ordenar por data');
            usersData.sort((a, b) => isSortedByDateAsc ? new Date(a.creationDate) - new Date(b.creationDate) : new Date(b.creationDate) - new Date(a.creationDate));
            isSortedByDateAsc = !isSortedByDateAsc;
            renderPage(currentPage);
        }
    
        function ordenarPorStatus() {
            console.log('Ordenar por status');
            usersData.sort((a, b) => isSortedByStatusAsc ? (a.status === b.status ? 0 : (a.status ? -1 : 1)) : (a.status === b.status ? 0 : (b.status ? -1 : 1)));
            isSortedByStatusAsc = !isSortedByStatusAsc;
            renderPage(currentPage);
        }

});
let selectedUserId = null;

function Limpar(){
    location.reload();
}

function openModal(element){
    const userId = element.getAttribute('data-id');
    selectedUserId = userId;
    window.parent.postMessage({ action: 'openMCModalzinho1', userId: userId }, '*');  
}


