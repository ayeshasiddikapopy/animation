var tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.two',
        start: '0% 50%',
        end: '50% 70%',
        scrub:2,
        // markers:true,
        duration:2,
        
    }
})

tl.to('#box1',{
    top:'160%',
    left:'9%',
    duration:1
})
var t2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.three',
        start: '0% 50%',
        end: '50% 70%',
        scrub:2,
        // markers:true,
        duration:2,
        
    }
})
t2.to('#box1',{
    top:'250%',
    left:'50%',
    duration:1
})

// Function to handle the resize event
let handleResize= () => {
    if (window.innerWidth > 500) {
      console.log('hello');
    } else {
      // GSAP animation
      gsap.to('#box1', {
        top: '250%',
        left: '30%',
        duration: 1
      });
    }
  }
  
  handleResize();

  window.addEventListener('resize', handleResize);