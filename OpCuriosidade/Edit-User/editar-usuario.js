document.addEventListener("DOMContentLoaded", function() {
    let userId = null;
    window.addEventListener('message', function(event) {
        if (event.data.action === 'recebeUserId') {
            userId = event.data.userId;
            console.log('user recebido:', event.data.userId);
        }
    });

    fetch(`https://localhost:7299/api/user-model/get-user-id/${userId}`, {
        method: 'GET'
    })

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

        fetch(`https://localhost:7299/api/user-model/up-user-id/${userId}`, {
            method: 'PUT'
        })
    });
});

function closeEditarUsu(){
    window.parent.postMessage('CloseModalEditarUsuario', '*');
}