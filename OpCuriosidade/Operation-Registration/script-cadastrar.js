document.addEventListener("DOMContentLoaded", function() {

    let userId = null;
    let codeId = null;
    let renderImg = null;

    let addi = document.getElementById('add-interesse');
    let addv = document.getElementById('add-valor');
    let adds = document.getElementById('add-sentimento');
    let removei = document.getElementById('remove-interesse');
    let removev = document.getElementById('remove-valor');
    let removes = document.getElementById('remove-sentimento');

    let ci = 0;
    let cv = 0;
    let cs = 0;

    addi.addEventListener('click', function addInteresse(){
        let newLi = document.createElement('li');
        let pi = document.getElementById('pi');

        newLi.innerHTML = `<label for="is${ci+1}" class="custom-marker">${ci+1}</label><input class="curiosidade" type="text" name="s${ci+1}" id="is${ci+1}">`;

        document.getElementById('uli').appendChild(newLi);

        pi.innerHTML = `<span>${ci+1}</span>Interesses`;

        ci++;
    });

    addv.addEventListener('click', function addValor(){
        let newLi = document.createElement('li');
        let pv = document.getElementById('pv');

        newLi.innerHTML = `<label for="vs${cv+1}" class="custom-marker">${cv+1}</label><input class="curiosidade" type="text" name="v${cv+1}" id="vs${cv+1}">`;

        document.getElementById('ulv').appendChild(newLi);

        pv.innerHTML = `<span>${cv+1}</span>Valores`;

        cv++;
    });

    adds.addEventListener('click', function addSentimento(){
        let newLi = document.createElement('li');
        let ps = document.getElementById('ps');

        newLi.innerHTML = `<label for="ss${cs+1}" class="custom-marker">${cs+1}</label><input class="curiosidade" type="text" name="s${cs+1}" id="ss${cs+1}">`;

        document.getElementById('uls').appendChild(newLi);

        ps.innerHTML = `<span>${cs+1}</span>Sentimientos`;

        cs++;
    });

    removei.addEventListener('click', function removeInteresse() {
        let ul = document.getElementById('uli');
        if (ul.children.length > 0) {
            ul.removeChild(ul.lastChild);
            ci--;
            document.getElementById('pi').innerHTML = `<span>${ci}</span> Interesses`;
        }
    });

    removev.addEventListener('click', function removeValor() {
        let ul = document.getElementById('ulv');
        if (ul.children.length > 0) {
            ul.removeChild(ul.lastChild);
            cv--;
            document.getElementById('pv').innerHTML = `<span>${cv}</span> Valores`;
        }
    });

    removes.addEventListener('click', function removeSentimento() {
        let ul = document.getElementById('uls');
        if (ul.children.length > 0) {
            ul.removeChild(ul.lastChild);
            cs--;
            document.getElementById('ps').innerHTML = `<span>${cs}</span> Sentimentos`;
        }
    });

    document.getElementById('procurarButton').addEventListener('click', function() {

        codeId = document.getElementById('iProcurar').value;

        fetch(`https://localhost:7299/api/user-model/api/users`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then(user => {
            user.reverse().forEach(users => {
                if(users.code == codeId){
                    userId = users.id;
                }
            });
            if(userId == null){
                alert('Usuário não encontrado');
            }else{
                pegardados();
            }
        })
        .catch(error => {
            console.error('Houve um erro ao buscar os dados dos usuários:', error);
        });

        function pegardados(){
            console.log('ola:');
            fetch(`https://localhost:7299/api/user-model/get-user-id/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(user => {
                if(user.operation == null){

                    const formattedDate = user.facts.dateOfBirth.split('T')[0];
                    document.getElementById('inome').value = user.facts.name;
                    document.getElementById('iidade').value = user.facts.age;
                    document.getElementById('ie-mail').value = user.facts.email;
                    document.getElementById('inome-usuário').value = user.facts.nameUser;
                    document.getElementById('idata-nascimento').value = formattedDate
                    document.getElementById('iestadocivil').value = user.facts.maritalStatus;
                    document.getElementById('iendereco').value = user.facts.address;
                    document.getElementById('iprofissao').value = user.facts.profession;
                    document.getElementById('iformacao').value = user.facts.training;

                    if (user.facts.imagePath) {
                        renderImg = user.facts.imagePath;
                        document.getElementById('PhotoUser').src = user.facts.imagePath;
                        let img = document.getElementById('PhotoUser');
                        img.style.display = 'block';
                        let containerImg = document.getElementById('containerImg');
                        let spanPerson = document.getElementById('spanPerson');
                        containerImg.style.backgroundColor = 'transparent';
                        containerImg.style.border = '2px solid #6b1bc6';
                        spanPerson.style.display = 'none';
                    }else{
                        renderImg = null;
                        let img = document.getElementById('PhotoUser');
                        containerImg.style.backgroundColor = '#6b1bc65e';
                        containerImg.style.border = 'none';
                        spanPerson.style.display = 'block';
                        img.style.display = 'none';
                    }

                }else{
                    alert('Usuário já possui operação cadastrada');
                    userId = null;
                    return;
                }
                
            })
            .catch(error => {
                console.error('Houve um erro ao buscar os dados do usuário:', error);
            });

        };

        document.getElementById('cadastrarOp').addEventListener('click', function() {

            const newOperation = {
                Interest: [],
                Feeling: [],
                Value: []
            };

            const interestElements = document.querySelectorAll('#uli .curiosidade');
            interestElements.forEach(input => {
                if (input.value) {
                    newOperation.Interest.push({ Interests: input.value });
                }
            });

            const feelingElements = document.querySelectorAll('#uls .curiosidade');
            feelingElements.forEach(input => {
                if (input.value) {
                    newOperation.Feeling.push({ Feelings: input.value });
                }
            });

            const valueElements = document.querySelectorAll('#ulv .curiosidade');
            valueElements.forEach(input => {
                if (input.value) {
                    newOperation.Value.push({ Values: input.value });
                }
            });

            fetch(`https://localhost:7299/api/operation-model/post-operation/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newOperation)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                return response.json();
            })
            .then(data => {
                console.log('Operação cadastrada com sucesso:', data);
                alert('Operação cadastrada com sucesso!');
                location.reload();
            })
            .catch(error => {
                console.error('Houve um erro ao cadastrar a operação:', error);
                alert('Houve um erro ao cadastrar a operação.');
            });
        });

    });
});