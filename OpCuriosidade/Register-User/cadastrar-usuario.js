const closeEditarUser = document.getElementById('close-editar');

closeEditarUser.addEventListener('click', function(){
    window.parent.postMessage('CloseModalCadastrarUsuario', '*');
});

document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById('userForm');

    form.addEventListener('submit', function(event) {

        const name = document.getElementById('iName').value;
        const email = document.getElementById('iEmail').value;
        const age = document.getElementById('iAge').value;
        const nameUser = document.getElementById('iNameUser').value;
        const dataOfBirth = document.getElementById('iDateOfBirth').value;
        const address = document.getElementById('iAddress').value;
        const phone = document.getElementById('iPhoneNumber').value;
        const estadoCivil = document.getElementById('iMaritalStatus').value;
        const profissao = document.getElementById('iProfession').value;
        const senha = document.getElementById('iPassword').value;
        const type = document.getElementById('iType').checked;
        const forma = document.getElementById('iTraining').value;

        const newUser = {
            newUser: {
                type: type,
                password: senha,
                facts: {
                    name: name,
                    age: parseInt(age),
                    nameUser: nameUser,
                    email: email,
                    dateOfBirth: dataOfBirth,
                    maritalStatus: estadoCivil,
                    address: address,
                    profession: profissao,
                    phoneNumber: phone,
                    training: forma
                }
            }
        };
        console.log(newUser.newUser);

        fetch('https://localhost:7299/api/user-model/api/users-post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(newUser.newUser)
        })
        .then(response => {
            console.log(response);
            if (!response.ok) {
                
                throw new Error('Falha na requisição POST');
            }
            return response.json();
        })
        .then(data => {
            console.log('Usuário criado com sucesso:', data);
            window.alert('Usuário criado com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao criar o usuário:', error);
        });
    });
});