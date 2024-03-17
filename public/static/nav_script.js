"use strict";
 console.log(' nav script loading');
  var navbar = document.querySelector(".navbar")
  window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky"):
      navbar.classList.remove("sticky")
  }
