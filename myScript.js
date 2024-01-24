let MAX_SIZE = 16;
let randcolor = 0;

function del(){
    let child = contain1.lastElementChild;
    while(child){
        contain1.removeChild(child);
        child = contain1.lastElementChild;
    }
}

function square(randcolor){
    const MAX_SIZE = prompt("How many squares?(less than 100)");
    if(MAX_SIZE>100){
        square(randcolor);
    }
    else{
        del();
        draw(MAX_SIZE, randcolor);
    }
}

function draw(MAX_SIZE, randcolor){
    for(let j=0;j<MAX_SIZE;j++){
        const col = document.createElement('div');
        col.style.display = 'flex';
        for(let i=1;i<=MAX_SIZE;i++){
            const di = document.createElement('div');
            let w = 1400/MAX_SIZE;
            let h = 800/MAX_SIZE;
            di.style.width = w + "px";
            di.style.height = h + "px";
            di.className = "pixel";
            di.addEventListener("mouseenter", ()=>{
                if(randcolor == 1){
                    di.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255)
                    + "," + Math.floor(Math.random() * 255) + ","
                    + Math.floor(Math.random() * 255) + ")";
                }
                else{
                    di.style.backgroundColor = "white";
                }
    });

            col.appendChild(di);
        }
        contain1.appendChild(col);   
    }
    contain.appendChild(contain1);
}

const colbtn = document.getElementById('colorbut');
colbtn.onclick = function(){
    randcolor = 1;
    square(randcolor);
}

const btn = document.getElementById('norbut');
btn.addEventListener('click', ()=>{
    randcolor = 0;
    square(randcolor);
});

const contain = document.querySelector(".container");

const contain1  = document.createElement("div");
contain1.style = "display: flex; flex-direction: column; justify-content: center; align-items: center;";

draw(MAX_SIZE);