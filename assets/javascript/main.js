const btn_bars = document.querySelector('.btn-responsive')
const overlay = document.querySelector('.overlay')
const nav = document.querySelector('.nav-responsive')
const btn_close =document.querySelector('.fa-times')
const btn_search= document.querySelector('.fa-search')
const input_search = document.querySelector('.search-input')
const outInput = document.querySelector('.Input')


btn_bars.addEventListener('click',()=>
{
    overlay.classList.toggle('active')
    nav.classList.toggle('active')
})
overlay.addEventListener('click',()=>
{
    overlay.classList.toggle('active')
    nav.classList.toggle('active')
})
btn_close.addEventListener('click',()=>
{
    overlay.classList.toggle('active')
    nav.classList.toggle('active')
})
btn_search.addEventListener('click',()=>
{
    input_search.classList.toggle('active')
    outInput.classList.toggle('active')
})
outInput.addEventListener('click',()=>
{
    input_search.classList.toggle('active')
    outInput.classList.toggle('active')
})
let slide = document.getElementById('first-slide')
  var count = 0
 setInterval(function()
{  
     slide.style.marginLeft=`${count}%`
      count-=100
      if(count==-300)
      {
          count=0
      }
 },3500)