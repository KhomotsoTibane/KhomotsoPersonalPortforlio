$(document).ready(function () {

    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });


    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({
            scrollTop: 0
        });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    let typed = new Typed(".typing", {
        strings: ["Web Developer.", "Student."],
        typeSpeed: 50,
        backSpeed: 45,
        loop: true
    });

    if (!$("#myCanvas").tagcanvas({
            initial: [-0.07, -0.1],
            textColour: "crimson",
            outlineMethod: "size",
            textHeight: 25,
            shuffleTags: true,
            animTiming: "Smooth",
            wheelZoom: false,
            reverse: true,
            depth: 0.5,
            maxSpeed: 0.06,
            weight: true,
            active: true,
        }, "tags")) {
        /* if err then hide the canvas*/
        $("#myCanvasContainer").hide();
    }


    let mixerPortfolio = mixitup('.work-container', {
        selectors: {
            target: '.work-card'
        },
        animation: {
            duration: 300
        }
    });

    // Link Active Work 
    const linkWork = document.querySelectorAll('.work-item')

    function activeWork() {
        linkWork.forEach(l => l.classList.remove('active-work'))
        this.classList.add('active-work')
    }

    linkWork.forEach(l => l.addEventListener("click", activeWork))

    // Work Popup 
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("work-button")) {
            togglePortfolioPopup();
            portfolioItemDetails(e.target.parentElement);
        }
    })

    function togglePortfolioPopup() {
        document.querySelector(".portfolio-popup").classList.toggle("open");
    }

    document.querySelector(".portfolio-popup-close").addEventListener("click", togglePortfolioPopup)


    function portfolioItemDetails(portfolioItem) {
        document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".work-img").src;
        document.querySelector(".portfolio-popup-subtitle span").innerHTML = portfolioItem.querySelector(".work-title").innerHTML;
        document.querySelector(".portfolio-popup-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
    }


    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
    }

    function blurFunc() {
        let parent = this.parentNode;
        if (this.value == "") {
            parent.classList.remove("focus");
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    })

});