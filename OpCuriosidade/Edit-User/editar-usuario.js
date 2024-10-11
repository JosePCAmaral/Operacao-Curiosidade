document.addEventListener("DOMContentLoaded", function() {

    let userId = null;
    let currentPassword = '';

    window.addEventListener('message', function(event) {
        if (event.data.action === 'recebeUserId') {
            userId = event.data.userId;
            console.log('user recebido:', event.data.userId);
            fetchUserData(userId);
        }
    });

    function fetchUserData(userId) {
        fetch(`https://localhost:7299/api/user-model/get-user-id/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(user => {
            currentPassword = user.password;
            const formattedDate = user.facts.dateOfBirth.split('T')[0];
            document.getElementById('iName').value = user.facts.name;
            document.getElementById('iAge').value = user.facts.age;
            document.getElementById('iEmail').value = user.facts.email;
            document.getElementById('iNameUser').value = user.facts.nameUser;
            document.getElementById('iDateOfBirth').value = formattedDate
            document.getElementById('iMaritalStatus').value = user.facts.maritalStatus;
            document.getElementById('iAddress').value = user.facts.address;
            document.getElementById('iProfession').value = user.facts.profession;
            document.getElementById('iTraining').value = user.facts.training;
            document.getElementById('iPhoneNumber').value = user.facts.phoneNumber;

            document.getElementById('iType').checked = user.type === true;
            console.log('user:', user);
        })
        .catch(error => {
            console.error('Houve um erro ao buscar os dados do usuário:', error);
        });
    }

    const form = document.getElementById('userForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const senhaAtual = document.getElementById('iPassword').value;

        if (senhaAtual !== currentPassword) {
            window.alert('Senha atual incorreta!');
            return;
        }

        const name = document.getElementById('iName').value;
        const email = document.getElementById('iEmail').value;
        const age = document.getElementById('iAge').value;
        const nameUser = document.getElementById('iNameUser').value;
        const dataOfBirth = document.getElementById('iDateOfBirth').value;
        const address = document.getElementById('iAddress').value;
        const phone = document.getElementById('iPhoneNumber').value;
        const estadoCivil = document.getElementById('iMaritalStatus').value;
        const profissao = document.getElementById('iProfession').value;
        const novaSenha = document.getElementById('iNewPassword').value;
        const type = document.getElementById('iType').checked;
        const forma = document.getElementById('iTraining').value;
    
        const updatedUser = {
            type: type,
            password: novaSenha,
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
        };

        console.log(updatedUser);

        fetch(`https://localhost:7299/api/user-model/up-user-id/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
        })
        .then((response) => {
            console.log(response);
            if (response.ok) {
                window.alert("Usuário atualizado com sucesso");
                location.reload();
                closeEditarUsu();
            } else {
                return response.text().then((text) => {
                    throw new Error(text);
                });
            }
        })
        .catch((error) => {
            console.error("Erro ao atualizar usuário:", error);
        });
    });
});

function closeEditarUsu(){
    window.parent.postMessage('CloseModalEditarUsuario', '*');
}