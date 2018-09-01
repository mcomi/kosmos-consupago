// objeto constructor para formateo dinero
var formatter = new Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
  minimumFractionDigits: 2,
});


$('#datos-solicitud').fadeOut();
// evento para abrir promo al dar click en icono
var btnCollapseOpen = $('.btn-icon-collapse');
btnCollapseOpen.click(function () {
  $(this).hide()
});

// abrir promo automaticamente en 15 segundos
setTimeout(function(){
  $('#collapseExample').addClass('in');
  btnCollapseOpen.hide();
}, 10000);


// evento para cerrar promo al dar click en icono
$('.btn-close-collapse').click(function () {
  btnCollapseOpen.click()
  btnCollapseOpen.show()
})

// variables para manejar el cambio de cifras en la interfaz
var monto120quincenas = $('#120quincenas');
var monto108quincenas = $('#108quincenas');
var monto96quincenas = $('#96quincenas');
var monto84quincenas = $('#84quincenas');
let valorPlazo = 1;
let montoCredito = 0;
  
// simula calculo de monto de plazos al mover el monto del credito
function calcularPlazos() {
    monto120quincenas.html(formatter.format((montoCredito / 120).toFixed(2)));
    monto108quincenas.html(formatter.format((montoCredito / 108).toFixed(2)));
    monto96quincenas.html(formatter.format((montoCredito / 96).toFixed(2)));
    monto84quincenas.html(formatter.format((montoCredito / 84).toFixed(2)));
}

// marca la dependencia
let dependenciaSeleccionada = '';
$('input[name="dependencia"]').change(function(){
  dependenciaSeleccionada = $(this).val();
  checkFormCotizador()
})

// marcar el plazo activo al momento de dar click

const plazosBoxes = $('.plazo-item')
plazosBoxes.each(function () {
  let plazoBox = $(this);
  plazoBox.click(function () {
    plazosBoxes.each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');
    valorPlazo = parseInt($(this).find('.plazo-item-quincenas').data('plazo'));  // obtengo el valor del plazo elegido
    checkFormCotizador()
  })
});

// habilitar boton si se  ha elegido un plazo y dependencia
function checkFormCotizador() {
  if(valorPlazo!==1 && dependenciaSeleccionada !== ''){
    $('.btn-cotizador').attr('disabled', false);
  }
}

// formateo de celular
let celCheck = new Cleave('#celular-check', {
  phone: true,
  phoneRegionCode: 'MX'
})

$('#celular-check').keyup(function(){
  let regex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if (regex.test($(this).val())) {
    $('#btn-consulta-estatus').removeClass('hidden');
  }
})

// paso a formulario datos básicos
$('.btn-cotizador').click(function(){
  $('#elegir-monto').fadeOut('slow');
  $('#datos-solicitud').fadeIn('slow');
  document.getElementById('header-title').innerHTML = `Completar tu solicitud <br> es <span>Fácil</span> y <span>Rápido</span>`;
})

// regresa a seleccion monto y plazo
$('#back-link-cotizador').click(function(){
  $('#datos-solicitud').fadeOut('slow');
  $('#elegir-monto').fadeIn('slow');
  document.getElementById('header-title').innerHTML = `Aprobamos hasta <span>80%</span> <br> de las solicitudes`;
})

// evento para animacion de pasos de la solicitud
$('.steps').on('click', '.step--active', function () {
  $(this).removeClass('step--incomplete').addClass('step--complete');
  $(this).removeClass('step--active').addClass('step--inactive');
  $(this).next().removeClass('step--inactive').addClass('step--active');
});

// evento para regresar un paso mediante click
$('.steps').on('click', '.step--complete', function () {
  $(this).removeClass('step--complete').addClass('step--incomplete');
  $(this).removeClass('step--inactive').addClass('step--active');
  $(this).nextAll().removeClass('step--complete').addClass('step--incomplete');
  $(this).nextAll().removeClass('step--active').addClass('step--inactive');
});

// libreria Waypoint para detectar cuando el scroll llega a una seccion en especifico ejecutar diferentes animaciones
$('.preguntas').addClass('hidden-opacity');
var stepsWaypoint = new Waypoint({
  element: document.getElementById('pasos'),
  handler: function (direction) {
    $('.step--active').click();
  },
  offset: 110
})

var stepsWaypoint = new Waypoint({
  element: document.getElementById('pasos'),
  handler: function (direction) {
    $('.step--active').click();
  },
  offset: 90
})

var stepsWaypoint = new Waypoint({
  element: document.getElementById('pasos'),
  handler: function (direction) {
    $('.step--active').click();
  },
  offset: 60
})

var stepsWaypoint = new Waypoint({
  element: document.getElementById('pasos'),
  handler: function (direction) {
    $('.step--active').click();
  },
  offset: 30
})

var faqWaypoint = new Waypoint({
  element: document.getElementById('testimonios'),
  handler: function (direction) {
    $('.preguntas').addClass('visible');
    $('#preguntas-left').addClass('animated bounceInLeft');
    $('#preguntas-right').addClass('animated bounceInRight');
  },
  offset: -140
})

