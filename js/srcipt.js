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


  // -----------
  // let cursor = document.querySelector('.cursor')
  // let object = document.querySelector('.object')
  // document.addEventListener('mousemove', paralax)

  // function paralax(e) {

  //   cursor.style.top = (e.clientX + 'px') 
  //   cursor.style.left = (e.clientY + 'px') 
    

  //   object.forEach(function(move){

  //     let moving = move.getAttribute(`${data-value}`);
  //     let x =( e.clientX + moving ) / 250
  //     let y =( e.clientY + moving ) / 250

  //     move.style.transform = `${translateX("+ x + ") translateY(" + y + )}`
  //   })
  //   console.log( e.clientX )
  // }
  let mouse =document.querySelector(".cursor");

 
 window.addEventListener('mousemove',cursor);

 function cursor(e){
     mouse.style.top = e.clientY + "px";
     mouse.style.left = e.clientX + "px";
 }
 