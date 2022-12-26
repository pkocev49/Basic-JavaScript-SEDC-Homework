

// HOME WORK PART #1

// let story = ['name', 'mood', 'activity']
// function tellStory(name, mood, activity) {
//     story.push(name, mood, activity)
//     console.log(`This is ${name}.${name} is a nice person.Today they are ${mood}.They are ${activity} all day.The end.`)
// }
// tellStory("Pavel", "good", "coding")


//  HOME WORK PART #2

//  const numberArr = []

//  function calculateSum(numberArr) {
//      let sum = 0;
//      for (i = 0; i < numberArr.length; i++) {
//          if (validateNumber(numberArr[i])) {
//              return `Theres is an invalid number in the array`;
//          }
//          sum += numberArr[i];
//      }

//      return sum;
//  }

//  function validateNumber(num) {
//      if (typeof num !== "number")
//          return true;
//  }

//  console.log(calculateSum([1, 6, 5, 4, 4]));
//  console.log(calculateSum([1, 2, `3`, 4, 5]));


// // HOME WORK PART 3

const string = ["Hello", "there", "students", "of", "SEDC", "!"]

function text(string) {
    let bigString = " ";
    for (i = 0; i < string.length; i++) {
        bigString += string[i] + " ";
    }
    return bigString
}
console.log(text(string))


// HOME WORK PART 4

// for(i=1; i<=20; i++){
//     if(i %2===0){
//         console.log(i +  " is even");
//     }else {
//         console.log(i +  " is odd");
//     }
// }


// HOME WORK PART 5

// const numbers=[5,2,3,1,23,4,9]
// let max=-Infinity
// let min=Infinity
// let sum = 0
// function maxMinSum(){

//     for(let number of numbers){
//         if(number > max){
//             max=number
//         }
//         if (number < min){
//             min=number
//         }
//         sum=max+min
//     }

// }
// maxMinSum()
// console.log(max)
// console.log(min)
// console.log(sum)

// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(numArr)
// let max = numArr[0]
// let min = numArr[0]
// let sum = 0
 
// function calculateSum(){
//     for (i = 0; i < numArr.length; i++) {
//         if (numArr[i] >= max) {
//             max = numArr[i]
//         }
//         if (numArr[i] < min) {
//             min = numArr[i]
//         }
//         sum=max+min
//     }
//     return sum
// }
// calculateSum()
// console.log (`The max number is:${max} The min number is:${min} And the sum of them is:${sum}`)

// HOME WORK PART 6


// const firstName =["Bob", "Jill"]
// const lastName = ["Gregory", "Wurtz"]

// function fullName(){
//     for(i=0;i<firstName.length;i++){
//         console.log(` ${i + 1} ${firstName[i]} ${lastName[i]}`)
//     }
// }

// fullName()
