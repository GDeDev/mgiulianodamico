/* About section tabs */
(()=>{
        const aboutSection = document.querySelector(".about-section");
        const tabsContainer = document.querySelector(".about-tabs");

        tabsContainer.addEventListener("click", (event)=>{
          /*   If event.target contains 'tab-item' class and not contains 'active' clas  */
          if (event.target.classList.contains("tab-item") && 
                !event.target.classList.contains("active")) {
              const target = event.target.getAttribute("data-target");
              /* Desactivate existing active 'tab-item' */
              tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active")
              /* activate new 'tab-item' */
              event.target.classList.add("active","outer-shadow");
              /* desactivate existing active 'tab-content' */
              aboutSection.querySelector(".tab-content.active").classList.remove("active")
              /* activate new 'tab-content' */
              aboutSection.querySelector(target).classList.add('active');
          }
        })
})();