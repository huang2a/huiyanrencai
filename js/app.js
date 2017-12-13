$(function(){

  $('.dropdown-toggle','.navbar').click(function(){
    $(this).parents('.dropdown').toggleClass('open');
  })

  // mmenu init
  $(".m-menu").mmenu({
    "extensions": [
        "pagedim-black"
    ]
  });
  var API = $(".m-menu").data( "mmenu" );
  $(".navbar-toggle").click(function() {
    API.open();
  });
  
})