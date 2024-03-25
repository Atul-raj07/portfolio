var timer = document.querySelector("#timer")
// var i = 0

let i = 0; // Initialize i to 0

const load = () => {
    if (i < 100) {
        i++; // Increment i
        timer.innerHTML = i
        console.log(i); // Log the current value of i
    } else {
        var tl = gsap.timeline()
        // gsap.to("#upcover",{
        //     left : "-100%",
        //     y : -400,
        //     ease: "steps(12)",
        // })
        // gsap.to("#downcover",{
        //     x : "100%",
        //     y : 400,
        //     ease: "steps(12)",
        //     opacity : "0%",
        // })
        // tl.to("#launch",{
        //     // opacity : 0,
        //     duration :1.5,
        //     delay : .2,
        //     // color :" red",
        //     ease: "elastic.out(1,0.3)",
        // })
        // tl.to("#loader",{
        //     // borderRadius : "50%",
        //     duration : 1.5,
        //     delay : 1.5,
        //     x: "-100%",

            
        // })
        tl.to("#main-web",{
            x : 0,
            // borderRadius : "100%",
            // delay: -1.35,
            // delay : 0
            // duration:1.4
            // duration : 
        })
        
        clearInterval(intervalId); // Stop the interval
    }
}

// Call load every 100ms
const intervalId = setInterval(load, 10);


document.querySelector("#name h2").addEventListener("mouseenter",function(){
    this.innerHTML = "ATul raj gupta"
    // innerHTML = "ATul raj gupta"
    gsap.from(this,{
        duration : 1,
        opacity :0,
        x : -100
    })
})
document.querySelector("#name h2").addEventListener("mouseleave",function(){
    this.innerHTML = "('name')"
})
Shery.mouseFollower();