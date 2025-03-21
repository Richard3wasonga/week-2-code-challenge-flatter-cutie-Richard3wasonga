// Your code here
let server_url = "http://localhost:3000/characters"
let currentVotes;
function getId (targeted_Id){
    return document.getElementById(targeted_Id);
}
function createE (element){
    return document.createElement(element);
}
function appendChild (parent, child){
    return parent.appendChild(child);
}
function listener (element, event, callback){
    return element.addEventListener(event,callback);
}
fetch(server_url,{
    method: "GET",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    }
})
.then(res => res.json())
.then(data => data.forEach(sd => displayNames(sd)))
.catch(error => console.error("Error",error)
)

function displayNames(character){
    const nameBar = getId("character-bar")
    const nSpan = createE('span')
    nSpan.textContent = character.name;
    appendChild(nameBar,nSpan)
    listener(nSpan,'click',() =>{ 
        currentVotes = character;
        displayinfo(character);
    })
    
}
function displayinfo(info){
    getId("name").innerText = info.name
    const imageDisplay = getId("image");
    imageDisplay.src = info.image;
    imageDisplay.alt = info.name;
    getId("vote-count").innerText = info.votes
}
const formvalues = getId("votes-form")
listener(formvalues,'submit',(e) => {
    e.preventDefault();
    const inputValues = parseInt(e.target.votes.value)
    if(isNaN(inputValues)){
        alert("Only numerical values can be used");
        return;
    }
    let newValues = currentVotes.votes += inputValues
    getId("vote-count").innerText = newValues
    fetch(`${server_url}/${currentVotes.id}`,{
        method : "PATCH",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({votes: newValues})
    })
    .then(res => res.json())
    .then(updatedData => console.log("Success in server updates:",updatedData))
    .catch(error => console.error("Error in server updates :", error))
    
   
    formvalues.reset();
});

