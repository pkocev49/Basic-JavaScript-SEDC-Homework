

// let sBtn = document.querySelector('.speakMethod')

let object = []
const crateObject = () => {

    let obj = {
        name: document.querySelector('#name').value,
        kind: document.querySelector('#kind').value,
        speak: function(){
           this.speak= document.querySelector('#speak').value
             return `The ${this.kind} says:${this.speak}`
        }
       
    }
   console.log( obj.speak())
    object.push(obj)

    
   
}

console.log(object)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.create').addEventListener('click', crateObject)
})



