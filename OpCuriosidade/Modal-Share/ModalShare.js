const btnclosemodalCompart = document.getElementById('closeModalCompart')


btnclosemodalCompart.addEventListener('click', function(){
        window.parent.postMessage('closeModalCompartilhar', '*');
});

const elementsV = document.querySelectorAll('[id^="v"]');
const elementsE = document.querySelectorAll('[id^="e"]');

var abrirModalViewEdit = document.getElementsByClassName('ModalViewEdit')[0];
var abrirModalViewEditComport1 = document.getElementsByClassName('comporta1')[0];
var abrirModalViewEditComport2 = document.getElementsByClassName('comporta2')[0];
var abrirModalViewEditComport3 = document.getElementsByClassName('comporta3')[0];

function abrirFecharModal(modal1, modal2) {
    if (modal1.style.display === 'block') {
        modal1.style.display = 'none';
        modal2.style.display = 'none';
    } else {
        modal1.style.display = 'block';
        modal2.style.display = 'block';
    }
}

function toggleDisplay(vElement, eElement, comportModal) {
    vElement.addEventListener('click', function() {
        abrirFecharModal(abrirModalViewEdit, comportModal);
        vElement.style.display = 'block';
        eElement.style.display = 'none';
    });

    eElement.addEventListener('click', function() {
        abrirFecharModal(abrirModalViewEdit, comportModal);
        vElement.style.display = 'none';
        eElement.style.display = 'block';
    });
}

for (let i = 1; i <= 3; i++) {
    let vElement = document.getElementById(`v${i}`);
    let eElement = document.getElementById(`e${i}`);

    let comportModal;
    if (i === 1) {
        comportModal = abrirModalViewEditComport1;
    } else if (i === 2) {
        comportModal = abrirModalViewEditComport2;
    } else if (i === 3) {
        comportModal = abrirModalViewEditComport3;
    }

    toggleDisplay(vElement, eElement, comportModal);
}

const elementsVUpper = document.querySelectorAll('[id^="V"]');
const elementsEUpper = document.querySelectorAll('[id^="E"]');

elementsVUpper.forEach(el => {
    el.addEventListener('click', function() {
        const index = el.id.charAt(1); 
        let comportModal;

        if (index === '1') {
            comportModal = abrirModalViewEditComport1;
        } else if (index === '2') {
            comportModal = abrirModalViewEditComport2;
        } else if (index === '3') {
            comportModal = abrirModalViewEditComport3;
        }

        abrirModalViewEdit.style.display = 'none';
        comportModal.style.display = 'none';

        const vElement = document.getElementById(`v${index}`);
        const eElement = document.getElementById(`e${index}`);
        vElement.style.display = 'block';
        eElement.style.display = 'none';
    });
});

elementsEUpper.forEach(el => {
    el.addEventListener('click', function() {
        const index = el.id.charAt(1);
        let comportModal;

        if (index === '1') {
            comportModal = abrirModalViewEditComport1;
        } else if (index === '2') {
            comportModal = abrirModalViewEditComport2;
        } else if (index === '3') {
            comportModal = abrirModalViewEditComport3;
        }

        abrirModalViewEdit.style.display = 'none';
        comportModal.style.display = 'none';

        const vElement = document.getElementById(`v${index}`);
        const eElement = document.getElementById(`e${index}`);
        vElement.style.display = 'none';
        eElement.style.display = 'block';
    });
});