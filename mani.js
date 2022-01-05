function myRandom(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + max)
}
let rand = 50 /* myRandom(1,100)*/;
for (let i = 6; i > 0; i--) {
    let user = +prompt(`1 dan kotta va 100 dan kichik bolgan son kiriting. sizdan ${i} imkoniyatingiz qoldi`)
    
    while (user < 1 || user > 100 || isNaN(user)) {
        user = +prompt(`1 dan kotta va 100 dan kichik son !!!`)
        
    }
    if (user == rand) {
        alert(`yutdiz!`);
        break;
    }else if (i == 1) {
        alert(`yutqizdiz`);
    }else if(rand - user <= 3 && rand - user >= -3){
        alert(`yonidasiz`);
    }else if(rand - user <= 6 && rand - user >= -6){
        alert(`juda yaqinsiz`);
    }else if(rand - user <= 10 && rand - user >= -10){
        alert(`yaqinrosiz`);
    }else if(rand - user <= 15 && rand - user >= -15){
        alert(`yaqinlashdiz`);
    }else if(rand - user <= 30 && rand - user >= -30){
        alert(`uzoradasiz`);
    }else{
        alert(`yana urinib ko'ring`)
    }
 }