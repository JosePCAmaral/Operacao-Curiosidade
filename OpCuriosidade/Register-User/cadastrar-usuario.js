let containerImg = document.getElementById('containerImg');
let spanPerson = document.getElementById('spanPerson');

document.getElementById('AdicionarImg').addEventListener('change', function(event) {
    const file = event.target.files[0];
    containerImg.style.backgroundColor = 'transparent';
    containerImg.style.border = '2px solid #6b1bc6';
    spanPerson.style.display = 'none';

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const imgElement = document.getElementById('personImage');
            imgElement.src = e.target.result;
            imgElement.style.display = 'block';
        };

        reader.readAsDataURL(file);
    }
});

document.getElementById('removeImage').addEventListener('click', function() {
    const imgElement = document.getElementById('personImage');
    imgElement.src = ''; 
    imgElement.style.display = 'none';
    containerImg.style.backgroundColor = '#6b1bc65e';
    containerImg.style.border = 'none';
    spanPerson.style.display = 'block';

    document.getElementById('AdicionarImg').value = '';
});

function FecharCadastrar(){
    window.parent.postMessage('CloseModalCadastrarUsuario', '*');
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('userForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

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

        const imageFile = document.getElementById('AdicionarImg').files[0];
        let imageBase64 = '';

        if (imageFile) {
            const reader = new FileReader();

            reader.onloadend = function() {
                imageBase64 = reader.result;

                const newUser = {
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
                        training: forma,
                        imagePath: imageBase64
                    }
                };

                console.log('newUser com img:', newUser.facts.imagePath);

                fetch('https://localhost:7299/api/user-model/api/users-post', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                .then(response => {
                    if (response.status === 400) {
                        return response.text().then(errorMessage => {
                            throw new Error(errorMessage);
                        });
                    }
                    if (!response.ok) {
                        throw new Error(`Erro: ${response.status} - ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Usuário criado com sucesso:', data);
                    window.alert('Usuário criado com sucesso!');
                    location.reload();
                })
                .catch(error => {
                    console.error('Erro ao criar o usuário:', error);
                    window.alert('Erro: ' + error.message);
                });
            };

            reader.readAsDataURL(imageFile);
        } else {
            const newUser = {
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
                    training: forma,
                    imagePath: null
                }
            };

            console.log('newUser:', newUser);

            fetch('https://localhost:7299/api/user-model/api/users-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(response => {
                if (response.status === 400) {
                    return response.text().then(errorMessage => {
                        throw new Error(errorMessage);
                    });
                }
                if (!response.ok) {
                    throw new Error(`Erro: ${response.status} - ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Usuário criado com sucesso:', data);
                window.alert('Usuário criado com sucesso!');
                location.reload();
            })
            .catch(error => {
                console.error('Erro ao criar o usuário:', error);
                window.alert('Erro: ' + error.message);
            });
        }
    });
});