







let input = document.querySelector('input');
let eye = document.querySelector('.icon');

eye.addEventListener('click', ()=>{
  if(input.type ==='password'){
    input.type = 'text'
  } else{
    input.type ='password'
  }
})