let btnCoin = document.querySelector("#btnCoin");
let count = localStorage.getItem("count") ? parseInt(localStorage.getItem("count")) : 0;
let balance = document.querySelector("#balance");

btnCoin.addEventListener('click', function(){
    count += 1;
    localStorage.setItem("count", count);
    balance.innerHTML = `У вас ${count} коинов`;
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