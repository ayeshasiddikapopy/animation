var tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.two',
        start: '0% 50%',
        end: '50% 70%',
        scrub:2,
        markers:true,
        duration:2,
        
    }
})

tl.to('#box1',{
    top:'160%',
    left:'9%',
    duration:1
})