document.addEventListener("DOMContentLoaded", function() {
    let userId = null;
    let renderImg = null; // Declare renderImg

    let addi = document.getElementById('add-interesse');
    let addv = document.getElementById('add-valor');
    let adds = document.getElementById('add-sentimento');
    let removei = document.getElementById('remove-interesse');
    let removev = document.getElementById('remove-valor');
    let removes = document.getElementById('remove-sentimento');

    let ci = 0; // Contador para interesses
    let cv = 0; // Contador para valores
    let cs = 0; // Contador para sentimentos

    // Função para adicionar interesses
    addi.addEventListener('click', function addInteresse() {
        let newLi = document.createElement('li');
        let pi = document.getElementById('pi');
        newLi.innerHTML = `<label for="is${ci+1}" class="custom-marker">${ci+1}</label><input class="curiosidade" type="text" name="s${ci+1}" id="is${ci+1}">`;
        document.getElementById('uli').appendChild(newLi);
        pi.innerHTML = `<span>${ci+1}</span> Interesses`;
        ci++;
    });

    // Função para adicionar valores
    addv.addEventListener('click', function addValor() {
        let newLi = document.createElement('li');
        let pv = document.getElementById('pv');
        newLi.innerHTML = `<label for="vs${cv+1}" class="custom-marker">${cv+1}</label><input class="curiosidade" type="text" name="v${cv+1}" id="vs${cv+1}">`;
        document.getElementById('ulv').appendChild(newLi);
        pv.innerHTML = `<span>${cv+1}</span> Valores`;
        cv++;
    });

    // Função para adicionar sentimentos
    adds.addEventListener('click', function addSentimento() {
        let newLi = document.createElement('li');
        let ps = document.getElementById('ps');
        newLi.innerHTML = `<label for="ss${cs+1}" class="custom-marker">${cs+1}</label><input class="curiosidade" type="text" name="s${cs+1}" id="ss${cs+1}">`;
        document.getElementById('uls').appendChild(newLi);
        ps.innerHTML = `<span>${cs+1}</span> Sentimentos`;
        cs++;
    });

    // Remoção de interesses, valores e sentimentos
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

    // Listener de mensagem
    window.addEventListener('message', function(event) {
        if (event.data.action === 'passandoIdParaEditarOp') {
            userId = event.data.userId;
            buscardados();
        }
    });

    // Função para buscar dados
    function buscardados() {
        fetch(`https://localhost:7299/api/operation-model/get-operation-id/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro na requisição');
                }
                return response.json();
            })
            .then(operation => {
                // Verifique se facts existe e extraia as informações
                if (operation.facts) {
                    const formattedDate = operation.facts.dateOfBirth ? operation.facts.dateOfBirth.split('T')[0] : '';
                    document.getElementById('inome').value = operation.facts.name;
                    document.getElementById('iidade').value = operation.facts.age;
                    document.getElementById('ie-mail').value = operation.facts.email;
                    document.getElementById('inome-usuário').value = operation.facts.nameUser;
                    document.getElementById('idata-nascimento').value = formattedDate;
                    document.getElementById('iestadocivil').value = operation.facts.maritalStatus;
                    document.getElementById('iendereco').value = operation.facts.address;
                    document.getElementById('iprofissao').value = operation.facts.profession;
                    document.getElementById('iformacao').value = operation.facts.training;

                    if (operation.facts.imagePath) {
                        renderImg = operation.facts.imagePath;
                        document.getElementById('PhotoUser').src = operation.facts.imagePath;
                        document.getElementById('PhotoUser').style.display = 'block';
                        document.getElementById('containerImg').style.backgroundColor = 'transparent';
                        document.getElementById('containerImg').style.border = '2px solid #6b1bc6';
                        document.getElementById('spanPerson').style.display = 'none';
                    } else {
                        renderImg = null;
                        document.getElementById('PhotoUser').style.display = 'none';
                        document.getElementById('containerImg').style.backgroundColor = '#6b1bc65e';
                        document.getElementById('containerImg').style.border = 'none';
                        document.getElementById('spanPerson').style.display = 'block';
                    }
                }
            })
            .catch(error => {
                console.error('Houve um erro ao buscar os dados dos usuários:', error);
            });
    }

    // Função para atualizar a operação
    document.getElementById('EditarOp').addEventListener('click', function() {
        const operationId = userId;

        const updatedOperation = {
            Interest: [],
            Feeling: [],
            Value: []
        };

        const interestElements = document.querySelectorAll('#uli .curiosidade');
        interestElements.forEach((input, index) => {
            if (input.value) {
                updatedOperation.Interest.push({ 
                    Interests: input.value, 
                    idInt: index + 1 // Associar o índice como idInt
                });
            }
        });

        const feelingElements = document.querySelectorAll('#uls .curiosidade');
        feelingElements.forEach((input, index) => {
            if (input.value) {
                updatedOperation.Feeling.push({ 
                    Feeling: input.value, 
                    idFeel: index + 1 // Associar o índice como idFeel
                });
            }
        });

        const valueElements = document.querySelectorAll('#ulv .curiosidade');
        valueElements.forEach((input, index) => {
            if (input.value) {
                updatedOperation.Value.push({ 
                    Values: input.value, 
                    idVal: index + 1 // Associar o índice como idVal
                });
            }
        });

        console.log(updatedOperation);

        fetch(`https://localhost:7299/api/operation-model/${operationId}`, { // Alterado para o endpoint correto
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedOperation)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao atualizar a operação');
            }
            return response.json();
        })
        .then(data => {
            console.log('Operação atualizada com sucesso:', data);
            alert('Atualização bem-sucedida!');
        })
        .catch(error => {
            console.error('Houve um erro ao atualizar a operação:', error);
        });
    });
    
    document.getElementById('close-editar').addEventListener('click', function() {
        location.reload();
        window.parent.postMessage('closeModalEditar', '*');
    });
});
