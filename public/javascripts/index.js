var currentmood;
var slider=document.querySelector("#slider");
var start =document.querySelector("#start")
var mood=document.querySelector("#mood");
var update=document.querySelector("#update")

function getThumbXCoordinate() {
    // Calculate the position of the thumb based on the value
    var thumbPosition = (slider.value - slider.min) / (slider.max - slider.min);
    var thumbXCoordinate = thumbPosition *100

    return thumbXCoordinate;
}

 function getCurrentMood(){
        var sliderCordinates=getThumbXCoordinate()
         console.log(sliderCordinates+"%")

        if (sliderCordinates <= 20) {
           mood.innerHTML="Happy"
           update.href="/mood_update/happy"
        } else if (sliderCordinates <= 40) {
            mood.innerHTML="joyful"
            update.href="/mood_update/joyful"
        } else if (sliderCordinates <= 60) {
            mood.innerHTML="angry"
            update.href="/mood_update/angry"
        } else if (sliderCordinates <= 80) {
            mood.innerHTML="sad"
            update.href="/mood_update/sad"
        } else {
            mood.innerHTML="depress"
            update.href="/mood_update/depress"
        }
}

slider.addEventListener("input",function(){
        var currentMood = getCurrentMood();
        // Send the current mood to the server
        fetch("/update-mood", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mood: currentMood }),
        })
          .then(response => response.json())
          .then(data => {
            console.log("Mood updated successfully", data);
            // Handle success or update the UI as needed
          })
          .catch(error => {
            console.error("Error updating mood", error);
            // Handle errors
          });
      });




