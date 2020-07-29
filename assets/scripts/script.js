let showNavMenu = false;

function displayNavMenu(){
    
    showNavMenu = !showNavMenu;
    changeNavMenuClass(showNavMenu);

}

function changeNavMenuClass(value){
    let element = document.getElementById("display-sidebar");
    
    if(!value)
    {
      /*  element.classList.remove("hide-div"); */
        element.style.cssText = "left: -100vw";
        

    }   
    else{
       /* element.classList.add("hide-div"); */
        element.style.cssText = "left: 0";
        
    }
    
}

function displayPopup(value){
    let item = document.getElementById("popup-display");
    let obj = document.getElementById("header");
    let point = document.getElementById("container-inbox");

    if(value){
        item.classList.remove("hide-div");
        obj.style.cssText = "opacity: 0.2";
        point.style.cssText = "opacity: 0";

    }

    else{
        item.classList.add("hide-div");
        obj.style.opacity = "";
        point.style.opacity = "";
        
    }
}



