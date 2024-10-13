

document.addEventListener("DOMContentLoaded", function() {

    const params = new URLSearchParams(window.location.search);
    const userIdp = params.get('userId');
    console.log('userIdddo:', userIdp);


    console.log('Executando lógica com UserId:', userIdp);

    fetch(`https://localhost:7299/api/user-model/get-user-id/${userIdp}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then(user => {
            console.log('Dados do usuário:', user);
            const caixaDadosSection = document.querySelector('.CaixaDados');

            // Cria a div dados e adiciona à seção CaixaDados
            const dadosDiv = document.createElement('div');
            dadosDiv.className = 'dados';

            let datab = user.facts.dateOfBirth.substring(0, 10);
            let partesDataB = datab.split('-');
            let dataFormatadaB = `${partesDataB[2]}/${partesDataB[1]}/${partesDataB[0]}`;
            let data = user.creationDate.substring(0, 10);
            let partesData = data.split('-');
            let dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;

            // Preenche a div com os dados do usuário
            dadosDiv.innerHTML = `
                <div class="dados">
                <div class="flex">
                    <div class="dado">
                        <p class="P">Nome</p>
                        <div class="R" id="nome">
                            <p>${user.facts.name}</p>
                        </div>
                    </div>
                    <div class="dado">
                        <p class="P">Idade</p>
                        <div class="R" id="idade">
                            <p>${user.facts.age}</p>
                        </div>
                    </div>
                    <div class="dado">
                        <p class="P">E-mail</p>
                        <div class="R" id="email">
                            <p>${user.facts.email}</p>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="dado">
                        <p class="P">Nome de Usuário</p>
                        <div class="R" id="nomeusu">
                            <p>${user.facts.nameUser}</p>
                        </div>
                    </div>
                    <div class="dado">
                        <p class="P">Data de Nascimento</p>
                        <div class="R" id="datanasc">
                            <p>${dataFormatadaB}</p>
                        </div>
                    </div>
                    <div class="dado">
                        <p class="P">Estado Civil</p>
                        <div class="R" id="esatdociv">
                            <p>${user.facts.maritalStatus}</p>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="dado">
                        <p class="P">Data de Criação</p>
                        <div class="R" id="datanasc2">
                            <p>${dataFormatada}</p>
                        </div>
                    </div>
                    <div class="dado">
                        <p class="P">Endereço</p>
                        <div class="R" id="endereco">
                            <p>${user.facts.address}</p>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div  class="dado">
                        <p class="P">Formação Acadêmica</p>
                        <div class="R" id="prof">
                            <p>${user.facts.training}</p>
                        </div>
                    </div>
                    <div class="dado">
                        <p class="P">Ocupação/Profissão</p>
                        <div  class="R" id="forma">
                            <p>${user.facts.profession}</p>
                        </div>
                    </div>
                </div>
            `;
            caixaDadosSection.appendChild(dadosDiv);

            user.operation.interrest.forEach(interrest => {
                const boxOperacoes = document.querySelector('.boxInteresses');

                const daDiv = document.createElement('div');
                daDiv.className = 'da';
                daDiv.innerHTML = `
                    <p>${interrest.interrests}</p>
                    <span class="material-symbols-outlined">close</span>
            `;
            boxOperacoes.appendChild(daDiv);
            });
        })
        .catch(error => {
            console.error('Houve um erro ao buscar os dados do usuário:', error);
        });
});

