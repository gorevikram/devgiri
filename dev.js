let crse = document.querySelector("#cursor-blur")
let crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +"px"
    crsr.style.top = dets.y+"px"
    crse.style.left = dets.x -250 + "px"
    crse.style.top = dets.y -250 + "px"
})

let h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor ="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px chartreuse"
        crsr.style.backgroundColor ="chartreuse"
    })
})





 

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.1,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1 
    }
})
gsap.to("#main",{
    backgroundColor :"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top-25%",
        end:"top -70%",
        scrub:2
   }
})


gsap.to("#about-us img,#about-us-in,",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }
})

gsap.to(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }
}) 