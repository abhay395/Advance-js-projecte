const btns =document.querySelectorAll(".question-btn")
const article =document.querySelector(".question")
btns.forEach((btn)=>{
    // btn.addEventListener('click',function(){
    // const qustion=btn.parentElement.parentElement
    // qustion.classList.toggle("show-text")
    // })
    // don sahi hai
    btn.addEventListener('click',function(e){
        const qustion=e.currentTarget.parentElement.parentElement
        qustion.classList.toggle("show-text")
    })
})