var testimoniosWaypoint = new Waypoint({
  element: document.getElementById('testimonios'),
  handler: function (direction) {
    if (!counterPercentage.error) {  
      counterPercentage.start();
    } else {  
      console.error(counterPercentage.error);
    }
    if (!counterPesos.error) {  
      counterPesos.start();
    } else {  
      console.error(counterPesos.error);
    }
    if (!counterCreditos.error) {  
      counterCreditos.start();
    } else {  
      console.error(counterCreditos.error);
    }
    if (!counterAnios.error) {  
      counterAnios.start();
    } else {  
      console.error(counterAnios.error);
    }
  },
  offset: 100
})


// animacion de contadores con libreria countUp.js
var counterPercentage = new CountUp('count-percentage', 0, 80, 0, 4, {  
  useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
  suffix: '%'
});

var counterPesos = new CountUp('count-pesos', 0, 50000, 0, 2.5, {  
  useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
});

var counterCreditos = new CountUp('count-creditos', 0, 2654, 0, 3, {  
  useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
});

var counterAnios = new CountUp('count-anios', 0, 8, 0, 6, {  
  useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
});


// rangeslider
// slider para seleccionar el monto del credito
var $element = $('input[type="range"]');
var $handle;

$element
  .rangeslider({
    polyfill: false,
    onInit: function() {
      $handle = $('.rangeslider__handle', this.$range);
      updateHandle($handle[0], this.value);
      $handle.addClass('shake-active');
    }
  })
  .on('input', function() {
    updateHandle($handle[0], this.value);
  });

function updateHandle(el, val) {
  el.textContent = " " + "$" + val + " ";
  montoCredito = parseInt(val);
  calcularPlazos();
}

$(document).ready(function(){
  //when slider changes, hide start message
$("input[type='range']").on("change", function() {
  $("#helper").fadeOut("slow");
  $handle.removeClass('shake-active');
});

//promo-box
$("#js-promo-box").hide();
$("#promo-link").on("click", function(){
  $("#js-promo-box").slideToggle();
  return false;
});
  
});

// evento para hacer el scroll lento a las diferentes secciones del menu
const menuLinks = $('#desktop-menu a');

menuLinks.each(function(index) {
  let menuItem = $(this);
  menuItem.click(function(e){
    e.preventDefault()
    let section = this.getAttribute("href");
    $('html, body').animate({ scrollTop: $(section).offset().top }, 'slow');
  });

});


// scroll hacia el cotizador 
$('.btn-cta').click(function(){
  $('html, body').animate({ scrollTop: $('#cotizador').offset().top }, 'slow');
});

// efecto de ir escribiendo texto con libreria Typed
document.addEventListener('DOMContentLoaded', function(){

  Typed.new("#typed", {
      stringsElement: document.getElementById('typed-strings'),
      typeSpeed: 40,
      backDelay: 500,
      loop: 2,
      contentType: 'html', // or text
      // defaults to null for infinite loop
      loopCount: null,
      resetCallback: function() { newTyped(); }
  });

  var resetElement = document.querySelector('.reset');
  if(resetElement) {
      resetElement.addEventListener('click', function() {
          document.getElementById('typed')._typed.reset();
      });
  }

});

// validacion forma
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("#forma-datos").validate({
    groups: {
      requeridosGroup: "nombre apmaterno appaterno email celular"
    } ,
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      nombre: "required",
      apmaterno: "required",
      appaterno: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      celular: {
        required: true,
        number: true
      }
    },
    // Specify validation error messages
    messages: {
      nombre: "<i class='fa fa-exclamation-circle'></i> Todos los campos son requeridos",
      apmaterno: "<i class='fa fa-exclamation-circle'></i> Todos los campos son requeridos",
      appaterno: "<i class='fa fa-exclamation-circle'></i> Todos los campos son requeridos",
      email: { required: "<i class='fa fa-exclamation-circle'></i> Todos los campos son requeridos", email: "Introduzca un correo válido" }, 
      celular: { required: "<i class='fa fa-exclamation-circle'></i> Todos los campos son requeridos", number: "Introduzca un celular válido" }
    },
    validClass: "valid",
    errorClass: 'invalid',
    errorLabelContainer: "#messageBox",

    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      $('#mandar-codigo-cel').removeClass('hidden');
      setTimeout(function(){
        $('#loader-phone-message').addClass('hidden');
        $('#sms-input-container').removeClass('hidden');
      },3000)
    }
  });
});

// evento para que pase en automatico los numeros del codigo sms
var indexCodeInput = 0;
$(".code-input").bind('keyup', function() {
  var value = $(this).val()
  var regex = /^\d+$/
  if (regex.test(value)) {
    if (indexCodeInput < 5) {
      $(this).next().focus()
      if(indexCodeInput == 4) $('#validando-sms').removeClass('hidden');
    }
    indexCodeInput++;
  }
});

