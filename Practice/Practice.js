// console.log("Hello world");
// var number = NaN;
// console.log(typeof number);

// var var1 = {
//     name: 'max'
// };

// var luckyman = 2;
// switch (luckyman) {
//     case 1:
//         console.log('1');
//         break;
//     case 2:
//         console.log('2');
//         break;
//     default:
//         console.log('default');
//         break; 
// }
// function man1(age,name) {
//     console.log('hi' + age + name);
// }
// var man2 = man1;

// var man3 = function(age,name) {
//     console.log('hi' + age + name);
// }

// var man4 = (age,name) => {
//     console.log('hi' + age + name);
// }
// const man = {
//     name: "manny",
//     age: 45,
//     greet: () => {
//         console.log('hi my name is ' + this.name);
//     }
// }

// man.greet();

// var arr = [1,2,3,4,5, 'age', 'for']
// for (let hobby of arr) {
//     console.log('I like ' + hobby);
// }

// console.log(arr.map( ar => ar + ' is what I like'));

// const hold = setTimeout(() => {
//     console.log("first delay");
// }, 5000);



const funnyPause = (joke, wait) => {
    setTimeout(() => {
        joke();
    }, wait);
  
}

console.log("Knocknock");
setTimeout(() => {
    console.log("A broken pencil");
    funnyPause(() => {
        console.log("...");
    }, 3000);
    funnyPause(() => {
        console.log("nevermind, It's pointless");
    }, 6000);
    }, 2500);