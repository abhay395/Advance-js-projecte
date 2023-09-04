const inputBox= document.querySelector('#inputBox')
const button= document.querySelector('button')
const listContener = document.querySelector('#List-contener')
button.addEventListener('click',function(){
    if(inputBox.value===''){
        alert('You must write somthing');
    }else {
        let li=document.createElement('li')
        li.innerHTML=inputBox.value;
        listContener.appendChild(li)
        let span=document.createElement('span');
        span.innerHTML='\u00d7' 
        li.appendChild(span);
    }
    inputBox.value=''
    saveData()
})

listContener.addEventListener('click',function(e){
    console.log(e.target)
    console.log(e.target.tagName)
    if (e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData()
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
})
function saveData(){
    localStorage.setItem('data',listContener.innerHTML)
}
function showTask(){
    listContener.innerHTML=localStorage.getItem('data')
}
// showTask()