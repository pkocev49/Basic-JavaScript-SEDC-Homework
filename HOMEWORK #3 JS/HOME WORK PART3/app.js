 

   function atmMachine( amountWithdrawn, accMoney=500){   
 let requestedMoney=prompt("Enter amount of money")
 if (requestedMoney>accMoney){
     console.log("Not enough money")
 }
  console.log(`You have  withdrawn ${amountWithdrawn} dolars`)
  return accMoney-amountWithdrawn
  }
 let  finalrez=prompt("Enter the amount you whant to withdraw")
  let moneyLeft=atmMachine(400)
  console.log(`You have: ${moneyLeft} dolars left`)

// function atmMachine(accMoney=500){
//     let amountWithdrawn=prompt("Enter the amount you whant to withdraw")
//     let moneyLeft=accMoney-amountWithdrawn
//     console.log(`You have  withdrawn ${amountWithdrawn} dolars You have: ${moneyLeft} dolars left `)
//     let requestedMoney=prompt("Enter amount of money")
//     if (requestedMoney>accMoney){
//              console.log("Not enough money")
//          }

// }
// atmMachine()

//Zdravo Daniel.Ovaa domasno go imam napisano na dva nacini neznam dali mi se tocni zatoa e taka napraveno.