// const square=function(x)
// {
//     return x * x
// }
// const square=(x)=>{
//     return x*x
// // }
// const square=(x)=> x*x

// console.log(square(2))
const event={
    name:'Birthday Party',
    guestList:['Ayush','Yash','Chiddi','Utkarsh','Arjit is bitch but still he'],
    printGuestList()
    {
        console.log("Guest list for "+ this.name)
        this.guestList.forEach((guest)=>{
          console.log(guest+' is attending '+this.name)  
        })
    }
    
} 
event.printGuestList()