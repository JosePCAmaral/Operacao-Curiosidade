var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');

btn1.addEventListener('click', function() {
    window.parent.postMessage('openMCModalzinho1', '*');
});

btn2.addEventListener('click', function() {
    window.parent.postMessage('openMCModalzinho2', '*');
});

btn3.addEventListener('click', function() {
    window.parent.postMessage('openMCModalzinho3', '*');
});

btn4.addEventListener('click', function() {
    window.parent.postMessage('openMCModalzinho4', '*');
});

btn5.addEventListener('click', function() {
    window.parent.postMessage('openMCModalzinho5', '*');
});

btn6.addEventListener('click', function() {
    window.parent.postMessage('openMCModalzinho6', '*');
});

