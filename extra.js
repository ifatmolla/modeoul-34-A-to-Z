// console.log('HI')
// setTimeout(function cb(){
//   console.log('there')
// }, 5000)

// console.log('JSConfEU')



// const second = () => console.log("i am second");
// const third = () => console.log("i am third");

// const first = () => {
//     console.log("i am first");
//     second();
//     third();
// }
// first();

// ###################

// const second = () => console.log("i am second");
// const third = () => console.log("i am third");

// const first = () => {
//     console.log("i am first");
//     setTimeout(second, 5000)
//     third();
// }
// first();


const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))
}

const loadComments2 = () => {
    fetch('https://jsonplaceholder.typicode.com/comments');
    .then(res => res.json())
    .then(data => console.log(data))
}