$('.eleccion-uso-item ').click(function() {
 $('.eleccion-uso-item').each(function(){
$(this).removeClass('active');
 })
 $(this).addClass('active');
});

$('input[name="uso-seleccionado"]').click(function(){
    $('#step-2').removeClass('hidden');
    $('#step-2').find('input').focus();
    calcularAvance(3.5);
})

$('input[name="eleccion-ocupacion"]').click(function(){
    $('#step-3').removeClass('hidden');
    $('#step-3').find('#cuenta').focus();
    calcularAvance(7);
});

$('#cuenta').keyup(function(){
    if($(this).val().length > 6){
        $('#step-4').removeClass('hidden');
        calcularAvance(11);
    }
});

$('input[name="pariente-expuesta"]').click(function(){
    $('#step-5').removeClass('hidden');
    $('#step-5').find('#pais-nac').focus();
    calcularAvance(15);
});

$('input[name="nacionalidad"]').click(function(){
    if($(this).val()==='extranjero'){
        console.log('que se hace cuando es extranjero?');
    }
});

$('#lugar-nac').change(function() {
    if($(this).val!==''){
        $('#step-6').removeClass('hidden');
        $('#step-6').find('input').focus();
        calcularAvance(20);
    }
})

$('input[name="edo-civil"]').click(function() {
    $('#step-7').removeClass('hidden');
    $('#btn-finish-step-1').removeClass('hidden');
    calcularAvance(25);
    if($(this).val()==='soltero'){
        $('#nombre-ref').focus();
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