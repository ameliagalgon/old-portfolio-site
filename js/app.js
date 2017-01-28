var $current_page = null;
var $next_page = null;
var $current_category = null;
var $next_category = null;
var $current_link = null;
var $next_link = null;
var $current_page_link = null;
var $next_page_link = null;
$(document).ready(function(){
   $("#home").addClass("active_page");
    //home page link
    $("#logo").click(function(){
        $current_page = $(".active_page");
        $next_page = $("#home");
        $current_page_link = $(".active_page_link");
        $next_page_link = null;
        switchPages();
    });
    //portfolio link
    $("#portfolio_link").click(function(){
        $current_page = $(".active_page");
        $next_page = $("#portfolio");
        $current_page_link = $(".active_page_link");
        $next_page_link = $("#portfolio_link p");
        switchPages();
        //make the background of the link the painting
        displayImages();
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
        $current_page_link = $(".active_page_link");
        $next_page_link = $("#projects_link p");
        switchPages();
    });
    //about link
    $("#about_link").click(function(){
        $current_page = $(".active_page");
        $next_page = $("#about");
        $current_page_link = $(".active_page_link");
        $next_page_link = $("#about_link p");
        switchPages();
    });
    //contact link
    $("#contact_link").click(function(){
       $current_page = $(".active_page");
        $next_page = $("#contact");
        $current_page_link = $(".active_page_link");
        $next_page_link = $("#contact_link p");
        switchPages();
    });
    
    //if a project is clicked, show the discription of that project
    $(".project").click(function(){
        var htmlString = $(this).find(".discription").html();
        //alert(htmlString);
        $("#project_info").html("<div class='string animated fadeInUp'>" + htmlString + "<div>"); /*add an fade in animation to the htmlString*/
    });
    
    $(window).resize(function(){
       if($(window).width() <= 860){
           if($("#portfolio").hasClass("active_class")){
               console.log("eh");
           }
       }
    });
});

function switchPages(){
    $current_page.fadeOut(0).removeClass("active_page");
    $next_page.fadeIn(500).addClass("active_page");
    $current_page_link.removeClass("active_page_link");
    if($next_page_link != null){
        $next_page_link.addClass("active_page_link");
    }
    //clear the html of the project info
    $("#project_info").html('');
    
}

function displayImages(){
    var portfolioArray = $(".picture");
    //alert(portfolioArray.length);
    for(var i = 0; i < portfolioArray.length; i++){
        var image = portfolioArray.eq(i).attr("href");
        portfolioArray.eq(i).css("background-image", "url(" + image + ")");
        portfolioArray.eq(i).css("background-size", "cover");
        portfolioArray.eq(i).css("background-position", "center");
        
    }
}

function switchCategories(){
    $current_category.fadeOut(0).removeClass("current_category");
    $next_category.fadeIn(500).addClass("current_category");
    $current_link.removeClass("current");
    $next_link.addClass("current");
}