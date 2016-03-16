// change css using jquery
// $("#txt").css({ color: "blue", fontSize: "25px" });

// 4 / 2 = 2
// 4 / 3 = 1 R1

// 4 % 2 = 0
// 4 % 3 = 1

// 2 % 2 = 0
// 3 % 2 = 1

// if a number is even then % with 2 will return 0
// otherwise if a number is odd then % with 2 will return 1

$(document).ready(function() {
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = isAMorPM(h);
    isEven(m);
    h = changeMilitary(h);
    m = checkTime(m);
    s = checkTime(s);
    
    $('#txt').html(h + ":" + m + ":" + s + ampm);
    setTimeout(startTime, 500);
  }


  function changeColor() {
    setInterval(function(){ setColor() }, 300000);

    function setColor() {
      var x = document.body; // $("body")
      x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
    }
    function stopColor() {
      clearInterval(myVar);
    }
  }

  function fontSize() {
    setInterval(function fontSize(){
      var back = [12, 40, 20, 60, 18];
      var rand = back[Math.floor(Math.random() * back.length)];
      $('div').css('fontSize',rand);     
    }, 3600000);
  }

  function isAMorPM(i) {
    var value;
    if (i >= 12) {
      value = "PM"
    } else {
      value = "AM"
    }
    return value;
  }

  function changeMilitary(i) {
    if (i > 12) {
      i = i - 12;
    }
    return i;
  }

  function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
  }

  function isEven(i){
    if (i % 2 == 0){ // even
      $("body").css({"color":"red"});
    }else{ // odd
      $("body").css({"color":"blue"});
    }
  }


  startTime();
  changeColor();
  fontSize();


});
