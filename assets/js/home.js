$(document).ajaxComplete(function () {

    switch (window.location.hash) {
        case '#blog':
            // *
            $(".blog-button").removeClass("blog-button-disable");
            $(".blog-item").addClass("blog-item-active");

            // work
            $(".work-item").removeClass("work-item-active");
            $(".works-button").addClass("works-button-disable");

            // reviews
            $(".review-item").removeClass("review-item-active");
            $(".reviews-button").addClass("reviews-button-disable");

            // social
            $(".link-item").removeClass("link-item-active");
            $(".links-button").addClass("links-button-disable");

            // about
            $(".about-button").addClass("about-button-disable");
            break;
        case "#works":
            // blog
            $(".blog-item").removeClass("blog-item-active");
            $(".blog-button").addClass("blog-button-disable");

            // *
            $(".works-button").removeClass("works-button-disable");
            $(".work-item").addClass("work-item-active");

            // reviews
            $(".review-item").removeClass("review-item-active");
            $(".reviews-button").addClass("reviews-button-disable");

            // social
            $(".links-button").addClass("links-button-disable");
            $(".link-item").removeClass("link-item-active");

            // about
            $(".about-button").addClass("about-button-disable");
            break;
        case "#reviews":
            // blog
            $(".blog-item").removeClass("blog-item-active");
            $(".blog-button").addClass("blog-button-disable");

            // work
            $(".work-item").removeClass("work-item-active");
            $(".works-button").addClass("works-button-disable");

            // reviews
            $(".reviews-button").removeClass("reviews-button-disable");
            $(".review-item").addClass("review-item-active");

            // work
            $(".link-item").removeClass("link-item-active");
            $(".links-button").addClass("links-button-disable");

            // about
            $(".about-button").addClass("about-button-disable");
            break;
        case "#social":
            // blog
            $(".blog-item").removeClass("blog-item-active");
            $(".blog-button").addClass("blog-button-disable");

            // work
            $(".work-item").removeClass("work-item-active");
            $(".works-button").addClass("works-button-disable");

            // reviews
            $(".review-item").removeClass("review-item-active");
            $(".reviews-button").addClass("reviews-button-disable");

            // *
            $(".links-button").removeClass("links-button-disable");
            $(".link-item").addClass("link-item-active");

            // about
            $(".about-button").addClass("about-button-disable");
        default:
        // code block
    }

    document.getElementById('blogbutton').onclick = blogitems;
    document.getElementById('worksbutton').onclick = workitems;
    document.getElementById('linksbutton').onclick = socialitems;
    document.getElementById('reviewsbutton').onclick = reviewitems;

    function blogitems() {
        // *
        $(".blog-button").removeClass("blog-button-disable");
        $(".blog-item").addClass("blog-item-active");

        // work
        $(".work-item").removeClass("work-item-active");
        $(".works-button").addClass("works-button-disable");

        // reviews
        $(".review-item").removeClass("review-item-active");
        $(".reviews-button").addClass("reviews-button-disable");

        // social
        $(".link-item").removeClass("link-item-active");
        $(".links-button").addClass("links-button-disable");

        // about
        $(".about-button").addClass("about-button-disable");
    }
    function workitems() {
        // blog
        $(".blog-item").removeClass("blog-item-active");
        $(".blog-button").addClass("blog-button-disable");

        // *
        $(".works-button").removeClass("works-button-disable");
        $(".work-item").addClass("work-item-active");

        // reviews
        $(".review-item").removeClass("review-item-active");
        $(".reviews-button").addClass("reviews-button-disable");

        // social
        $(".links-button").addClass("links-button-disable");
        $(".link-item").removeClass("link-item-active");

        // about
        $(".about-button").addClass("about-button-disable");
    }
    function reviewitems() {
        // blog
        $(".blog-item").removeClass("blog-item-active");
        $(".blog-button").addClass("blog-button-disable");

        // work
        $(".work-item").removeClass("work-item-active");
        $(".works-button").addClass("works-button-disable");

        // reviews
        $(".reviews-button").removeClass("reviews-button-disable");
        $(".review-item").addClass("review-item-active");

        // work
        $(".link-item").removeClass("link-item-active");
        $(".links-button").addClass("links-button-disable");

        // about
        $(".about-button").addClass("about-button-disable");
    }
    function socialitems() {
        // blog
        $(".blog-item").removeClass("blog-item-active");
        $(".blog-button").addClass("blog-button-disable");

        // work
        $(".work-item").removeClass("work-item-active");
        $(".works-button").addClass("works-button-disable");

        // reviews
        $(".review-item").removeClass("review-item-active");
        $(".reviews-button").addClass("reviews-button-disable");

        // *
        $(".links-button").removeClass("links-button-disable");
        $(".link-item").addClass("link-item-active");

        // about
        $(".about-button").addClass("about-button-disable");
    }
});