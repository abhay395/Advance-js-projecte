const notes=document.querySelector('.Notes')
const CreateBtn=document.querySelector('.CreateBtn')
CreateBtn.addEventListener('click',function(){
    const div=document.createElement('div')
    div.classList.add('note')
    const note=document.createElement('textarea')
    note.setAttribute('cols','70%')
    note.setAttribute('rows','8px')
    const Deletebtn=document.createElement('button')
    Deletebtn.classList.add('Deletebtn')
    Deletebtn.innerHTML='Delete Note'
    notes.appendChild(div).appendChild(note)
    div.appendChild(Deletebtn)
})
notes.addEventListener('click',function(e){
    if (e.target.tagName==='BUTTON'){
        e.target.parentElement.remove()
    }
})