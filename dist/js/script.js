document.addEventListener('DOMContentLoaded', function(){
    var nav = document.getElementById('nav');
    var navBtn = document.getElementById('navBtn');
    var overlay = document.getElementById('overlay');
    var subscribeField = document.getElementById('subscribeField');
    
    navBtn.addEventListener('click', function(e){
        e.preventDefault();
        
        nav.classList.toggle('active');
    });
    
    var slider = tns({
        container: '.banner-container',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        nav: false,
        autoplayButtonOutput: false,
        controlsContainer: '#controlsBanner'
    });
    
    document.querySelectorAll('a[data-nav]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            if(this.dataset.nav == 'subscribe'){
                setTimeout(focused, 1000);
            }
        });
    });

    function focused(){
        subscribeField.focus()
    }
    
    document.querySelectorAll('.section--header a[data-nav], .section--header a[data-modal]').forEach(btn => {
        btn.addEventListener('click', function(e){
            this.parentNode.classList.remove('active');
        });
    });
    
    document.querySelectorAll('a[data-modal]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            let modal = document.querySelector(this.getAttribute('href'));
            modal.classList.add('active')
            overlay.classList.add('active');
            overlay.addEventListener('click', function(){
                this.classList.remove('active');
                modal.classList.remove('active');
            });
        });
    });
    
    document.querySelectorAll('.button--close').forEach(btn => {
        btn.addEventListener('click', function(){
            this.parentNode.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
    
    document.querySelector('#moreModal a[data-modal]').addEventListener('click', function(){
       document.getElementById('moreModal').classList.remove('active');
    });
    
    var stars = document.querySelectorAll('.stars .button--star');
    stars.forEach((star, i) => {
        star.addEventListener('click', function(){
            starsRate(i);
            localStorage.setItem('starsRate', i);
        });
    });
    
    function starsRate(i){
        stars.forEach( star => {
            star.classList.remove('active');
        });
        for(l=0;l<stars.length;l++){
            if(i >= l){
                stars[l].classList.add('active');
            }
        };
    };
    if(localStorage.getItem('starsRate') !== undefined){
        starsRate(localStorage.getItem('starsRate'));
    };
});