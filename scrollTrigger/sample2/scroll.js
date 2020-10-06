// gsap

gsap.to(".section-intro .inner",{
    scrollTrigger:{
        trigger:".section-intro",
        start:"center center",
        // end:"top bottom",
        markers:{
            startColor:"white",
            endColor:"yellow",
        },
        id:"intro",
        
    }
})