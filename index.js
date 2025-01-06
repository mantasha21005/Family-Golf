
var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+ 0 +"px"
    crsr.style.top = dets.y+"px"
     blur.style.left = dets.x  - 250 +"px"
    blur.style.top = dets.y - 250 +"px"

})

document.addEventListener("mousemove",function(dets){

})

 var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 3
    crsr.style.border = "0.5px solid #fff"
    crsr.style.backgroundColor = "transparent"
  })
  elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1
    crsr.style.border = "0px solid #95C11E"
    crsr.style.backgroundColor = "#95C11E"
  })
})

gsap.to("#nav",{
  backgroundColor:"#000",
  height:"90px",
  duration:0.5,
  scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -10%",
    end:"top -11%",
    scrub:2,
  }

})
gsap.to("#main",{
  backgroundColor:"#000",
  scrollTrigger:{
    trigger:"#main",
    scroller:"Body",
    start:"top -25%",
    end:"top -70%",
    scrub:2,
  }
})

gsap.from("#about img,about-us",{
  y:90,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    start:"top 70%",
    end:"top 68%",
    scrub:2,
  }
})

gsap.from("#colon1",{
  y:-70,
  x:-70,
  scrollTrigger:{
     trigger:"#colon1",
     scroller:"body",
     start:"top 55%",
     end:"top 44%",
     scrub:4,
  }
  
})
gsap.from("#page4 h1",{
  y:50,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    start:"top 75%",
    end:"top 70%",
    scrub:2,
  }
})