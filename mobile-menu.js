    const menu = document.querySelector(".mobile-nav>#mobile-nav-section");
    const navLinks = document.querySelectorAll(".mobile-nav>#mobile-nav-section>nav a");
    const menuButton = document.getElementById("menu-button");
    const crossButton =  document.getElementById("cross-button")
    menuButton.addEventListener("click", showMenu);
    crossButton.addEventListener("click", hideMenu);

    function showMenu(){
        menu.style.display = "block";
        menuButton.style.display = "none";
    }
    
    function hideMenu(){
        menu.style.display = "none";
        menuButton.style.display = "block";
    }

    for(let link of navLinks){
        link.addEventListener("click",hideMenu);
    }


