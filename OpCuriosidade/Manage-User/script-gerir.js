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
                const listItem = document.createElement('li.user');
                listItem.innerHTML = `<div class="box">
                            <input type="checkbox" name="selecionar" id="selecionar" class="checkbox-item">
                        </div>
                        <div class="container-dados" id="code">
                            <p class="codigo">24-00016</p>
                        </div>
                        <div class="container-dados" id="name">
                            <p class="nome">Rosangela Maria Pereira</p>
                        </div>
                        <div class="container-dados" id="email">
                            <p class="email">rosangela.pereira@fakemail.br</p>
                        </div>
                        <div class="container-dados" id="date">
                            <p class="data">04/09/2024</p>
                        </div>
                        <div class="container-dados" id="status">
                            <p class="status" id="statusA">Ativo</p>
                        </div>
                        <div class="container-dados" id="type">
                            <p class="tipo" id="typeO">Operador</p>
                        </div>
                        <div class="container-dados" id="button">
                            <p class="botao" id="btn"><span class="material-symbols-outlined">more_vert</span>Detalhes</p>
                        </div>`;
                userList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Houve um erro ao buscar os usuários:', error);
        });

});

function marcarTodos(checkbox) {
    var checkboxes = document.querySelectorAll('.checkbox-item');
    
    checkboxes.forEach(function(item) {
        item.checked = checkbox.checked;
    });
}



const cad = document.getElementById('cadastrarUsu');

cad.addEventListener('click', function(){
    window.parent.postMessage('OpenModalCadastrarUsuario', '*');
});

var btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    window.parent.postMessage('openAtivarInativarModal', '*');
});

var btnStatus = document.getElementById('statusA');

btnStatus.addEventListener('click', function() {
    console.log('teste');
    window.parent.postMessage('openMCModalzinhoInativo', '*');
});