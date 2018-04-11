// CLOCK
function clock() {
 var date = new Date(),
     month,
     year,
     day,
     hour,
     minute,
     meridiem,
     am,
     pm,
     time,
     desktop;
  
  function characterVariationsDestinction() {
    desktop = $('.time').parents('.desktop').length;
  }
  characterVariationsDestinction();
  
  function monthConversions() {
    month = date.getMonth();

      if (month == 0) {
        month = 'January';
      }

      if (month == 1) {
        month = 'February';
      }

      if (month == 2) {
        month = 'March';
      }

      if (month == 3) {
        month = 'April';
      }

      if (month == 4) {
        month = 'May';
      }

      if (month == 5) {
        month = 'June';
      }

      if (month == 6) {
        month = 'July';
      } 
      
      if (month == 7) {
        month = 'August';
      } 
      
      if (month == 8) {
        month = 'September';
      } 
      
      if (month == 9) {
        month = 'October';
      } 
      
      if (month == 10) {
        month = 'November';
      } 
      
      if (month == 11) {
        month = 'December';
      } 
  }
  monthConversions();
  
  function yearConversions() {
    year = date.getYear();
  }
  yearConversions();
   
  function dayConversions() {
    day = date.getDay();
    
    if (desktop) {
      if (day == 0) {
        day = 'Sun';
      }

      if (day == 1) {
        day = 'Mon';
      }

      if (day == 2) {
        day = 'Tue';
      }

      if (day == 3) {
        day = 'Wed';
      }

      if (day == 4) {
        day = 'Thu';
      }

      if (day == 5) {
        day = 'Fri';
      }

      if (day == 6) {
        day = 'Sat';
      } 
    }
  }
  dayConversions();
  
  function hourConversions() {
    hour = date.getHours();
    
    if (hour == 0) {
      hour = 12;
    }
    
    if (hour <= 12) {
      hour -= 12;
    }
  }
  hourConversions();
  
  function minuteConversions() {
    minute = date.getMinutes();
    
    if (desktop) {
      if (minute < 10) {
        minute = '0' + minute;
}
    }
  }
  minuteConversions();
  
  function meridiemConversions() {
    am = hour <= 12,
    pm = hour >= 12;
    
    if (am) {
      meridiem = 'AM';
    }

    if (pm) {
      hour -= 12;
      meridiem = 'PM';
    }
  }
  meridiemConversions();
  
  function placements() {
    if (desktop) {
      time = day + ' ' + hour + ':' + minute + ' ' + meridiem;
      
      $('.desktop .menu-bar .time')[0].innerHTML = time;
    }
  }
  placements();
}




// WINDOW ON LOAD
window.onload = function() {
  setInterval(function() {
    clock();
  }, 1000);
}
