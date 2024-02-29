let nmbr = 0;

let show = document.querySelector('.show');
let btn = document.querySelector('.btn')

btn.addEventListener('click', ()=>{
    nmbr++;

    show.innerHTML = nmbr;
});

let dec = document.querySelector('.dec');

dec.addEventListener('click', ()=>{
    nmbr--;

    show.innerHTML = nmbr;
})