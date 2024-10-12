let containerImg = document.getElementById('containerImg');
let spanPerson = document.getElementById('spanPerson');
let previousImage = null;

document.getElementById('AtualizarImagem').addEventListener('change', function(event) {
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

    document.getElementById('AtualizarImagem').value = '';
    previousImage = null;
});

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

            if (user.facts.imagePath) {
                previousImage = user.facts.imagePath;
                document.getElementById('personImage').src = user.facts.imagePath;
                let img = document.getElementById('personImage');
                img.style.display = 'block';
                let containerImg = document.getElementById('containerImg');
                let spanPerson = document.getElementById('spanPerson');
                containerImg.style.backgroundColor = 'transparent';
                containerImg.style.border = '2px solid #6b1bc6';
                spanPerson.style.display = 'none';
            }else{
                previousImage = null;
                let img = document.getElementById('personImage');
                containerImg.style.backgroundColor = '#6b1bc65e';
                containerImg.style.border = 'none';
                spanPerson.style.display = 'block';
                img.style.display = 'none';
            }

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
    
        const imageFile = document.getElementById('AtualizarImagem').files[0];
        let imageBase64 = previousImage;

        if (imageFile) {
            const reader = new FileReader();
            reader.onloadend = function() {
                imageBase64 = reader.result;
                updateUser();
            };
            reader.readAsDataURL(imageFile);
        } else {
            if (!previousImage) {
                imageBase64 = null;
            }
            updateUser();
        }

        function updateUser() {
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
                    training: forma,
                    imagePath: imageBase64
                }
            };

            console.log('imagemuser:', updatedUser.imageBase64);

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
        }
    });
});

function closeEditarUsu(){
    window.parent.postMessage('CloseModalEditarUsuario', '*');
}