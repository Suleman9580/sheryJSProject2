const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink",{
    stagger: .2,
    y: 20,
    duration: 1,
    ease: Power2,
    opacity: 0
})

Shery.textAnimate("#headings h1",{ 
    style: 2,
    y: 10,
    delay: 0.3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });


gsap.from(".anim2",{
    stagger: .3,
    y: 50,
    opacity: 0,
    ease: Expo,
    duration: 1
})

Shery.imageEffect("#ephemeral img",{
    style: 3,
    config: {"uFrequencyX":{"value":19.83,"range":[0,100]},"uFrequencyY":{"value":13.22,"range":[0,100]},"uFrequencyZ":{"value":33.88,"range":[0,100]},"geoVertex":{"range":[1,64],"value":54.11},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500071491892819},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.13,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
})

Shery.imageEffect(".anim3 img",{
    style: 5,
    config: {"a":{"value":1.74,"range":[0,30]},"b":{"value":-0.19,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7058269411923025},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.43,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
})

gsap.from("#ephemeral img", {
    y: "70",
    opacity: 0,
    duration: 2,
    ease: Expo
})

Shery.imageEffect("#bimg",{
    style: 3,
    config: {"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.7930392528082797},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.13,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":30}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey: true
})


document.querySelector("#future #ftext a").addEventListener("mouseover", function(){
   var video = document.querySelector("#future video")
    video.style.opacity = 1
})

document.querySelector("#future #ftext a").addEventListener("mouseleave", function(){
    var video = document.querySelector("#future video")
     video.style.opacity = 0
 })
 