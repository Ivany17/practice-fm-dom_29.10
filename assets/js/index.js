'use strict'

const btns = document.querySelectorAll('button');

const btnHandler = ({
    target:{
        dataset:{color},
        parentNode: parentRoot
    }
})=>{
    parentRoot.style.backgroundColor = color;
}
const handler = (e)=>{console.log(e)}

for (const btn of btns) {
    btn.addEventListener('click', btnHandler);
    btn.addEventListener('click', handler, true);
}

document.getElementById('root').addEventListener('click', handler);
document.body.addEventListener('click', handler);

document.addEventListener('click', handler);
window.addEventListener('click', handler, true);

