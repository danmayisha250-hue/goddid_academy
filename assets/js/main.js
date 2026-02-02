document.addEventListener('DOMContentLoaded',function(){
  var toggle=document.querySelector('.nav-toggle');
  var nav=document.querySelector('.site-nav');
  if(toggle&&nav){toggle.addEventListener('click',function(){nav.classList.toggle('open')});
    document.querySelectorAll('.site-nav a').forEach(function(a){a.addEventListener('click',function(e){if(this.hash){e.preventDefault();document.querySelector(this.hash).scrollIntoView({behavior:'smooth'});if(nav.classList.contains('open'))nav.classList.remove('open')}})})}

  var form=document.querySelector('.contact-form');
  if(form){form.addEventListener('submit',function(e){e.preventDefault();alert('Thank you! Your message was received.');form.reset()})}
});