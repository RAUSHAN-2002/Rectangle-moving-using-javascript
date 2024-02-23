window.addEventListener("mousemove",function(dets){
    var rectangle = document.getElementById("rectangle");

    var xvalue = gsap.utils.mapRange(
        0,
        window.innerWidth,
        100 +rectangle.getBoundingClientRect().width / 2,
        this.window.innerWidth - (100 + rectangle.getBoundingClientRect().width / 2),
        dets.clientX
    )    
    gsap.to('#rectangle',{
         left: xvalue + "PX",
         ease: Power3,
    })
})