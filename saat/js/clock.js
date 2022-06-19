const myName = document.getElementById('myName')
const myClock = document.getElementById('myClock')

var isim = window.prompt("Lütfen adınızı giriniz.")


let day = new Date().getUTCDay()
switch (day) {
    case 0:
        day='Pazartesi'
        break;
    case 1:
        day='Salı'
        break;
    case 2:
        day='Çarşamba'
        break;
    case 3:
        day='Perşembe'
        break;
    case 4:
        day='Cuma'
        break;
    case 5:
        day='Cumartesi'
        break;
    default:
        day='Pazar'
        break;
}
let clock = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}  ${day}`


myClock.innerHTML = clock
myName.innerHTML=isim