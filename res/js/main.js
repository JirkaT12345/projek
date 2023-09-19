const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");


let numberOfCookies = 0;
let costOfClickUpgrade = 20;
let clickUpgradeIncrease = 1;

// {} - scope
cookie.onclick = () => {
    console.log("click");
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    // ++ inkrement
    numberOfCookies += clickUpgradeIncrease;
    console.log(numberOfCookies);
    counter.innerHTML = "Cookies: " + numberOfCookies;
};


const clickUpgradeFunction = () => {
    if(numberOfCookies >= costOfClickUpgrade) {
        //Odečteme cenu upgradu 
        //pocet susenek a odectu 20
        numberOfCookies -= costOfClickUpgrade;
//aktualizace odstavce
counter.innerText = "Cookies:" + numberOfCookies
        //zvedneme pocet susenek na kliknuti
        clickUpgradeIncrease++;
    }
};

clickUpgrade.onclick = clickUpgradeFunction;


//Vytvoření funkce
//function název() {}
function cheats() {
    console.log("Cheats on");
    numberOfCookies += 1000000;
    counter.innerHTML = "Cookies: " + numberOfCookies;
}


//spusteni funkce
//cheats()

const cheatsTwo = () => {
    numberOfCookies *= 2;
    counter.innerHTML = "Cookies: " + numberOfCookies;
}
