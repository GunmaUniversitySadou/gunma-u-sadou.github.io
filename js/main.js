'use strict';
{
    // slideshow
    function play(){
        setTimeout(() => {
            images[currentIndex].classList.remove('current');
            currentIndex++;
            if (currentIndex == images.length - 1) {
                currentIndex = 0;
            }
            images[currentIndex].classList.add('current');
            play()
        }, 3000);
    };

    const images = document.querySelectorAll('.hero img');
    let currentIndex = 0;

    play()


    // API
    function inViewCallback(entries, obs){
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('appear');
            obs.unobserve(entry.target);
        });
    };

    function onScrollCallback(entries){
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add('scrolled')
                toTop.classList.add('scrolled')
            }else{
                header.classList.remove('scrolled')
                toTop.classList.remove('scrolled')
            }
        });
    };

    const header = document.querySelector('header');
    const toTop = document.getElementById('to_top');
    const inViewObserver = new IntersectionObserver(inViewCallback, {
        threshold: 0.2,
    });

    const onScrollObserver = new IntersectionObserver(onScrollCallback);
    onScrollObserver.observe(document.getElementById('target'));

      document.querySelectorAll('.animate').forEach((element) => {
        inViewObserver.observe(element);
    });    

    toTop.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior:"smooth",
        });
    });

}