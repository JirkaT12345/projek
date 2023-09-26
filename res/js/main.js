const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoclickUpgrade = document.getElementById("autoclickUpgrade");


let numberOfCookies = 0;
let costOfClickUpgrade = 20;
let clickUpgradeIncrease = 1;
let autoclickIncrease = 0;
let autoclick;
let autoclickCost = 100;

autoclickUpgrade.onclick = () => {
    if (numberOfCookies >= autoclickCost) {
        //odecist susenky 
        numberOfCookies -= autoclickCost;
        autoclickCost *= 2;
        autoclickUpgrade.innerText = "Buy autoclick upgrade: " + autoclickCost;
        //numberOfCookies = numberOfCookies - 100

        //aktualizovat odstavec se susenkama
        counter.innerText = "Cookies: " + numberOfCookies;
        autoclickIncrease ++;
        //clear
        clearInterval(autoclick);

        //spustit interval
        autoclick = setInterval(() => {
            //zvednout o nejake cislo
            numberOfCookies += autoclickIncrease

            //aktualizovat odstavec
            counter.innerText = "Cookies: " + numberOfCookies;

        }, 1000);

    }
}


// {} - scope
cookie.onclick = () => {
    console.log("click");
    //numberOfCookies = numberOfCookies + 1;
    //numberOfCookies += 1;
    // ++ inkrement
    numberOfCookies += clickUpgradeIncrease;
    console.log(numberOfCookies);
    counter.innerText = "Cookies: " + numberOfCookies;
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
    counter.innerText = "Cookies: " + numberOfCookies;
}


//spusteni funkce
//cheats()

const cheatsTwo = () => {
    numberOfCookies *= 2;
    counter.innerText = "Cookies: " + numberOfCookies;
}
cheats();

