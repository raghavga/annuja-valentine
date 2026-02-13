const enterBtn = document.getElementById("enterBtn");
const intro = document.querySelector(".intro");
const main = document.querySelector(".main");
const music = document.getElementById("bgMusic");

enterBtn.addEventListener("click",()=>{
    intro.style.display="none";
    main.classList.remove("hidden");
    music.play();
});

/* Slideshow */
const images=[
    "assets/images/couple1.jpg",
    "assets/images/couple2.jpg",
    "assets/images/couple3.jpg"
];

let index=0;
setInterval(()=>{
    index=(index+1)%images.length;
    document.getElementById("slide").src=images[index];
},3000);

/* Move NO Button */
document.getElementById("noBtn").addEventListener("mouseover",()=>{
    const x=Math.random()*200-100;
    const y=Math.random()*200-100;
    document.getElementById("noBtn").style.transform=`translate(${x}px,${y}px)`;
});

/* YES Scene */
document.getElementById("yesBtn").addEventListener("click",()=>{
    document.body.innerHTML=`
    <div style="height:100vh;background:black;color:white;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;">
        <h1 style="font-size:45px;color:#ff004f;">SHE SAID YES ❤️💍</h1>
        <p style="margin-top:20px;font-size:22px;">Our Bollywood love story begins now ✨</p>
    </div>
    `;
});
