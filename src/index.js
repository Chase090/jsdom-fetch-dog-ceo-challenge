console.log('%c HI', 'color: firebrick')

const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener('DOMContentLoaded', load)

function load() {
    getImages()
    getBreeds()

    // ^CHALLENGE 4
    const breedDropDown = document.getElementById("breed-dropdown")
    breedDropDown.addEventListener('change', filterBreeds)
};

function filterBreeds(e) {
    const userSelection = e.target.value
    const selectedList = document.getElementsByTagName('li')
    // filter method can be used, would return all the elements that match, issue is; it would completely destro from dom elements that dont match 
    // isntead we want to loop through and hide the elements that dont have the user selection
    for (const breed of selectedList) {
        if (breed.innerText.startsWith(userSelection)) {
            console.log('true')
            breed.style.display = ''
            // this then would return it 
        }
        else {  
            console.log('false')
            // we do not want to remove the element from the dom, we just want to hide it
            // change the style property or the style property 
        
            breed.style.display = 'none'
            // this would hide the element 
        }
    }
};


// ^CHALLENGE 1

function getImages() {
    fetch(imgUrl)
    // *fetch the images using the url
    // fetch the declared variable for the url
    .then(response => response.json())
    // *parse the response as JSON
    .then(data => {
        // debugger => need to iterate the .message(thats the jpg source)
        data.message.forEach(element => {
            // *add image elements to the DOM for each🤔 image in the array
            // here we have acces to element which we now could use to iterate
            const dogImg = document.createElement('img')
            dogImg.src = element
            // create img element to store the image source
            const dogCrate = document.getElementById("dog-image-container")
            // we grab the dom we need to attache the element img to
            dogCrate.appendChild(dogImg)
            // we then apped the new element dogImg to the div
           
        });
    })
};


// ^CHALLENGE 2
function getBreeds() {
    fetch(breedUrl)
    // *on page load, fetch all the dog breeds using the url
    .then(resp => resp.json())
    .then(data => {
        // *add the breeds to the page in an <ul> (take a look at the included index.html)
        for (const breedKeys in data.message) {
            const li = document.createElement('li')
            // create an li element
            const breedBox = document.getElementById("dog-breeds")
            // grabe the ul dog-breeds where we will be attaching the li
            li.innerText = breedKeys
            // add the breedkeys in 
            breedBox.appendChild(li)
            // append the li to the ul


            // ^CHALLENGE 3
            // *add JavaScript so that the font color of a particular <li> changes on click. This can be a color of your choosing
            li.addEventListener('click', changeText)
            
        } // for in iterates over all ENUMERABES of object that are keyed by strings. 
    })
};

function changeText(e) {
    e.target.style.fontStyle = "italic"
    e.target.style.color = "blue"
};




