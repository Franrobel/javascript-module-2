function setAlarm() {

  var counter = document.querySelector("#alarmSet").value;

  var timerMessage = document.querySelector("#timeRemaining");

  let minutes;

  let seconds;

  setMinutesAndSeconds();
  let startCounter = setInterval(decreaseCounter, 1000)


  function decreaseCounter() {
    if (counter > 0) {
      counter = counter - 1;
      console.log(counter);
      setMinutesAndSeconds();
    } else {

      Stop();
      playAlarm();
    }
    function Stop() {
      clearInterval(startCounter);
    }
  }



  function setMinutesAndSeconds() {

    if (counter < 60) {
      minutes = "00"
      seconds = counter;
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
    }

    if (counter >= 60) {
      if (counter % 60 === 0) {
        seconds = "00";
        minutes = counter / 60;
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        /*if (seconds < 10) {
            seconds = "0" + seconds;
        }*/
      } else {
        let minutesAndSeconds = (counter / 60).toString();

        minutes = parseInt(minutesAndSeconds.split(".")[0]);
        seconds = counter - (minutes * 60);

        // minutes = Math.trunc(counter / 60)
        // seconds = counter % 60

        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
      }


    }

    timerMessage.innerHTML = `Time Remaining: ${minutes}:${seconds}`;
  }

}
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
