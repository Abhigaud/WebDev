function random_Numbers_Between_AtoB(a,b){
    let diff = b-a;
    let ans = Math.ceil(Math.random()*diff)+a;
    console.log(ans);
    
}

random_Numbers_Between_AtoB(10,45);

// console.log(Math.floor(Math.random()*25)+10);
