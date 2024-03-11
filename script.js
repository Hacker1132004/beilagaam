var tl = gsap.timeline()
var nmode = document.querySelector("#n-mode")
var night = 0
// mousemove function
const textArray = ["Programmer.", "Music Lover.", "Game Lover."];
const textElement = document.querySelector(".typing-text");
let textIndex = 0;
let isTyping = true;

function updateText() {
    if (isTyping) {
        textElement.textContent = textArray[textIndex];
        isTyping = false;
        setTimeout(updateText, 1500); // Wait 2 seconds before deleting
    } else {
        textElement.textContent = "";
        isTyping = true;
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(updateText, 1000); // Wait 1 second before typing the next text
    }
}

updateText(); // Start the typing animation



var images = ["https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60", "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60","https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"];
// var currentIndex = 0;
// var imageObjects = [];
// for (var i = 0; i < images.length; i++) {
//     var img = new Image();
//     img.src = images[i];
//     imageObjects.push(img);
// }

// function changeImage(x, y) {
//     currentIndex = (currentIndex + 1) % images.length;
//     container.style.backgroundImage = `url('${imageObjects[currentIndex].src}')`;
// }
 // Function to create a new raindrop

 
// const throttleFunction=(func, delay)=>{     
//       let prev = 0;
//       return (...args) => {
//         let now = new Date().getTime();
//         if(now - prev> delay){
//           prev = now;
//           return func(...args); 
//         }
//       }
//     }
//     document.querySelector("#mousemove")
//     .addEventListener("mousemove", throttleFunction((dets)=>{
//       console.log("Mouse moved",dets.clientX,dets.clientY);
//       var div = document.createElement("div");
//       div.classList.add('imagediv');
//       div.style.left = dets.clientX-50+"px";
//       div.style.top = dets.clientY-70+"px"; 
      

//       var img = document.createElement("img");
//       img.setAttribute("src","https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60")
//       div.appendChild(img);

//             // var x = dets.clientX;
//             // var y = dets.clientY;
//             // changeImage(x, y);

//       gsap.to("#mousemove div",{
//         y:"0%",
//         duration: 0.5,
//         delay:0.2,
//         // ease: all
//       })
//       gsap.to("#mousemove>div",{
//         y:"100%",
//         duration: 0.5,
//         delay:0.2,
//         // ease: Power5

//       })

//       var parentDiv = document.getElementById("mousemove");
//         parentDiv.appendChild(div);

//       setTimeout(function(){
//         div.remove();
//       },900)


//     }, 150));



var a = document.querySelector("i")
a.addEventListener("click",function(){
    tl.from("i",{
            rotate: 360,
            // duration:0.9,
            stagger:0,
            repeat: 0,
            scrollTrigger:{
                trigger:"#nav",
                scroller:"body",
                scrub:3

            }
        // rotation: 360
    })
    // tl.from(".ri-contrast-2-fill",{
    //     rotate: 360,
    //     duration:0.9,
    //     stagger:0,
    //     repeat: 0,
    //     scrollTrigger:{
    //         trigger:"#nav",
    //         scroller:"body",
    //         scrub:3
    //     }
    // })
})


function nightmode(){
    nmode = document.querySelector("#n-mode")    
    if (a.className == "ri-contrast-2-fill"){
        a.className = "ri-sun-fill"
    }
    else if(a.className == "ri-sun-fill"){
        a.className = "ri-contrast-2-fill"
        // tl.from(".ri-contrast-2-fill",{
        //     scrollTrigger:{
        //         trigger:"#nav",
        //         scroller:"body",
        //         rotate: 360,
        //         start:"top 0%",
        //         end:"top 0%",
        //         scrub: 3

        //     }
        //     // rotation: 360
        // })
    }
    if (night == 0){
        var main = document.querySelector("#main") 
        var text = document.querySelectorAll("#page-2>#top>#left>h1").onfocus
        main.style.backgroundColor ="black"
        // text.style.color = "white"
        // var textcolor = document.body.style.color;
        night = 1
    }
    else{
        var main = document.querySelector("#main") 
        main.style.backgroundColor = "white"
        night = 0
        
    }
}
tl.from("#nav>img",{
    opacity: 0,
    duration: 0.8
})

tl.from("#navpart-2>h2, #navpart-3",{
    opacity: 0,
    y: -10,
    duration: 0.25,
    stagger: 0.5
})



// tl.to("#navpart-2>h2",{
    //     y: 0,
    //     opacity:1,
    //     stagger: 0.5,
    //     duration: 0.8,
    // })
    
tl.from("#ltop>.img-container",{
    opacity: 0,
    y: -40,
    stagger: 0.25,
    duration: 0.8,
    })
    
tl.from("#lbtm>.img-container",{
    opacity: 0,
    x: -40,
    stagger: 0.25,
    duration: 0.8,        
    })
    
tl.from("#rtop>.img-container",{
    opacity: 0,
    y: 40,
    stagger: 0.25,
    duration: 0.8,
})
    
tl.from("#rbtm>.img-container",{
    opacity: 0,
    x: 40,
    stagger: 0.25,
    duration: 0.8,
    // scrub: 2
})
    
tl.from("#middle>span",{
    x: -50,
    opacity: 0,
    duration: 0.7,
    // stagger:2,
    // scrub:3
})
    
