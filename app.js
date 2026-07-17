// ================================
// MagDent Platform
// app.js
// ================================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Fade animation on scroll
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.2

});

document.querySelectorAll(".feature-card,.product-card,.affiliate,.cta").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// Button click effects
document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        btn.style.transform="scale(.95)";

        setTimeout(()=>{

            btn.style.transform="scale(1)";

        },150);

    });

});

// Header shadow while scrolling
window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.boxShadow="0 10px 30px rgba(0,0,0,.25)";

    }else{

        header.style.boxShadow="none";

    }

});

console.log("✅ MagDent Platform Loaded");
.hidden{

    opacity:0;

    transform:translateY(40px);

    transition:all .8s ease;

}

.show{

    opacity:1;

    transform:translateY(0);

}

