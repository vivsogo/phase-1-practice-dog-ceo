console.log('%c HI', 'color: firebrick')
//the event takes two arguments the event and the function we are 
//also grabbing by the id setting up  a listener event 
// we are trying to grab this to append the images because thats where they are located 
document.addEventListener("DOMContentLoaded", function(){
    let dogImageContainer = document.getElementById('dog-image-container')
    


// we will use fetch to grab those images.
//fetch is a promise. change the promise object by 
//using .then 
//the image is in the Json and we need to grab it 
 fetch("https://dog.ceo/api/breeds/image/random/4")
 .then(response=> response.json())
 .then(function(jsonObject){
     let arrayOfDogURLs =jsonObject.message
     arrayOfDogURLs.forEach(url=>{
         dogImageContainer.innerHTML += makeImagetagString(url)
     })
         
 })

})
//we need to itrate the array we do this using foreach
//the make image returns a string will take one url and be embbeded into image

function makeImagetagString(url){
    return `<img src="${url}"/>`

}