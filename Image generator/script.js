const con = document.querySelector('.con')
const url = "https://source.unsplash.com/random/";
let row = 7;

for(let i=0; i< row*3; i++){
  const img = document.createElement('img')
  img.src= `${url}${random()}`
}

function random(){
  return `${randomnmbr()}* ${randomnmbr()}`;
}

function randomnmbr(){
return Math.floor(Math.random()*10) * 300;
}