$(document).ready(function(){
    // selectors
    $(".sidebar-top-item li ").click(toggleSubMenu)

// toggle sub menu
function toggleSubMenu(){
    const subMenu = this.children[1];
    subMenu.classList.toggle("show")
}


//endline
});