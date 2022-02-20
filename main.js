let coloredReindeer = []
const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    let currentColor = "spaghetti"
    
    const generator = function* (){
        const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
        let counter = 0
        while (counter < colors.length) {
            yield currentColor = colors[counter]
            counter += 1
        }
        
    }
    generatorResult = generator()
    
    for (let i = 0; i < reindeer.length; i++){
        const reindeerFactory = (reindeerArray) => {
            let createdObject = {
                name: reindeerArray[i],
                color: generatorResult.next().value
            } 
            coloredReindeer.push(createdObject)
            return createdObject
        }
        reindeerFactory(reindeer)
    } 
    return coloredReindeer
}


let reindeersInHTML = (coloredReindeerObjects) => {
    let result = ""
    for (let i = 0; i < coloredReindeerObjects.length; i++){
        result += `<section style="color: ${coloredReindeerObjects[i].color}">${coloredReindeerObjects[i].name}</section>`
        
    }
    return result 
}
coloredReindeerBuilder()


console.log(reindeersInHTML(coloredReindeer));

const reinHTML = reindeersInHTML(coloredReindeer)
const reinHTMLContainer = document.querySelector("#coloredreindeer")

reinHTMLContainer.innerHTML = reinHTML


