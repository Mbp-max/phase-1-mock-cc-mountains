const baseUrl = 'http://localhost:3000'
let randomMountain;
let allMountains = []
fetch(baseUrl + `/mountains/`)
.then(resp => resp.json())
.then(data => {
    allMountains = data
    randomMountain = randomMount(data);
    renderMountain(randomMountain);
    allMounts(data);
})

const mountDeets = document.querySelector('#mountain-details')

function renderMountain(mountain){
    const name = document.querySelector('#mountain-name')
    name.textContent = mountain.name;
    const location = document.querySelector('#mountain-location');
    location.textContent = mountain.location;
    const image = document.querySelector('#mountain-image');
    image.src = mountain.image;
    const likes = document.querySelector('#mountain-likes')
    likes.textContent = mountain.likes  
}

function randomMount(mountains){  
    let mountGen = mountains[Math.floor(Math.random() * mountains.length)]   
    return mountGen
}

// See a list of all mountain names at the bottom of the page in the #mountains-list ul when the page loads. A user should be able to click on a mountain in the list, and display the information for that mountain in the #mountain-details div.

const mountainsLi = document.querySelector('#mountains-list')

// // function allMounts(array){
// //     array.forEach( Element => displayMounts(Element));
// // }

function displayMount(mountain){
    const li = document.createElement('li')
        li.textContent = mountain.name
        mountainsLi.append(li)  
        li.addEventListener('click', function(){
            // console.log('Im being clicked')
            renderMountain(mountain)
        })
}

function allMounts(mountains){
    mountains.forEach(mountain => displayMount(mountain)
    );
}


// likeButton.onclick = 
const likeButton = document.querySelector('#like-button')
// likeButton.onclick = addLikes()

likeButton.addEventListener('click', function(){
        console.log("Im being clicked")
        const likes = document.querySelector('#mountain-likes') 
        let prevValue = Number(likes.textContent)
        likes.textContent = (prevValue + 1)
        // let mountainName = document.querySelector('#mountain-name')
        // setMountData(mountainName.textContent)
        // let mountain = mountData(mountainName)
        // mountain.likes = likes.textContent
        })

// function mountData(mountainName){
//     let mountain = allMountains.find(mountain => mountain.name === mountainName)
//     return mountain
// }
// function setMountData(mountainName){
//     console.log(mountainName)
//     let mountain = allMountains.find(mountain => mountain.name === mountainName)
//     console.log(mountain)
//     mountain.likes = Number(mountain.likes) +1
// }

