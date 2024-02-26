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


let arr = [
    {name: 'rafi',
     id: '11',
     address: 'Dhaka',
     phone : '019'},

    {name: 'hasan',
     id: '20',
     address: 'Cumilla',
     phone : '017'},

    {name: 'Kamrul',
     id: '31',
     address: 'Chitagong',
     phone : '014'},
]

arr[3]=[{
    name: 'ami',
     id: '50',
     address: 'chi',
     phone : '016'
}]


console.log(arr)





    






