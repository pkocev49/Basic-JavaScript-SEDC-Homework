console.log('works')



    // let Book = {
    //     title: prompt('Enter Title'),
    //     author: prompt('Enter Author'),
    //      readingStatus: prompt('Enter Reading Status' ),
    //     status : function(){
    //         if(this.readingStatus  === true){
    //             return `Alredy read ${this.title} by ${this.author}`

    //         }else if(this.readingStatus === false){
    //             return'You still need to read Mockingjay:The Final Book of The Hunger Games by Suzanne Collins'
    //         }
    //         }


    //         }






    // console.log(Book.status())

    // OVA E BES BONUSOT BIDEJKI POGORE I VO DVATA SLUCAI MI GO DAVA PRVIOT IF 

    let Book = {
        title: "The Robots of daw",
        author: "Isaac Asimov",
        readingStatus: false,
        status: function () {
            if (this.readingStatus === true) {
                return `Alredy read ${this.title} by ${this.author}`

            }else (this.readingStatus === false)
                return 'You still need to read Mockingjay:The Final Book of The Hunger Games by Suzanne Collins'
            }
           
        }
    
console.log(Book.status())


