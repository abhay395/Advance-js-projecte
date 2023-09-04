const FormEl = document.querySelector('form')
const searchInput = document.querySelector('.SearchInput')
const ShowMorebutton = document.querySelector('.ShowMoreButton')
const SearchResults = document.querySelector('.SearchResults')
let page = 1
async function ShowImage() {
   
    if (searchInput.value === '') {
        alert('type somthig')
        ShowMorebutton.style.display = 'none'
    } else {
        if (page === 1) {
            SearchResults.innerHTML = ''
        
        }
        const apiKey = 'BzN-CHMDxnu0SjWw_w6_kk_x4-CLxQ5GzbdvXpUpSUE0'
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchInput.value}&client_id=BzN-CHMDxnu0SjWw_w6_kk_x4-CLxQ5GzbdvXpUpSUE`
        const response = await fetch(url)
        console.log(response)
        console.log(searchInput.value)
        const data = await response.json()
        const results = data.results
        console.log(data)
        results.forEach(element => {
            const ImageElement = document.createElement('div')
            ImageElement.classList.add('SearchResult')
            const image = document.createElement('img')
            image.src = element.urls.small
            const atag = document.createElement('a')
            atag.href = element.links.html
            atag.target = '_blank'
            atag.textContent = element.alt_description
            ImageElement.appendChild(image)
            ImageElement.appendChild(atag)
            SearchResults.appendChild(ImageElement)
        });
        ShowMorebutton.style.display = 'block'
    }

    }
    FormEl.addEventListener('submit', (e) => {
        e.preventDefault()
        ShowImage()
        page = 1
    })
    ShowMorebutton.addEventListener('click', () => {
        page++
        ShowImage()
    })