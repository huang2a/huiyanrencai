$(function(){

  // dropdown close
  $('body').on('click',function(e){
    var target=e?e.target:window.event.srcElement;
    if(!$(target).parents().is('.navbar-nav')){
      $('.dropdown.open').removeClass('open');
    }
  })

  $('.dropdown-toggle','.navbar').click(function(){
    $(this).parents('.dropdown').toggleClass('open');
  })

})

$(function() {
    $('#menu').mmenu({
      //slidingSubmenus: false
    });
});