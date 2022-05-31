
$(document).ready(function(){
    // toogle sub menu
$(".parent-li").click(function (e){
        targetElement  = this;
        const subMenu = this?.children[1];
        if(subMenu){
         subMenu.classList.toggle("show");
         e.stopPropagation();
        };
        // toggle sort icon
        if(targetElement.children[0].children[0].children[0]){
            targetElement.children[0].children[0].children[0].classList.toggle("hide");
            targetElement.children[0]?.children[0]?.children[1]?.classList.toggle("show");
         }
});
$(".sub-li").click(function (e){
    e.stopPropagation()
});

    // remove user from direct msg list 
    $(".removeUser").click(function(){
        $(this.parentElement.parentElement.parentElement).hide();
    })



//endline
});