tl.from("#middle>h1",{
    y: -50,
    opacity: 0,
    // scrub: 3,
    duration: 0.8,
})

// Page-2

tl.from("#page-2>#top>#left>h1",{
    opacity: -5,
    y:200,
    scrollTrigger: {
        trigger: "#page-2",
        scroller: "body",
        // yoyo: true,
        scrub: 5,
        // markers: true,
        end: "top 70%",
        start: "top 80%",
    }
})

tl.from("#page-2>#top>#right",{
    opacity: -5,
    x:200,
    scrollTrigger: {
        trigger: "#page-2",
        scroller: "body",
        // yoyo: true,
        scrub: 5,
        // markers: true,
        end: "top 70%",
        start: "top 80%",
    }
})

tl.from("#page-2>#btm>#left",{
    opacity: -5,
    x: -200,
    scrollTrigger: {
        trigger: "#page-2>#btm",
        scroller: "body",
        // yoyo: true,
        scrub: 5,
        // markers: true,
        end: "top 90%",
        start: "top 95%",
    }
})


tl.from("#page-2>#btm>#right>h1",{
    opacity: -5,
    y: -500,
    scrollTrigger: {
        trigger: "#page-2>#btm",
        scroller: "body",
        // yoyo: true,
        scrub: 5,
        // markers: true,
        end: "top 90%",
        start: "top 95%",
    }
})



// tl.from("#page-3>#links>#lang",{
//     y: 10,
//     width: 0,
//     opacity: 0,
//     scrollTrigger: {
//         trigger:"#page-3>#links",
//         scroller: "body",
//         markers:true,
//         start:"top: 40%",
//         end:"top 30%",
//         scrub: 3,
//     }
// })



// project animation
tl.to("#page5>#project>#project-head",{
    y: -400,
    // top: "-100%",
    
    scrollTrigger: {
        trigger:"#project",
        scroller: "body",
        // markers : true,
        scrub: 3,
        start: "top 20%",
        end: "top 10%"
    }
})
tl.to("#page5>#project>#project-foot",{
    y: 400,
    // top: "1000%",
    scrollTrigger: {
        trigger:"#project",
        scroller: "body",
        // markers : true,
        scrub: 3,
        start: "top 20%",
        end: "top 10%"
    }
})



function slider(){
        document.querySelector("#dot1").style.backgroundColor = "black";
        document.getElementById("dot1").addEventListener("click",function(){
            document.querySelector("#page4>#tstm>#first").style.zIndex = "4";
            document.querySelector("#page4>#tstm>#second").style.zIndex = "3";
            document.querySelector("#page4>#tstm>#three").style.zIndex = "2";
            document.querySelector("#page4>#tstm>#four").style.zIndex = "1";


        document.querySelector("#dot1").style.backgroundColor = "black";
        document.querySelector("#dot2").style.backgroundColor = "#4441418b";
        document.querySelector("#dot3").style.backgroundColor = "#4441418b";
        document.querySelector("#dot4").style.backgroundColor = "#4441418b";

        // document.querySelector("#page4>#tstm>#first").style.zIndex = "1";

    })
    document.querySelector("#dot2").addEventListener("click",function(){
        document.querySelector("#page4>#tstm>#second").style.zIndex = "4";
        document.querySelector("#page4>#tstm>#three").style.zIndex = "3";
        document.querySelector("#page4>#tstm>#four").style.zIndex = "2";
        document.querySelector("#page4>#tstm>#first").style.zIndex = "1";

        document.querySelector("#dot2").style.backgroundColor = "black";
        document.querySelector("#dot1").style.backgroundColor = "#4441418b";
        document.querySelector("#dot3").style.backgroundColor = "#4441418b";
        document.querySelector("#dot4").style.backgroundColor = "#4441418b";

        // document.querySelector("#page4>#tstm>#second").style.zIndex = "1";
        })
        document.querySelector("#dot3").addEventListener("click",function(){
            document.querySelector("#page4>#tstm>#three").style.zIndex = "4";
            document.querySelector("#page4>#tstm>#four").style.zIndex = "3";
            document.querySelector("#page4>#tstm>#second").style.zIndex = "2";
            document.querySelector("#page4>#tstm>#first").style.zIndex = "1";
    
            document.querySelector("#dot3").style.backgroundColor = "black";
            document.querySelector("#dot1").style.backgroundColor = "#4441418b";
            document.querySelector("#dot2").style.backgroundColor = "#4441418b";
            document.querySelector("#dot4").style.backgroundColor = "#4441418b";
    
            // document.querySelector("#page4>#tstm>#second").style.zIndex = "1";
            })
            document.querySelector("#dot4").addEventListener("click",function(){
                document.querySelector("#page4>#tstm>#four").style.zIndex = "4";
                document.querySelector("#page4>#tstm>#three").style.zIndex = "3";
                document.querySelector("#page4>#tstm>#second").style.zIndex = "2";
                document.querySelector("#page4>#tstm>#first").style.zIndex = "1";
        
                document.querySelector("#dot4").style.backgroundColor = "black";
                document.querySelector("#dot1").style.backgroundColor = "#4441418b";
                document.querySelector("#dot3").style.backgroundColor = "#4441418b";
                document.querySelector("#dot2").style.backgroundColor = "#4441418b";
        
                // document.querySelector("#page4>#tstm>#second").style.zIndex = "1";
                })
}




slider();