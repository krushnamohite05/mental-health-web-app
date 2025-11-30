console.log("run")

function get_new_quote(){
        
    var quote = document.querySelector("p");
    
                var quote_box = [
                "The wound is the place where the light enters you.",
                "Rise above the storm and you will find the sunshine.",
                "Find joy in the journey.",
                "Breathe. Believe. Receive.",
                "Smile, it's free therapy.",
                "Every day may not be good, but there's something good in every day",
                "Wherever life plants you, bloom with grace",
                "Don't count the days, make the days count.",
                "The bravest thing you can do is to keep going when you feel like giving up.",
                "It's okay not to be okay; healing is messy, but it's a journey worth taking.",
                "In the process of healing, you'll rediscover parts of yourself you thought were lost.",
                "Your mental health matters. You are deserving of the support needed for your healing.",
                "Healing is an ongoing process, not a one-time event. Be patient with yourself."
            ];
    var i = Math.floor(Math.random()*quote_box.length);
    quote.innerHTML = '"' + quote_box[i] + '"';
}

document.addEventListener("load", get_new_quote());


var tl=gsap.timeline()
tl.to(".loader", {
    opacity: 0,
    duration: 3.2,
    delay: 3.5,
    display: "none"
});

tl.from("#s1",{
    rotation:360,
    repeat:-1,
    duration:10,
   // yoyo:true
})

gsap.from("#b1 , #b3",{
    y:15,
    repeat:-1,
    duration:3,
    yoyo:true,
    stagger:0.5,
})

const bird = document.getElementById('b2');

function resetBirdPosition() {
  bird.style.left = '-20%'; // Reset the bird's position when the animation completes a cycle
}

bird.addEventListener('animationiteration', resetBirdPosition);
