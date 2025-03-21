// Your code here
let server_url = "http://localhost:3000/characters"
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
    listener(nSpan,'click',() => displayinfo(character))
}
function displayinfo(info){
    getId("name").innerText = info.name
    getId("image").src= info.image
    getId("vote-count").innerText = info.votes
    


}


