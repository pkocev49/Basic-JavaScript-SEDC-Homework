
let accMoney = 500
function atmMachine() {
  let amountWithdrawn = prompt("Enter the amount you whant to withdraw")
  let moneyLeft = accMoney - amountWithdrawn
  console.log(`You have  withdrawn ${amountWithdrawn} You have dolars You have: ${moneyLeft} dolars left `)
  let requestedMoney = amountWithdrawn
  if (requestedMoney > accMoney) {
    console.log("Not enough money")
  }

}
atmMachine()

