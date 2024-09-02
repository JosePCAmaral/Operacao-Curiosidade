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
