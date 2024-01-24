let MAX_SIZE = 16;
let randcolor = 0;
let paint = 0;

function del(){
    let child = contain1.lastElementChild;
    while(child){
        contain1.removeChild(child);
        child = contain1.lastElementChild;
    }
}

function square(randcolor, paint){
    const MAX_SIZE = prompt("How many squares?(less than 100)");
    if(MAX_SIZE>100){
        square(randcolor, paint);
    }
    else{
        del();
        draw(MAX_SIZE, randcolor, paint);
    }
}

function draw(MAX_SIZE, randcolor, paint){
    for(let j=0;j<MAX_SIZE;j++){
        const col = document.createElement('div');
        col.style.display = 'flex';
        for(let i=1;i<=MAX_SIZE;i++){
            const di = document.createElement('div');
            let w = 1450/MAX_SIZE;
            let h = 800/MAX_SIZE;
            di.style.width = w + "px";
            di.style.height = h + "px";
            if(paint == 0)
            di.className = "pixelgray";
            else di.className = "pixelwhite";
            let visited = 0;
            di.addEventListener("mouseenter", ()=>{
                if(randcolor == 1){
                    di.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255)
                    + "," + Math.floor(Math.random() * 255) + ","
                    + Math.floor(Math.random() * 255) + ")";
                }
                else if(randcolor == 2){
                    let eighty = 80;
                    if(visited == 0){
                        visited++;
                        di.style.backgroundColor = "rgb(" + eighty + "," + eighty + "," + eighty +")";
                    }
                    else{
                        visited++;
                        eighty = eighty - (8*visited);
                        di.style.backgroundColor = "rgb(" + eighty + "," + eighty + "," + eighty +")";
                    }
                }
                else if(randcolor == 3) di.style.backgroundColor = "white";
                else di.style.backgroundColor = "black";
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
    paint = 1;
    square(randcolor,paint);
}

const blackbtn = document.getElementById('blackbut');
blackbtn.onclick = function(){
    randcolor = 2;
    paint = 1;
    square(randcolor, paint);
}

const btn = document.getElementById('norbut');
btn.addEventListener('click', ()=>{
    randcolor = 4;
    paint = 1;
    square(randcolor,paint);
});

const whitebtn = document.getElementById('nor1but');
whitebtn.onclick = function(){
    randcolor = 3;
    paint = 0;
    square(randcolor, paint);
}

const contain = document.querySelector(".container");

const contain1  = document.createElement("div");
contain1.style = "display: flex; flex-direction: column; justify-content: center; align-items: center;";

draw(MAX_SIZE,0,1);