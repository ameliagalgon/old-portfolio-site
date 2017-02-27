var $current_page = null;
var $next_page = null;
var $current_category = null;
var $next_category = null;
var $current_link = null;
var $next_link = null;
var $current_page_link = null;
var $next_page_link = null;
$(document).ready(function(){
    //scrolling
    $(".thumbnail").css("display","none");
    $("#technology_projects ul").css("display","none");
    $(window).scroll(function(){
       console.log($(window).scrollTop());
        //at 265, show the art thumbnails
        if($(window).scrollTop()>265){
            $(".thumbnail").css("display","block");
            $(".thumbnail").addClass("animated fadeInUp");
        }
        //at 860, how the techno list
        if($(window).scrollTop()>750){
            $("#technology_projects ul").css("display","block");
            $("#technology_projects ul").addClass("animated fadeInRightBig");
        }
    });
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
        goToArtPortfolio();
    });
    //same thing for portfolio preview on home page
    $('#art_portfolio').click(function(){
        goToArtPortfolio();
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
        goToTechnologyProjects();    
    });
    //same thing for technology projects section on homepage
    $("#technology_projects").click(function(){
       goToTechnologyProjects(); 
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
        if($(window).width()>650){
            var htmlString = $(this).find(".discription").html();
            //alert(htmlString);
            $("#project_info").html("<div class='string animated fadeInUp'>" + htmlString + "<div>"); /*add an fade in animation to the htmlString*/
        }
        else{
            //get the link and link to a new page instead of showing the description
            var link = $(this).find(".discription a").attr("href");
            //alert(link);
            window.open(link);
        }
    });
    
    if($(window).width()<=500){
        //remove the text in the homepage logo
        $("#logo").html("<img src='Amelia_logo.png' alt='Amelia Galgon'>")
    }
    $(window).resize(function(){
        if($(window).width() <= 860){
            //remove the text in the homepage logo
            $("#logo").html("<img src='Amelia_logo.png' alt='Amelia Galgon'>")
            //display all of the categories in the portfolio
            $("#painting").css("display", "flex");
            $("#drawing").css("display", "flex");
            $("#design").css("display", "flex");
            //display the category headers
            $(".category h3").css("display","block");
        }
        else{
            //return the text 'amelia galgon' to the logo
            $("#logo").html("<img src='Amelia_logo.png' alt='Amelia Galgon'>Amelia Galgon")
            //do not display any of the categories. THis will desfault to using the current_category class
            $("#painting").css("display", "none");
            $("#drawing").css("display", "none");
            $("#design").css("display", "none");
            //remove the category headers
            $(".category h3").css("display", "none");
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
    //check the window size
    if($(window).width() <= 860){
        if($("#portfolio").hasClass("active_page")){
            $("#painting").css("display", "flex");
            $("#drawing").css("display", "flex");
            $("#design").css("display", "flex");
            //display the headers
            $(".category h3").css("display", "block");
        }
    }
    //make sure the scrolling is set to the top of the page
    var scroll = $(window).scrollTop();
    $("html").scrollTop(scroll);
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

function displayProjectImages(){
    var projectsArray = $(".project");
    for(var i = 0; i < projectsArray.length; i++){
        var image = projectsArray.eq(i).find(".background-image img").attr("src");
        //change the background to display the image
        projectsArray.eq(i).css("background-image", "url(" + image + ")");
        projectsArray.eq(i).css("background-position", "center");
        projectsArray.eq(i).css("background-size", "cover");
        //projectsArray.eq(i).css("filter", "brightness(50%)");
    }
}

function switchCategories(){
    $current_category.fadeOut(0).removeClass("current_category");
    $next_category.fadeIn(500).addClass("current_category");
    $current_link.removeClass("current");
    $next_link.addClass("current");
}

function goToArtPortfolio(){
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
}

function goToTechnologyProjects(){
    $current_page = $(".active_page");
    $next_page = $("#projects");
    $current_page_link = $(".active_page_link");
    $next_page_link = $("#projects_link p");
    switchPages();
    displayProjectImages();
}