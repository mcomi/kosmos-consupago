var isMobile = false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 isMobile = true;
}

var scrolling = function(e, c) {
    e.scrollIntoView();
    if (c < 5) setTimeout(scrolling, 300, e, c + 1);
  };
  var ensureVisible = function(e) {
    setTimeout(scrolling, 300, e, 0);
  };

$('.eleccion-uso-item ').click(function() {
 $('.eleccion-uso-item').each(function(){
$(this).removeClass('active');
 })
 $(this).addClass('active');
 $(this).find('input[name="uso-seleccionado"]').attr('checked',true);
});

$('input[name="uso-seleccionado"]').click(function(){
    $('#step-2').removeClass('hidden');
    
    $('html, body').animate({
        scrollTop: $('#step-2').offset().top + 100
      }, 1000)
    calcularAvance(3.5);
})

$('input[name="eleccion-ocupacion"]').click(function(){
    $('#step-3').removeClass('hidden');
    $('html, body').animate({
        scrollTop: $('#step-3').offset().top + 100
      }, 1000)
    calcularAvance(7);
});

$('#cuenta').keyup(function(){
    if($(this).val().length > 6){
        $('#step-4').removeClass('hidden');
        calcularAvance(11);
    }
});

$('#cuenta').focusout(function(){
    $('html, body').animate({
        scrollTop: $('#step-4').offset().top + 100
      }, 1000)
})

$('input[name="pariente-expuesta"]').click(function(){
    $('#step-5').removeClass('hidden');
    $('html, body').animate({
        scrollTop: $('#step-5').offset().top + 100
      }, 1000)
    calcularAvance(15);
});

$('input[name="nacionalidad"]').click(function(){
    if($(this).val()==='extranjero'){
        console.log('que se hace cuando es extranjero?');
    }
});

$('#lugar-nac').focusout(function() {
    if($(this).val!==''){
        $('#step-6').removeClass('hidden');
        $('html, body').animate({
            scrollTop: $('#step-6').offset().top + 100
          }, 1000)
        calcularAvance(20);
    }
})

$('input[name="edo-civil"]').click(function() {
    $('#step-7').removeClass('hidden');
    $('#btn-finish-step-1').removeClass('hidden');
    calcularAvance(25);
    if($(this).val()==='soltero'){
        $('html, body').animate({
            scrollTop: $('#step-7').offset().top + 100
          }, 1000)
        if(!$('#conyuge-inputs').hasClass('hidden')){
            $('#conyuge-inputs').addClass('hidden');
        }
    }
    else if($(this).val()==='casado'){
        $('#conyuge-inputs').removeClass('hidden');
        $('#nombre-conyugue').focus();
    }
});


function calcularAvance(percent) {    
    $(".progress-bar").css("width", percent + "%").attr("aria-valuenow", percent);
    $(".progress-completed").text(percent + "%"); 
  }