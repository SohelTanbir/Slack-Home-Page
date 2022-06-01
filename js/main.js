
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
$(".bars-icon").click(function(){
    $("#sidebar-section").toggle();
})

// toggle search bar
$("#search_input").click(()=>{
    $(".search-popup").toggle();
})
$(".dismiss").click(()=>{
    $(".search-popup").hide();
})

// user profile toggle
$(".user-account").click(()=>{
    $(".profile-details").toggle();
})


//endline
});