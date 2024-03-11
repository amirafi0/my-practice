let imgbox = document.getElementById('imgbox');
let image = document.getElementById('image');
let input = document.getElementById('input');


function create(){
    image.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + input.value;



}

