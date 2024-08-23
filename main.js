
// delete button
const list = document.querySelector('#book-list ul')
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const litag = e.target.parentElement
        list.removeChild(litag)
    }
})
// prevent the default behaviour
const formtt = document.querySelector('#add-book')
formtt.addEventListener('submit', function(bt){
    bt.preventDefault()
    // creating element
    const lii = document.createElement('li')
    const anime = document.createElement('span')
    const delbtn = document.createElement('span')
    // form value
    const formvalue = formtt.querySelector('input[type="text"]').value
    // content
    anime.textContent = formvalue
    delbtn.textContent = 'delete'
    // append
    lii.appendChild(anime)
    lii.appendChild(delbtn)
    list.appendChild(lii)
    // add class
    anime.classList.add('name')
    delbtn.classList.add('delete')
})
