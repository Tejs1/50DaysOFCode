const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
search.addEventListener('mouseover',()=>{
    search.classList.add('active')
    input.focus();
})
search.addEventListener('mouseout',()=>{
    search.classList.remove('active')
 
})

