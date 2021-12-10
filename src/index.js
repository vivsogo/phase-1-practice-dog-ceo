console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const dogImageContainerDiv = document.getElementById('dog-image-container')
const dogBreedsUL = document.getElementById('dog-breeds')
const dogSelect = document.querySelector("#breed-dropdown")

const allLis = document.querySelectorAll("li")
const liveLis = document.getElementsByTagName('li')

console.log(allLis);
console.log(liveLis);

// Challenge 1 Start
fetch(imgUrl)
.then(r => r.json())
.then((responseObj) => {

  responseObj.message.forEach((url) => {
    turnURLToHTML(url)
  })
  
})


function turnURLToHTML(url){
  let image = document.createElement("img")
  image.src = url
  dogImageContainerDiv.append(image)
}


// Challenge 1 End


// Challenge 2 Start
fetch(breedUrl)
.then(r => r.json())
.then((response) => {

  let allTheKeys = Object.keys(response.message)

  allTheKeys.forEach((name) => {
    turnNameToHTML(name)
  })


})


function turnNameToHTML(name){
  let newLi = document.createElement("li")
  newLi.innerText = name
  newLi.className = "dogName"
  dogBreedsUL.append(newLi)

  

}

// Challenge 2 End


// Challenge 3 Start

dogBreedsUL.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("dogName")) {
    // evt.target.className === "dogName"
    evt.target.style.color = "red"
    evt.target.style.backgroundColor = "blue"
  }
})

// Challenge 3 End

// Challenge 4 start

dogSelect.addEventListener("change", (evt) => {
  let chosenLetter = evt.target.value
  let allDogLis = document.querySelectorAll("li.dogName")

  allDogLis.forEach((li) => {
    if (li.innerText.startsWith(chosenLetter)) {
      li.style.display = ""
    } else {
      li.style.display = "none"
    }
  })

})


// Challenge 4 end



//
let newInput = document.createElement("input")
newInput.type = "text"
newInput.placeholder = "Type in a dog breed"

document.body.prepend(newInput)

newInput.addEventListener("input", (evt) => {
  let typedLetters = evt.target.value

  let allDogLis = document.querySelectorAll("li.dogName")

  allDogLis.forEach((li) => {
    if (li.innerText.includes(typedLetters)) {
      li.style.display = ""
    } else {
      li.style.display = "none"
    }
  })

})















