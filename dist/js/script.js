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

	document.querySelectorAll('a[data-course]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
			if(this.dataset.course == 'open'){
				document.getElementById('courses').classList.remove('active');
			}
			else if(this.dataset.course == 'close'){
				document.getElementById('courseInfo').classList.remove('active');
			}
            document.querySelector(this.getAttribute('href')).classList.add('active');
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
            modal.classList.add('active');
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
    
	
function countdown(endDate) {
  let days, hours, minutes, seconds;
  
  endDate = new Date(endDate).getTime();
  
  if (isNaN(endDate)) {
	return;
  }
  
  setInterval(calculate, 1000);
  
  function calculate() {
    let startDate = new Date();
    startDate = startDate.getTime();
    
    let timeRemaining = parseInt((endDate - startDate) / 1000);
    
    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);
      
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);
      
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);
      
      seconds = parseInt(timeRemaining);
      
      document.getElementById("days").innerHTML = parseInt(days, 10);
      document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
      document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }
}

(function () { 
  countdown('08/01/2018 05:00:00 PM'); 
}());
});