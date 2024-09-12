document.getElementById('toggleBt').addEventListener('click', function() {
    this.classList.toggle('active');
});

document.getElementById('toggleBt').addEventListener('click', function() {
    const corElemento = document.getElementById('cor');
    const corAtual = window.getComputedStyle(corElemento).backgroundColor;
    const textoStatus = document.querySelector('.cont-botao p');

    if (corAtual === 'rgb(0, 182, 24)') {
        corElemento.style.backgroundColor = 'red';
        textoStatus.textContent = 'Inativo';
    } else if (corAtual === 'rgb(255, 0, 0)') {
        corElemento.style.backgroundColor = '#00b618';
        textoStatus.textContent = 'Ativo';
    }
});


var addi = document.getElementById('add-interesse');
var addv = document.getElementById('add-valor');
var adds = document.getElementById('add-sentimento');

var ci = 1;
var cv = 1;
var cs = 1;

addi.addEventListener('click', function addInteresse(){
    var newLi = document.createElement('li');
    var pi = document.getElementById('pi');

    newLi.innerHTML = `<label for="is${ci+1}" class="custom-marker">${ci+1}</label><input class="curiosidade" type="text" name="s${ci+1}" id="is${ci+1}">`;

    document.getElementById('uli').appendChild(newLi);

    pi.innerHTML = `<span>${ci+1}</span>Interesses`;

    ci++;
});

addv.addEventListener('click', function addValor(){
    var newLi = document.createElement('li');
    var pv = document.getElementById('pv');

    newLi.innerHTML = `<label for="vs${cv+1}" class="custom-marker">${cv+1}</label><input class="curiosidade" type="text" name="v${cv+1}" id="vs${cv+1}">`;

    document.getElementById('ulv').appendChild(newLi);

    pv.innerHTML = `<span>${cv+1}</span>Valores`;

    cv++;
});

adds.addEventListener('click', function addSentimento(){
    var newLi = document.createElement('li');
    var ps = document.getElementById('ps');

    newLi.innerHTML = `<label for="ss${cs+1}" class="custom-marker">${cs+1}</label><input class="curiosidade" type="text" name="s${cs+1}" id="ss${cs+1}">`;

    document.getElementById('uls').appendChild(newLi);

    ps.innerHTML = `<span>${cs+1}</span>Sentimientos`;

    cs++;
});

const closeee = document.getElementById('close-editar');

closeee.addEventListener('click', function(){
    window.parent.postMessage('closeModalEditar', '*');
});