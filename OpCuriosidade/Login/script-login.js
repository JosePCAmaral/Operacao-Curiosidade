let usersData = [];

document.addEventListener("DOMContentLoaded", function() {
    fetch('https://localhost:7299/api/user-model/api/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(users => {
            usersData = users;
        })
        .catch(error => {
            console.error('Houve um erro ao buscar os usuários:', error);
        });
});

function Validacao() {
    const emailInput = document.getElementById('iemail').value;
    const senhaInput = document.getElementById('isenha').value;

    const user = usersData.find(user => user.facts.email === emailInput);

    if (user) {
        if (user.password === senhaInput) {
            window.location.href = `../Home/home.html?userId=${user.id}`;
        } else {
            alert('Senha incorreta. Tente novamente.');
        }
    } else {
        alert('E-mail não encontrado. Verifique o e-mail inserido.');
    }
}

let count = 1;
document.getElementById('radio1').checked = true;

let autoSlide = setInterval(nextImage, 2000);

function manualNavigation(event) {
    clearInterval(autoSlide);
    const clickedRadio = event.target.getAttribute('for');
    count = parseInt(clickedRadio.replace('radio', ''));
    document.getElementById(clickedRadio).checked = true;
    autoSlide = setInterval(nextImage, 2000);
}

document.querySelectorAll('.btn-manual').forEach(button => {
    button.addEventListener('click', manualNavigation);
});

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }
    document.getElementById('radio' + count).checked = true;
}
