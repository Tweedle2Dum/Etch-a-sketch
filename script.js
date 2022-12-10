console.log("JS LOADED!!!!!!")
const button = document.querySelector("button")
const gridcontainer = document.querySelector(".grid-container")
const reset = document.querySelector("#reset")

function cleargrid(event){
    while(gridcontainer.firstChild){
        gridcontainer.removeChild(gridcontainer.firstChild)
    }
}

function hover(event){
    event.target.classList.add("hover")
    
}

function insertrow(size,width) {
    for (let j = 0; j < size; j++) {
        let row = document.createElement("div")
        row.classList.add("row-container")
        row.style.display = "flex"
        for (let i = 0; i < size; i++) {
            let square = document.createElement("div")
            square.classList.add("square")
            square.style.width=`${width}px`
            square.style.height=`${width/2}px`
            row.appendChild(square)
        }
        console.log(`${j}-row created`)
        gridcontainer.appendChild(row)
    }
    
    const squares = [...document.querySelectorAll(".square")]
    for(square of squares){
        square.addEventListener("mouseover",hover)
    }
    


}

button.addEventListener("click", event => {
    const size = document.querySelector("#input").value
    let width = 960 / size;
    insertrow(size,width)
})

reset.addEventListener("click",cleargrid)