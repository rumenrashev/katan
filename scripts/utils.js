function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function showElement(element){
    element.classList.remove('hidden');
}

function hideElement(element){
    element.classList.add('hidden');
}

function hideAllByClass(className){
    document.querySelectorAll(className).forEach(e=> hideElement(e));
}

function hideAllDices(){
    hideAllByClass('dice');
}

function showElementById(id){
    const element = document.getElementById(id);
    showElement(element);
}