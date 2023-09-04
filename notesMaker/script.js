const notesContener=document.querySelector('.Notes')
const CreateBtn=document.querySelector('.CreateBtn')
let notes=document.querySelectorAll('.input')
function showData(){
  notesContener.innerHTML=localStorage.getItem("save")
}
showData()
function  SaveData(){
  localStorage.setItem('save',notesContener.innerHTML)
}
CreateBtn.addEventListener('click',function(){
    const div=document.createElement('div')
    const note=document.createElement('textarea')
    note.classList.add('input')
    note.setAttribute('cols','70%')
    note.setAttribute('rows','8px')
    const Deletebtn=document.createElement('button')
    Deletebtn.classList.add('Deletebtn')
    Deletebtn.innerHTML='Delete Note'
    notesContener.appendChild(div).appendChild(note)
    div.appendChild(Deletebtn)
    SaveData()
})
notesContener.addEventListener('click',function(e){
    if (e.target.tagName==='BUTTON'){
        e.target.parentElement.remove()
        SaveData()
    }else if (e.target.tagName==='TEXTAREA'){
        notes=document.querySelectorAll('.input')
        // console.log(notes)
        notes.forEach(nt => {
            nt.onkeyup=function(){
                SaveData()
            }
        });
    }
    // SaveData()
})

