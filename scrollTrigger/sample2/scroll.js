// gsap

gsap.from(".section-intro .inner",{
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".section-intro",
        start:"center bottom",// 앞에는 해당요소 뒤에는 뷰포트 크기
        end:"top bottom",
        markers:{
            startColor:"red",
            endColor:"green",
        },
        id:"intro",
        
    }
});

gsap.from(".section-discussion .inner",{
    opacity:0,
    scrub:true,
    scrollTrigger:{
        trigger:".section-discussion",
        start:"center bottom",
        end:"bottom bottom",

        markers:{
            startColor:"blue",
            endColor:"black",
        },
        id:"intro",
    }

})