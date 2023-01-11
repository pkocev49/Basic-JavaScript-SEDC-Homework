function makeTable(){
    let table = document.querySelector('.tab')
    let row = document.querySelector('.rows').value
    let colum = document.querySelector('.colums').value

    console.log(row+"  "+colum)


    for(let rowIn=0;rowIn<row;rowIn++ ){
        let trow = document.createElement('tr')
        

       


        for(colIn=0;colIn<colum;colIn++){
            let td = document.createElement('td')
            let text = document.createTextNode(`DOG ${colIn}`)

            td.appendChild(text)
            trow.appendChild(td)
           
        }

        table.appendChild(trow)
    }
   


}