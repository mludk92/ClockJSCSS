console.log('working')

const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDateSeconds(){
    const nowS = new Date()
    const seconds = nowS.getSeconds()
    const secondsDegrees = ((seconds / 60) *360 ) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    console.log(seconds,'sec') 
    
}
function setDateMin(){
    const nowM = new Date()
    const min = nowM.getMinutes()   
    const minDegrees = ((min / 60) *360 ) + 90
    minHand.style.transform = `rotate(${minDegrees}deg)`
    console.log(min,'min') 
    
}
function setDateHour(){
    const nowH = new Date()
    const hour = nowH.getHours()
    const hourDegrees = ((hour / 12) *360 ) +90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    console.log(hour,'hour') 
    
}
setInterval(setDateSeconds,1000)
setInterval(setDateMin,10000)
setInterval(setDateHour,100000)   
setDateSeconds()
setDateMin()
setDateHour()