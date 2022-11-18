gsap.registerPlugin(ScrollTrigger);

gsap.from(".nav-item", { scrollTrigger: {
    trigger:".nav-item",
    toggleActions: "restart restart restart restart"}, 
    opacity:0, ease:"bounce", duration:0.2, stagger:1})

    gsap.from(".photo1", { scrollTrigger: {
        trigger:".photo1",
        toggleActions: "play restart restart restart", 
        }, 
     opacity:0, duration:2, delay:1})   


     gsap.from(".name", { scrollTrigger: {
        trigger:".name",
        toggleActions: "play restart restart restart", 
        }, 
        y:100, ease:"power1", duration:1, delay:1, opacity:0}) 

    gsap.from(".name2", { scrollTrigger: {
        trigger:".name2",
        toggleActions: "play restart restart restart", 
        }, 
        y:100, ease:"power1", duration:1, delay:1, opacity:0}) 
        
    gsap.from(".name3", { scrollTrigger: {
        trigger:".name3",
        toggleActions: "play restart restart restart", 
        }, 
        y:100, ease:"power1", duration:1, delay:1, opacity:0}) 

gsap.from(".services1", { scrollTrigger: {
    trigger:".services1",
    toggleActions: "restart restart restart restart"}, 
 x:100, ease:"power1", duration:1, delay:0, opacity:0, stagger:1,})

 gsap.from(".services2", { scrollTrigger: {
    trigger:".services2",
    toggleActions: "restart restart restart restart"}, 
 x:-100, ease:"power1", duration:1, delay:1, opacity:0, stagger:1,})

 gsap.from(".services3", { scrollTrigger: {
    trigger:".services3",
    toggleActions: "restart restart restart restart"}, 
 x:100, ease:"power1", duration:2, delay:1, opacity:0, stagger:1,})

 gsap.from(".carousel-inner", { scrollTrigger: {
    trigger:".carousel-inner",
    toggleActions: "restart restart restart restart"}, 
 scale:1.1, duration:1, delay:1, opacity:0})

  

    gsap.from(".photo-offer", { scrollTrigger: {
        trigger:".photo-offer",
        toggleActions: "restart restart restart restart"}, 
      duration:2.5, delay:1, opacity:0})

      gsap.from(".gallery-container", { scrollTrigger: {
        trigger:".gallery-container",
        toggleActions: "play restart restart restart", 
        }, 
        y:100, ease:"power1", duration:1, delay:1, opacity:0}) 

        gsap.from(".row", { scrollTrigger: {
            trigger:".row",
            toggleActions: "play restart restart restart", 
            }, 
            y:100, ease:"power1", duration:1, delay:1, opacity:0})
            
gsap.from(".form1", { scrollTrigger: {
    trigger:".form1",
    toggleActions: "restart restart restart restart"}, 
    duration:2.5, delay:1, opacity:0})