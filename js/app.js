var $current_page = null;
var $next_page = null;
var $current_category = null;
var $next_category = null;
var $current_link = null;
var $next_link = null;
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
        //in case there is already a current category
        $current_category = $(".current_category");
        if($current_category == null){
            $("#painting").addClass("current_category");
            $("#painting_link").addClass("current");
        }
        else{
            $next_category = $("#painting");
            $current_link = $(".current");
            $next_link = $("#painting_link");
            switchCategories();
        }
    });
    //painting, drawing and design
    $("#painting_link").click(function(){
        $current_category = $(".current_category");
        $next_category = $("#painting");
        $current_link = $(".current");
        $next_link = $(this);
        switchCategories();
    });
    $("#drawing_link").click(function(){
       $current_category = $(".current_category");
        $next_category = $("#drawing");
        $current_link = $(".current");
        $next_link = $(this);
        switchCategories();
    });
    $("#design_link").click(function(){
       $current_category = $(".current_category");
        $next_category = $("#design");
        $current_link = $(".current");
        $next_link = $(this);
        switchCategories();
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
function switchCategories(){
    $current_category.removeClass("current_category");
    $next_category.addClass("current_category");
    $current_link.removeClass("current");
    $next_link.addClass("current");
}