function loaderUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

async function loadUserAsync () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

const loadUserArrow = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data)
}


const loaderUserCatch = async() =>{
   try{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data)
   }
   catch(error){
    
   }
}




console.log('HI')
setTimeout(function cb(){
  console.log('there')
}, 5000)

// console.log('JSConfEU')