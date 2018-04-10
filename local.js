function clock() {
 var date = new Date(),
     hours = date.getHours(),
     minutes = date.getMinutes(),
     meridiem,
     am = hours <= 12,
     pm = hours >= 12,
     time;
  
  // var time = (hours == 0 ? 12 : hours) + ':' 
  //          + (minutes < 10 ? '0' + minutes : minutes) 
  //          + (pm ? ' PM' : ' AM');
  
  if (hours == 0) {
    hours = 12;
  }
  
  if (minutes.length == 1) {
    minutes = '000' + minutes;
  }
  
  if (am) {
    meridiem = 'AM';
  }
  
  if (pm) {
    hours -= 12;
    meridiem = 'PM';
  }
  
  time = hours + ':' + minutes + ' ' + meridiem;
  
  $('.time')[0].innerHTML = time;
}




// WINDOW ON LOAD
window.onload = function() {
  setInterval(function() {
    clock();
  }, 1000);
}
