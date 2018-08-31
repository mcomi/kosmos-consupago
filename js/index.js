// evento para abrir promo al dar click en icono
var btnCollapseOpen = $('.btn-icon-collapse');
btnCollapseOpen.click(function () {
  $(this).hide()
});

// abrir promo automaticamente en 15 segundos
setTimeout(function(){
  $('.collapse').addClass('in');
  btnCollapseOpen.hide();
}, 10000);


// evento para cerrar promo al dar click en icono
$('.btn-close-collapse').click(function () {
  btnCollapseOpen.click()
  btnCollapseOpen.show()
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
    //var valorPlazo = $(this).find('p').attr('plazo');  // obtengo el valor del plazo elegido
  })
});

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
}

$(document).ready(function(){
  
  //when slider changes, hide start message
$("input").on("change", function() {
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