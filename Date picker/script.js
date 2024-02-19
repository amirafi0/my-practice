let date = document.querySelector('.date');


date.addEventListener('click', ()=>{

    let newDate = new Date();


    let result = document.querySelector('.result');

    result.innerHTML = newDate;


    let reset = document.querySelector('.reset');


reset.addEventListener('click', ()=>{

    result.innerHTML = '';
    
})

    
});










    






