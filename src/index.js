// Code here
const h2=document.querySelector("#beer-name")
const img=document.querySelector("#beer-image")
const em=document.querySelector("#beer-description")
const ul=document.querySelector("#review-list")
document.addEventListener("DOMContentLoaded", function(){
    fetch("http://localhost:3000/beers/1")
    .then((res)=>res.json())
    .then((data)=>{ 
        h2.textContent=data.name
        img.src=data.image_url
        em.textContent=data.description
        data.reviews.forEach((review)=>{
       const li=document.createElement("li")
       li.textContent=review
       ul.appendChild(li)

        })
       
    })
    
   fetch("http://localhost:3000/beers")
   .then((res)=>res.json())
   .then((data)=>{
    console.log(data)
   const ul=document.querySelector("#beer-list")
   data.forEach((beer)=>{
    const li=document.createElement("li")
   li.textContent=beer.name
   ul.appendChild(li)
   
   })

})
})
const form=document.querySelector("#review-form")
const textarea=document.querySelector("#review")

form.addEventListener("submit", (e)=>{
e.preventDefault()
const review=textarea.value
const li=document.createElement("li")
li.textContent=review;
ul.appendChild(li)
textarea.value="";

li.addEventListener("click", function(e){
    e.target.removeEventListener(li);
})
})
