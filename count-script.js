const daye = document.getElementById('days.')
const hourse = document.getElementById('hours.')
const mine = document.getElementById('mins.')
const secondse = document.getElementById('seconds.')

const newYears = '29 june 2023' 

function countdown(){
    const newYearsDate= new Date(newYears);
    const currentDate= new Date(); 

    const totalseconds=(newYearsDate - currentDate) /1000;

    const days= Math.floor(totalseconds/3600/24);
    const hours= Math.floor(totalseconds/3600)%24;
    const mins= Math.floor(totalseconds/60)%60;
    const secs= Math.floor(totalseconds)%60;

    daye.innerHTML=days;
    hourse.innerHTML=hours;
    mine.innerHTML=mins;
    secondse.innerHTML=secs;
    
}

countdown();

setInterval(countdown,1000)