const TIMEOUT = 'timeout';

const TIMEOUT_SELECT = document.createElement('select')

TIMEOUT_SELECT.id = TIMEOUT

for(let i = 0; i <= 60; i+=10){
    const option = createOption(i, `${i} seconds timeout`)
    TIMEOUT_SELECT.appendChild(option);
}

BODY.appendChild(TIMEOUT_SELECT);

const saved = localStorage.getItem(TIMEOUT);

let timeout = saved ? saved : 0;

TIMEOUT_SELECT.value = timeout;

TIMEOUT_SELECT.addEventListener(CHANGE_EVENT,(event)=>{
    timeout = Number(event.target.value);
    localStorage.setItem(TIMEOUT,timeout);
});

