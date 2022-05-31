$(document).ready(function(){
    // selectors
    $(".first-li").click(toggleSubMenu);
    // $(".first-li ").click(function(){
    //     $(".sidebar-sub-menu li ").off("click");
    // });
    // hide user 
    $(".removeUser").click(function(){
        console.log();
        $(this.parentElement.parentElement.parentElement).hide();
    })

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
       targetElement.children[0]?.children[0]?.children[1]?.classList.toggle("show");
    }
    
}



//endline
});