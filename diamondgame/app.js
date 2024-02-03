let randomNum=document.querySelector('.counter')
let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let topSum=0
topSum=topSum+random(19,120)
randomNum.textContent=topSum

let redstone=document.querySelector('.redstone')
let diamond=document.querySelector('.diamond')
let emerald=document.querySelector('.emerald')
let lapislazuli=document.querySelector('.lapislazuli')
let totalscore=document.querySelector('.total-score')

let iconarray=[redstone,diamond,emerald,lapislazuli]
var allSum=0
// let random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
iconarray.forEach((e)=>{
    e.addEventListener('click', function(){
        allSum=allSum+ random(1,12)
        totalscore.textContent=allSum
    })
})






