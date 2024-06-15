let btnCoin = document.querySelector("#btnCoin");
let count = localStorage.getItem("count") ? parseInt(localStorage.getItem("count")) : 0;
let balance = document.querySelector("#balance");
let countMiner = localStorage.getItem("countMiner") ? parseInt(localStorage.getItem("countMiner")) : 0;
let autominer = document.querySelector('#autominer')
let state = 0

btnCoin.addEventListener('click', function(){
    count += 1;
    state += 1;
    localStorage.setItem("count", count);
    balance.innerHTML = `У вас ${count} коинов`;
    if (state % 2 == 0){
        btnCoin.style.transform = 'scale(1)'
    } else{
        btnCoin.style.transform = 'scale(0.9)'
    }
});

function creator(){
    window.open('https://t.me/Anybes3', '_target')
}

let windows = document.querySelector('#windows')
function donatopen(){
    windows.style.display = 'block';
}

windows.addEventListener('click', function(){
    windows.style.display = 'none';
})

let skins = document.querySelector('#skins')
function openSkins(){
    skins.style.display = 'block';
}

skins.addEventListener('click', function(){
    skins.style.display = 'none';
})

function changeSkin(element){
    if (count > 500){
        count -= 500;
        btnCoin.src = `${element}.webp`
        localStorage.setItem("count", count);
        balance.innerHTML = `У вас ${count} коинов`;
    } else {
        alert("У вас не хватает баланса!")
    }
}

miningMenu = document.querySelector('#miningMenu')
function openAutoMiningmenu(){
    miningMenu.style.display = 'block';
}

miningMenu.addEventListener('click', function(){
    miningMenu.style.display = 'none';
})

function buyMiner(){
    if (count > 500){
        count -= 500;
        countMiner += 1
        localStorage.setItem("countMiner", countMiner);
        autominer.innerHTML = `У вас купленно ${countMiner} авто майнеров`;
        click()
    } else {
        alert("У вас не хватает баланса!")
    }

}

function click(){
    setInterval(function(){
        btnCoin.click()
    }, 1000) 
}