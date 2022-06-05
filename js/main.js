
$(document).ready(function(){
    // toogle sub menu
$(".parent-li").click(function (e){
        targetElement  = this;
        const subMenu = targetElement?.children[1];
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
    e.stopPropagation();
});

    // remove user from direct msg list 
    $(".removeUser").click(function(){
        $(this.parentElement.parentElement.parentElement).hide();
    })

// send message 
let messageText = "";
$("#send-btn").click(sendMessage);
$(document).on("keypress", function(e){
    if(e.which == 13){
        sendMessage();
    }
})
function sendMessage(){
    if(messageText){
        $(".inbox-message").append(`<div class="message-sender">
        <div class="photo">
            <img src="images/user/sohelrana.jpg" alt="message sender">
        </div>
        <div class="sender-info">
            <h4 class="sender-name">Sohel <small>6:30 PM</small></h4>
            <p>${messageText}</p>
        </div>
    </div>`)
    }
    // clear text from textara
    $(".textarea-message").val("");
    // empty string after send message
    messageText = "";
}
// handle user input 
$(".textarea-message").bind("input propertychange", handleChange);
function handleChange(){
    messageText = $(this).val().trim(); 
}
// togggle sidebar section on md device 
let sidebarOpen = false;
$(".bars-icon").click(function(e){
    $("#sidebar-section").css({left:0, visibility:'visible', transition:'ease-in 0s'})
    e.stopPropagation();
    sidebarOpen = true;
    
})
$("#main-content").click(function(){
    if(sidebarOpen){
        $("#sidebar-section").css({left:"-100%", visibility:'hidden', transition:'ease-in .3s'});
        sidebarOpen = false;    
    }
})

// toggle search bar
$("#search_input").click((e)=>{
    $(".search-popup").toggle();
    e.stopPropagation();
})
$("#main-content").click(()=>{
    $(".search-popup").hide();
})
$(".dismiss").click(()=>{
    $(".search-popup").hide();
})

// user profile toggle
$(".user-account").click((e)=>{
    $(".profile-details").toggle();
    e.stopPropagation();
})
$("#main-content").click((e)=>{
    $(".profile-details").hide();
})
// title bar sort filter 
$("#sort-filter").click(function(e){
    $("#main-content .title-bar .popup-info").toggle();
    e.stopPropagation();
})
$("#main-content").click(function(){
    $("#main-content .title-bar .popup-info").hide();
})
// toggle sidebar title company info popup
$(".sidebar-title").click(function(e){
    $(".sidebar-title .popup-info").toggle();
    e.stopPropagation();
})
$("#main-content").click(function(){
    $(".sidebar-title .popup-info").hide();
});
// handle emoji action
$(".emoji").click(function(e){
    e.stopPropagation();
    const allEmoji = this.parentElement.parentElement.parentElement.parentElement.children[3];
    allEmoji.style.display = "block";
    console.log($(".popup-info.emoji-popup").is("[style]"));
   if($(".popup-info.emoji-popup").is("[style]")){
    $("#main-content").css({overflow:"hidden"})
   }

});
$("#main-content").click(function(){
    const allEmoji = this.parentElement.parentElement.parentElement.parentElement.children[3];
    $(".popup-info.emoji-popup").hide();
    $(".popup-info.emoji-popup").removeAttr("style");
    $("#main-content").css({overflow:"auto"})
});

// handle show more users
$(".show-more-title").click(function(){
    $(".show-more-users").toggle()
})

//endline
});