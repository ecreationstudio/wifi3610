"use strict";

document.addEventListener("DOMContentLoaded", function(){
    let myOffcanvas = document.getElementById('offcanvasNavbar');
    let bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    let navLinks = document.getElementsByClassName('nav-link');
    let navigationBar = document.querySelector("nav");

    // Optional
    // document.addEventListener('scroll',function(e) {
    //     let currentPos = window.scrollY;
    //     if(currentPos >= 100) {
    //         navigationBar.classList.add("fixed-top");
    //     }else {
    //         navigationBar.classList.remove("fixed-top");
    //     }
    //     // console.log(window.scrollY);
    // })
    
    document.getElementById("OpenMenu").addEventListener('click',function (e){
        e.preventDefault();
        e.stopPropagation();
        bsOffcanvas.toggle();
    });

    for(let navLink of navLinks) {
        navLink.addEventListener("click", e => {
            e.preventDefault();
            bsOffcanvas.hide();
            console.log(e.target.getAttribute("href"));
            let anker = e.target.getAttribute("href");
            let ankerEl = document.querySelector(anker);
            let ankerElPos = ankerEl.offsetTop;
            let offset = navigationBar.offsetHeight;
            window.scrollTo({
                top: ankerElPos - offset,
                behavior: 'smooth'
            })
            console.log(ankerElPos);
        });
    }

});
