let mp = document.getElementById('mp');
let gu = document.getElementById('gu');
let ta = document.getElementById('ta');
let ifr = document.getElementById('iframep');
let difr = document.getElementById('diframe');
let alt = document.getElementById('alterar');
const params = new URLSearchParams(window.location.search);
let userIdp = params.get('userId');
ifr.src = `../My-Profile/meu-pefil.html?userId=${userIdp}`;

window.addEventListener('message', function(event) {
    window.parent.postMessage(event.data, '*');
    if (event.data === 'AlterarStatusF') {
        const iframeNeto = document.getElementById('iframep');
        iframeNeto.contentWindow.postMessage('AlterarStatusFi', '*');
    }else if(event.data === 'AtualizarGerir'){
        const iframeNeto = document.getElementById('iframep');
        iframeNeto.contentWindow.postMessage('AtualizarGerir', '*');
    }
});


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
    let currentPassword = '';
    let Email = '';
    let Address = '';
    let NameUser = '';
    let Training = '';
    let Profession = '';
    let PhoneNumber = '';
    let MaritalStatus = '';
    let DateOfBirth = '';
    let Name = '';
    let Age = '';

    console.log('ID do usuário:', userIdp);
    fetchUserData(userIdp);


    function fetchUserData(userIdp) {
        fetch(`https://localhost:7299/api/user-model/get-user-id/${userIdp}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(user => {
            currentPassword = user.password;
            Name = user.facts.name;
            Age = user.facts.age;
            Email = user.facts.email;
            Address = user.facts.address;
            NameUser = user.facts.nameUser;
            Training = user.facts.training;
            Profession = user.facts.profession;
            PhoneNumber = user.facts.phoneNumber;
            MaritalStatus = user.facts.maritalStatus;
            DateOfBirth = user.facts.dateOfBirth;

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
        })
        .catch(error => {
            console.error('Houve um erro ao buscar os dados do usuário:', error);
        });
    }

    document.getElementById('btnSalvar').addEventListener('click', function(event) {
        event.preventDefault();
    
        const senhaAtual = document.getElementById('isenhaA').value;
        const novaSenha = document.getElementById('isenhaN').value;
        const isAdmin = document.querySelector('.custom-checkbox input').checked;
        const imageFile = document.getElementById('AtualizarImagem').files[0];
        let imageBase64 = previousImage;

        if (senhaAtual !== currentPassword) {
            window.alert('Senha atual incorreta!');
            return;
        }
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
                password: novaSenha,
                type: isAdmin,
                facts: {
                    name: Name,
                    age: parseInt(Age),
                    imagePath: imageBase64,
                    email: Email,
                    address: Address,
                    nameUser: NameUser,
                    training: Training,
                    profession: Profession,
                    phoneNumber: PhoneNumber,
                    maritalStatus: MaritalStatus,
                    dateOfBirth: DateOfBirth
                }
            };

            fetch(`https://localhost:7299/api/user-model/up-user-id/${userIdp}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedUser),
            })
            .then((response) => {
                if (response.ok) {
                    window.alert("Usuário atualizado com sucesso!");
                    location.reload();
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

let selectedDiv = mp;

mp.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';

function MeuPerf(){
    if (selectedDiv !== mp) {
        resetStyles();
        selectedDiv = mp;
        mp.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
        selecionaPagina();
        difr.style.width = '70%';
        alt.style.display = 'block';
    }
}

function GerenUsu(){
    if (selectedDiv !== gu) {
        resetStyles();
        selectedDiv = gu;
        gu.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
        selecionaPagina();
        difr.style.width = '100%';
        alt.style.display = 'none';
    }
}

function TriAudi(){
    if (selectedDiv !== ta) {
        resetStyles();
        selectedDiv = ta;
        ta.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
        selecionaPagina();
        difr.style.width = '100%';
        alt.style.display = 'none';
    }
}


function resetStyles() {
    mp.style.backgroundColor = 'white';
    gu.style.backgroundColor = 'white';
    ta.style.backgroundColor = 'white';
}

mp.onmouseover = function() {
    if (selectedDiv !== mp) {
        mp.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
    }
};

mp.onmouseout = function() {
    if (selectedDiv !== mp) {
        mp.style.backgroundColor = 'white';
    }
};

gu.onmouseover = function() {
    if (selectedDiv !== gu) {
        gu.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
    }
};

gu.onmouseout = function() {
    if (selectedDiv !== gu) {
        gu.style.backgroundColor = 'white';
    }
};

ta.onmouseover = function() {
    if (selectedDiv !== ta) {
        ta.style.backgroundColor = 'rgba(143, 143, 254, 0.432)';
    }
};

ta.onmouseout = function() {
    if (selectedDiv !== ta) {
        ta.style.backgroundColor = 'white';
    }
};

function selecionaPagina(){
    if(selectedDiv === mp){
        ifr.src = `../My-Profile/meu-pefil.html?userId=${userIdp}`;
    }else if(selectedDiv === gu){
        ifr.src = "../Manage-User/gerir-usuario.html";
    } else if(selectedDiv === ta){
        ifr.src = "../Trail/trilha.html";
    }
}

