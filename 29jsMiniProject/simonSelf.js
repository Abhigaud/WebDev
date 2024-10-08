let gameSeq = [];
let userSeq = [];

let h3 = document.querySelector('h3');
let btns = ["red", "violet", "yellow", "blue"];
let level = 0;
let started = false;

let highScore = 0;

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game start");
        started = true;
        
        levelUp();
    }
});

function levelUp() {
    userSeq = [];
    level++;
    if (highScore < level) {
        highScore = level;
    }
    h3.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    
    gameFlash(randBtn);

}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    },200);
}

function btnPress() {
    // console.log(this);
    let btn = this
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    
    checkAns(userSeq.length -1);
}

function checkAns(idx) {
    // console.log(level);
    // let idx = level -1;

    if(userSeq[idx] === gameSeq[idx]){
        // console.log("same value");
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp(), 1000);
        }
        
    }else{
        h3.innerHTML = `game over! your score was <b>${level}</b> and high Score is ${highScore},   press any key to start ${highScore} `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        reset();

    }
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

  