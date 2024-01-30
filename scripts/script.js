function hideElement(element){
    element.classList.add(HIDDEN);
}

function showElement(element){
    element.classList.remove(HIDDEN);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function createImage(num){
    const img = document.createElement('img');
    img.src = `${IMG_BASE_PATH}${num}${IMG_FILE_TYPE}`;
    return img;
}


function createCol(id){
    for(let i = 1; i <= 6; i++){
        const div = document.createElement('div');
        div.classList.add('dice');
        const image = createImage(i);
        div.append(image);
        div.id = `${id}-${i}`;
        document.querySelector('.container').appendChild(div);
        map.set(div.id,div);
    }
}

ROLL_BTN.addEventListener(CLICK_EVENT,()=>{
    map.forEach(e=> hideElement(e));
    const arr = [];
    for(let i = 1; i <= dicesCount; i++){
        const random = getRandomInt(1,6);
        arr.push(random);
        const dice = map.get(`${i}-${random}`);
        showElement(dice);
    }
    // RESULT_ELEMENT.textContent = arr.join(" + ") + " = " +  arr.reduce((a,b)=>a+b)    
    RESULT_ELEMENT.textContent = arr.reduce((a,b)=>a+b)    
    disableElementForSeconds(ROLL_BTN,timeout)
});

function createDices(){
    document.getElementById('container').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    for(let i= 1; i <= dicesCount; i++){
        const dice = createCol(i);
    }
    map.forEach(e=>hideElement(e));
}

createDices();

document.getElementById('count').addEventListener('change',(e)=>{
    dicesCount = Number(e.target.value);
    createDices();
});



document.getElementById('count').value = dicesCount;
