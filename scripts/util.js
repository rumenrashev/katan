function disableElement(element){
    element.disabled = true;
}

function enableElement(element){
    element.disabled = false;
}

function disableElementForSeconds(element,seconds){
    disableElement(element);
    setTimeout(function(){
        element.disabled = false;
    },seconds * 1000)  
}

function createOption(value, textContent){
    const option = document.createElement('option')
    option.value = value;
    option.textContent = textContent = textContent;
    return option;
}