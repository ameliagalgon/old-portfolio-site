var $current_page = null;
var $next_page = null;
$(document).ready(function(){
   $("#home").addClass("active_page");
    //home page link
    $("#logo").click(function(){
        $current_page = $(".active_page");
        $next_page = $("#home");
        switchPages();
    });
    //portfolio link
    $("#portfolio_link").click(function(){
        $current_page = $(".active_page");
        $next_page = $("#portfolio");
        switchPages();
    });
    //projects link
    $("#projects_link").click(function(){
        $current_page = $(".active_page");
        $next_page = $("#projects");
        switchPages();
    });
    //about link
    $("#about_link").click(function(){
        $current_page = $(".active_page");
        $next_page = $("#about");
        switchPages();
    });
    //contact link
    $("#contact_link").click(function(){
       $current_page = $(".active_page");
        $next_page = $("#contact");
        switchPages();
    });
});

function switchPages(){
    $current_page.removeClass("active_page");
    $next_page.addClass("active_page");
}