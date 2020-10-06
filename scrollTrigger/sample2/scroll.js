// gsap

gsap.from(".section-intro .inner",{
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".section-intro",
        start:"center bottom",// 앞에는 해당요소 뒤에는 뷰포트 크기
        // end:"top bottom",
        markers:{
            startColor:"red",
            endColor:"green",
        },
        id:"intro",
        
    }
})