// const skills = document.querySelectorAll('#skills .item');

// for (let skill of skills) {

//     skill.addEventListener('click', (e) => {
//         skillModal = skill.nextElementSibling;
//         skillModal.style.visibility = 'visible';
//         skillModal.style.opacity = 1;

//         skillModal.addEventListener('click', (e) => {
//             e.stopPropagation();
//             if (e.target === skillModal) {
//                 skillModal.style.opacity = 0;
//                 setTimeout(() => skillModal.style.visibility = 'hidden', 300)

//             }
//         })
//     })
// }


const sites = document.querySelectorAll('#portfolio .item .image');

for (let site of sites) {

    site.addEventListener('click', (e) => {
        siteModal = site.parentElement.nextElementSibling;
        siteModal.style.visibility = 'visible';
        siteModal.style.opacity = 1;

        siteModal.addEventListener('click', (e) => {
            e.stopPropagation();
            if (e.target === siteModal) {
                siteModal.style.opacity = 0;
                setTimeout(() => siteModal.style.visibility = 'hidden', 300)

            }
        })
    })
}



(function ($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function (partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);


var win = $(window);
var allMods = $(".cols");

// Already visible modules
allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible");
    }
});

win.scroll(function (event) {

    allMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });

});
