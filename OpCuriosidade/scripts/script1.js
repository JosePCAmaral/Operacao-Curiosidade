let count = 1;
document.getElementById('radio1').checked = true;
var b1 = document.getElementById('btn1')
var b2 = document.getElementById('btn2')
var b3 = document.getElementById('btn3')
var b4 = document.getElementById('btn4')

setInterval(function(){
    nextImage();
}, 2000)

function nextImage(){
    count++;
    if(count > 4){
        count = 1;
    }

    document.getElementById('radio'+count).checked = true;
}

