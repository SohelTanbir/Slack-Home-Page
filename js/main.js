$(document).ready(function(){
    // selectors
    $(".sidebar-top-item li ").click(toggleSubMenu)

// toggle sub menu
function toggleSubMenu(){
    const subMenu = this?.children[1];

    if(subMenu){
     subMenu.classList.toggle("show");
    }
    toggleIcon(this);
}

// toggle sub menu icon
function toggleIcon(targetElement){
    if(targetElement.children[0].children[0].children[0]){
       targetElement.children[0].children[0].children[0].classList.toggle("hide");
       targetElement.children[0].children[0].children[1].classList.toggle("show");
    }
    
}


//endline
});