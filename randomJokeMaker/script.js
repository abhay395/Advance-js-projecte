const joke=document.querySelector('.Joke')
const btn=document.querySelector('.RandomBtn')
const jokep=document.querySelector('.Jokep')
const url='https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,explicit&type=single'
let p=1
btn.addEventListener('click',function(){
    fetch(url)
    .then(function(response){
        return response.json()
    }).then(function(get){
        // const jokep=document.createElement('p')
        jokep.innerHTML=get.joke
    }).catch(function(error){
        console.log(error)
    })
})