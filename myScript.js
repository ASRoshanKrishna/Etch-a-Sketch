let MAX_SIZE = 16;

function del(){
    let child = contain1.lastElementChild;
    while(child){
        contain1.removeChild(child);
        child = contain1.lastElementChild;
    }
}

function square(){
    const MAX_SIZE = prompt("How many squares?(less than 100)");
    if(MAX_SIZE>100){
        square();
    }
    else{
        del();
        draw(MAX_SIZE);
    }
}

function draw(MAX_SIZE){
    for(let j=0;j<MAX_SIZE;j++){
        const col = document.createElement('div');
        col.style.display = 'flex';
        for(let i=1;i<=MAX_SIZE;i++){
            const di = document.createElement('div');
            di.style = "width: 100px; height: 50px; display: flex";
            di.style.border = "2px solid red";
            di.className = "pixel";
            col.appendChild(di);
        }
        contain1.appendChild(col);   
    }
    contain.appendChild(contain1);
}

const btn = document.querySelector('button');
btn.addEventListener('click', ()=>{
    square();
});

const contain = document.querySelector(".container");
contain.style.border = "5px solid purple";

const contain1  = document.createElement("div");
contain1.style.border = "5px solid hotpink";
contain1.style = "display: flex; flex-direction: column; justify-content: center; align-items: center;";

draw(MAX_SIZE);