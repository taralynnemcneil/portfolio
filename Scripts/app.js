/* ===============================================
		  File Name: App
          Authour: Tara McNeil
          Site Name: Portfolio | Tara McNeil
          File Description: Javascript
================================================ */

/// <reference path="../typings/tsd.d.ts" />


(function() {

    /* ==============================================
        BANNER AD
    ============================================== */

    //global variables
    var screenWidth = 250;
    var screenHeight = 250;

    // reference to canvas element
    var canvas = document.getElementById("canvas");
    canvas.setAttribute("width", screenWidth.toString());
    canvas.setAttribute("height", screenHeight.toString());
    console.log(canvas.width);
    // create a stage container object
    var stage = new createjs.Stage(canvas);

    // word variables
    var graphicDesign = null;
    var webDesign = null;
    var webDevelopment = null;
    var arrow = null;
    var checkOut = null;
    var myWorkBelow = null;
    
    function init() {
        console.log("Initialization");
        // enable mouseover effects
        stage.enableMouseOver(10);
        
        // call the main function
        main();
    }

    function main() {

        // graphicDesign
        graphicDesign = new createjs.Bitmap('assets/images/gd.png');
        graphicDesign.regX = graphicDesign.getBounds().width * 0.5;
        graphicDesign.regY = graphicDesign.getBounds().height * 0.5;
        graphicDesign.x = -120;
        graphicDesign.y = 95;
        stage.addChild(graphicDesign);

        createjs.Tween.get(graphicDesign, { loop: true })
            .to({ x: 85, y: 95 }, 1000)
            .wait(5000)
            .to({ x: -120, y: 95 }, 1000)
            .wait(10000);

        // webDesign
        webDesign = new createjs.Bitmap('assets/images/wdes.png');
        webDesign.regX = webDesign.getBounds().width * 0.5;
        webDesign.regY = webDesign.getBounds().height * 0.5;
        webDesign.x = 320;
        webDesign.y = 60;
        stage.addChild(webDesign);

        createjs.Tween.get(webDesign, { loop: true })
            .wait(2000)
            .to({ x: 190, y: 60 }, 1000)
            .wait(3000)
            .to({ x: 320, y: 60 }, 1000)
            .wait(10000);

        // webDevelopment
        webDevelopment = new createjs.Bitmap('assets/images/wdev.png');
        webDevelopment.regX = webDevelopment.getBounds().width * 0.5;
        webDevelopment.regY = webDevelopment.getBounds().height * 0.5;
        webDevelopment.x = 135;
        webDevelopment.y = 500;
        stage.addChild(webDevelopment);

        createjs.Tween.get(webDevelopment, { loop: true })
            .wait(3000)
            .to({ x: 135, y: 135 }, 1000)
            .wait(2000)
            .to({ x: 135, y: 500 }, 1000)
            .wait(10000);

        // arrow shape
        arrow = new createjs.Bitmap('assets/images/arrow.png');
        arrow.regX = arrow.getBounds().width * 0.5;
        arrow.regY = arrow.getBounds().height * 0.5;
        arrow.scaleX = 0.7;
        arrow.scaleY = 0.7;
        arrow.x = -300;
        arrow.y = -300;
        stage.addChild(arrow);

        createjs.Tween.get(arrow, { loop: true })
            .wait(7000)
            .to({ x: 100, y: 100 }, 2000)
            .wait(6000)
            .to({ x: -300, y: -300 }, 2000);

        // check out
        checkOut = new createjs.Text(("CHECK OUT"), "25px Myriad Pro", "#fff");
        checkOut.regX = checkOut.getMeasuredWidth() * 0.5;
        checkOut.regY = checkOut.getMeasuredHeight() * 0.5;
        checkOut.x = -300;
        checkOut.y = -300;
        stage.addChild(checkOut);
        
        createjs.Tween.get(checkOut, {loop: true})
            .wait(8000)
            .to({x:150, y:130}, 2000)
            .wait(5000)
            .to({x:-300, y:-300}, 2000);

        // my work
        myWorkBelow = new createjs.Text(("my work below"), "16px Raleway", "#DFD045");
        myWorkBelow.regX = checkOut.getMeasuredWidth() * 0.5;
        myWorkBelow.regY = checkOut.getMeasuredHeight() * 0.5;
        myWorkBelow.x = -300;
        myWorkBelow.y = -300;
        stage.addChild(myWorkBelow);
        
        createjs.Tween.get(myWorkBelow, {loop: true})
            .wait(8000)
            .to({x:155, y:152}, 2000)
            .wait(5000)
            .to({x:-300, y:-300}, 2000);
        
        createjs.Ticker.framerate = 60;
        createjs.Ticker.addEventListener("tick", tickHandler);
        
    }
    
    function tickHandler(e) {
        // refresh the stage object
        stage.update();
    }
    
    
    
    window.onload = init;

    /* ==============================================
        SERVICES
    ============================================== */
    var replaceServicesOne = function() {
        var servicesOne;
        servicesOne = document.getElementById("servicesOne");
        servicesOne.innerHTML = "Experienced in all type of print design from logos and stationary to brochures and package design.";
    };

    replaceServicesOne();
    // end of services one

    var replaceServicesTwo = function() {
        var servicesTwo;
        servicesTwo = document.getElementById("servicesTwo");
        servicesTwo.innerHTML = "Trained in web layouts, banner ads and web ready photos. With some knowledge of flash animation banners.";
    };

    replaceServicesTwo();
    // end of services two

    var replaceServicesThree = function() {
        var servicesThree;
        servicesThree = document.getElementById("servicesThree");
        servicesThree.innerHTML = "Hastily training in web development at Georgian College. Learning HTML, CSS, JavaScript, JQuery, PHP, etc..."
    };

    replaceServicesThree();
    // end of services three

    /* ==============================================
        ABOUT
    ============================================== */
    var replaceLeadAbout = function() {
        var leadAbout;
        leadAbout = document.getElementById('leadAbout');
        leadAbout.innerHTML = "Hi, I'm Tara, a twenty three year old designer/developer from Barrie, ON. I have graduated from Georgian College with an Advanced Diploma in Graphic Design and I am on my way to graduating the Web Development program.";
    };

    replaceLeadAbout();
    // end of lead about

    var replaceSubAbout = function() {
        var subAbout;
        subAbout = document.getElementById("subAbout");
        subAbout.innerHTML = "A little about my past; I was born and raised in the town of Smiths Falls, ON. I moved to Barrie in 2011 to attend the graphic design program. In order to complete the program we had to participate in a 4 week placement. So I decided to go back to my home town and work for my mothers design company, PDG Media, where I worked on projects for clients around the community. I graduated the graphic design program in June 2015 and in September 2015, I decided to return to school for web development because I enjoyed the web design part of the graphic design program. ";
    };

    replaceSubAbout();
    // end of sub about

    /* ==============================================
         WEB DEVELOPMENT SKILLS
     ============================================== */
    var replaceWebMain = function() {
        var webMain;
        webMain = document.getElementById('webMain');
        webMain.innerHTML = "Don't let the bar graph fool you.";
    };

    replaceWebMain();
    // end of web main

    var replaceWebSub = function() {
        var webSub;
        webSub = document.getElementById('webSub');
        webSub.innerHTML = "The graph may look bad, but as I said before, I am currently in school for web development. I am a quick learner and I really enjoy learning new things. So even though the bars are a little low on the right side they won't be for long. I am proficient in most coding software (eg. visual studio code, brackets, notepad++, textwrangler, etc...) and if I don't know the program I will be right on top of learning it.";
    };

    replaceWebSub();
    // end of web sub

    /* ==============================================
        GRAPHIC DESIGN SKILLS
    ============================================== */
    var replaceGdMain = function() {
        var gdMain;
        gdMain = document.getElementById('gdMain');
        gdMain.innerHTML = "Now that's more like it. I've been working in graphic design a little longer.";
    };

    replaceGdMain();
    // end of gd main

    var replaceGdSub = function() {
        var gdSub;
        gdSub = document.getElementById('gdSub');
        gdSub.innerHTML = "I have been using these programs since I was in the yearbook course in highschool. Working on photo manipulations, illustrations and document layouts. I also have some knowledge in Wordpress and working in Dreamweaver although I personally prefer alternative programs.";
    };

    replaceGdSub();
    // end of gd sub

    /* ==============================================
        PORTFOLIO
    ============================================== */

    /* ----- Project One ----- */
    var replaceProjectOneFirst = function() {
        var projectOneFrist;
        projectOneFrist = document.getElementById('projectOneFirst');
        projectOneFrist.innerHTML = "This is a banner I did while I was at my placement with PDG Media. The goal was to promote the different flavours of cold drinks coffee culture has to offer, in a banner ad.";
    };

    replaceProjectOneFirst();
    // end of project one first

    var replaceProjectOneSecond = function() {
        var projectOneSecond;
        projectOneSecond = document.getElementById('projectOneSecond');
        projectOneSecond.innerHTML = "I chose light colors to compliement the colors of the different drinks. The use of different typefaces makes the banner more eye-catching and fun to look at. The light blue background also help make the beverages standout.";
    };

    replaceProjectOneSecond();
    // end of project one second

    var replaceProjectOneThird = function() {
        var projectOneThird;
        projectOneThird = document.getElementById('projectOneThird');
        projectOneThird.innerHTML = "Client: Coffee Culture; Project: Banner ad of print and web; Designer(s): Tara McNeil.";
    };

    replaceProjectOneThird();
    // end of project one third

    /* ----- End of Project One ----- */


    /* ----- Project Two ----- */
    var replaceProjectTwoFirst = function() {
        var projectTwoFrist;
        projectTwoFrist = document.getElementById('projectTwoFirst');
        projectTwoFrist.innerHTML = "This is a class project. The objective was to Construct a simple page template with a header, navigation area, sidebar (or aside), page content and footer areas. The page width shall be liquid at a maximum of 960px and aminimum of 720px wide and automatically centered. The design will be a landing page for your favourite brand of candy. Incorporate some interesting facts about the candy, some eyepopping imagery and perhaps even some nutritional information.";
    };

    replaceProjectTwoFirst();
    // end of project two first

    var replaceProjectTwoSecond = function() {
        var projectTwoSecond;
        projectTwoSecond = document.getElementById('projectTwoSecond');
        projectTwoSecond.innerHTML = "I used colors from the brand to make it match. Using proper css selectors and html elements to layout the page with as minimal code as possible.";
    };

    replaceProjectTwoSecond();
    // end of project two second

    var replaceProjectTwoThird = function() {
        var projectTwoThird;
        projectTwoThird = document.getElementById('projectTwoThird');
        projectTwoThird.innerHTML = "Class: Web User Interface Design; Project: Construct a landing page for your favorite candy; Designer(s): Tara McNeil.";
    };

    replaceProjectTwoThird();
    // end of project two third

    /* ----- End of Project Two ----- */


    /* ----- Project Three ----- */
    var replaceProjectThreeFirst = function() {

    };

    replaceProjectThreeFirst();
    // end of project three first

    var replaceProjectThreeSecond = function() {

    };

    replaceProjectThreeSecond();
    // end of project three second

    var replaceProjectThreeThird = function() {

    };

    replaceProjectThreeThird();
    // end of project three third

    /* ----- End of Project Three ----- */


    /* ----- Project Four ----- */
    var replaceProjectFourFirst = function() {

    };

    replaceProjectFourFirst();
    // end of project Four first

    var replaceProjectFourSecond = function() {

    };

    replaceProjectFourSecond();
    // end of project Four second

    var replaceProjectFourThird = function() {

    };

    replaceProjectFourThird();
    // end of project Four third

    /* ----- End of Project Four ----- */


    /* ----- Project Five ----- */
    var replaceProjectFiveFirst = function() {

    };

    replaceProjectFiveFirst();
    // end of project Five first

    var replaceProjectFiveSecond = function() {

    };

    replaceProjectFiveSecond();
    // end of project Five second

    var replaceProjectFiveThird = function() {

    };

    replaceProjectFiveThird();
    // end of project Five third

    /* ----- End of Project Five ----- */


    /* ----- Project Six ----- */
    var replaceProjectSixFirst = function() {

    };

    replaceProjectSixFirst();
    // end of project Six first

    var replaceProjectSixSecond = function() {

    };

    replaceProjectSixSecond();
    // end of project Six second

    var replaceProjectSixThird = function() {

    };

    replaceProjectSixThird();
    // end of project Six third

    /* ----- End of Project Six ----- */


    /* ----- Project Seven ----- */
    var replaceProjectSevenFirst = function() {

    };

    replaceProjectSevenFirst();
    // end of project Seven first

    var replaceProjectSevenSecond = function() {

    };

    replaceProjectSevenSecond();
    // end of project Seven second

    var replaceProjectSevenThird = function() {

    };

    replaceProjectSevenThird();
    // end of project Seven third

    /* ----- End of Project Seven ----- */


    /* ----- Project Eight ----- */
    var replaceProjectEightFirst = function() {

    };

    replaceProjectEightFirst();
    // end of project Eight first

    var replaceProjectEightSecond = function() {

    };

    replaceProjectEightSecond();
    // end of project Eight second

    var replaceProjectEightThird = function() {

    };

    replaceProjectEightThird();
    // end of project Eight third

    /* ----- End of Project Eight ----- */


    /* ----- Project Nine ----- */
    var replaceProjectNineFirst = function() {

    };

    replaceProjectNineFirst();
    // end of project Nine first

    var replaceProjectNineSecond = function() {

    };

    replaceProjectNineSecond();
    // end of project Nine second

    var replaceProjectNineThird = function() {

    };

    replaceProjectNineThird();
    // end of project Nine third

    /* ----- End of Project Nine ----- */

    /* ==============================================
        CONTACT
    ============================================== */
    var contactName;
    contactName = document.getElementById("contact-name");
    var contactMail;
    contactMail = document.getElementById("contact-mail");
    var contactMessage;
    contactMessage = document.getElementById("contact-message");
    var arrow = document.getElementById('submit');
    arrow.addEventListener("click", function() {
        console.log("Clicked", contactName.value, contactMail.value, contactMessage.value);
    });

})();