console.clear()

var minDuration = 30; //minutes
var hourCushion = 10; //minutes
var maxDuration = 60 - 2*hourCushion;
var timeRemaining = 0

function startTimer(){
  var minsNow = (new Date).getMinutes()
  var start = 0
  var duration = 0
  //  start the timer in the future 
  if (minsNow > 60 - hourCushion) {
    start = hourCushion
    duration = 60 - minsNow + start
  } else if (minsNow < hourCushion){
    start = hourCushion
    duration = start - minsNow
  }
  var randomAddition = Math.floor(Math.random() * maxDuration)
  var delay = duration + randomAddition
  if (delay < minDuration) delay = minDuration
  else if (delay > maxDuration) delay = maxDuration
  timeRemaining = delay * 60 //to seconds
  console.log('minsNow', minsNow)
  console.log('start', start)
  console.log('duration', duration)
  console.log('addition', randomAddition)
  console.log('delay', delay)
  console.log('timeRemaining', timeRemaining)
}

setInterval( function(){
  if ( timeRemaining === 0 ) return
  if (--timeRemaining === 0) {
    $('#timer').text("✌")
    $('#sound')[0].play();
    setTimeout( startTimer, 3000 )
    return
  }
  var minutes = Math.floor(timeRemaining / 60)
  var seconds = Math.floor(timeRemaining % 60)
  if (minutes < 10) minutes = "0" + minutes
  if (seconds < 10) seconds = "0" + seconds
  $('#timer').text(minutes + ":" + seconds)
  
}, 1000)

startTimer()