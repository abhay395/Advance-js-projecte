myArray=[]

const input =document.querySelector('input')
const button=document.querySelector('button')
const todoitem=document.querySelector('.todo-item')

button.addEventListener('click',function(){
   if(input.value==='') return;
    myArray.push({id:Date.now(),Text:input.value})
 const todoText= myArray.map((todo)=>{
    return `<li id=${todo.id} >${todo.Text}<button class='delete' id=${todo.id} >delete</button></li>`
   }).join('')
   todoitem.innerHTML=todoText
   input.value=''
   // console.log(todoText)
   // const deletebtn=document.querySelector('.delete')
   // deletebtn.addEventListener('click',function(e){
   //    // myArray.filter((todo)=>todo.id!==e.target.id)
   //   const darr= document.querySelectorAll('.delete')
   //   console.log(darr.id)
   //   console.log(e.target.id)
   //   console.log(darr.parentElement)
   //   darr.parentElement.remove
   //    // if(darr.id===e.target.id)(
   //    //    darr.parentElement.remove
      // )
      
      
   // })

   const deletebtn= document.querySelectorAll('.delete')
   deletebtn.forEach((button)=>{button.addEventListener('click',function(e){
      if(e.currentTarget.id===button.id){
         button.parentElement.remove()
      }
   })})
})