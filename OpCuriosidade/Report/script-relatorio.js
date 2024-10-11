document.addEventListener("DOMContentLoaded", function() {

    const itemsPerPage = 6;
    let currentPage = 1;
    let usersData = [];

    document.getElementById('filtrar').addEventListener('click', function() {
        const status = null;
        const tipo = document.getElementById('itipo').value;
        const code = document.getElementById('icode').value;
        const period = document.getElementById('iperiodo').value;
        const periodAte = document.getElementById('iperiodoAte').value;
        
        const filters = {
            status: status,
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
                usersData = users;
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
            usersData = users;
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
            <div onclick="PorCodigo()"><p>Código<span class="material-symbols-outlined">swap_vert</span></p></div>
            <div id="nome" onclick="PorNome()"><p>Nome<span class="material-symbols-outlined">swap_vert</span></p></div>
            <div id="email" onclick="PorEmail()"><p>E-mail<span class="material-symbols-outlined">swap_vert</span></p></div>
            <div id="data" onclick="PorData()"><p>Data de criação<span class="material-symbols-outlined">swap_vert</span></p></div>
            <div id="tipo" onclick="PorTipo()"><p>Tipo<span class="material-symbols-outlined">swap_vert</span></p></div>
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
                                <div class="container-dados" id="type">
                                    <p class="tipo" id="${typeId}">${typeText}</p>
                                </div>`;
        
                    userList.appendChild(listItem);
                });
            }
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

});

function voltar() {
    window.parent.postMessage('abrirRelatorios', '*');
}

function Limpar(){
    location.reload();
}