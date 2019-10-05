const lazyCss = function () {
    let lazyImages = [].slice.call(document.querySelectorAll(".lazycss"));
    console.log(lazyImages);
    let active = false;
    if (active === false) {
        active = true;

        setTimeout(function () {
            lazyImages.forEach(function (lazyImage) {
                //console.log(lazyImage);
                if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
                    //console.log(lazyImage.dataset.src);
                    lazyImage.style.backgroundImage = 'url('+lazyImage.dataset.src+')';
                    lazyImage.classList.remove("lazy");

                    lazyImages = lazyImages.filter(function (image) {
                        return image !== lazyImage;
                    });

                    if (lazyImages.length === 0) {
                        document.removeEventListener("scroll", lazyCss);
                        window.removeEventListener("resize", lazyCss);
                        window.removeEventListener("orientationchange", lazyCss);
                    }
                }
            });

            active = false;
        }, 200);
    }
};

export default lazyCss