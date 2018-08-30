var btnCollapseOpen = $('.btn-icon-collapse');
btnCollapseOpen.click(function () {
  $(this).hide()
});

$('.btn-close-collapse').click(function () {
  btnCollapseOpen.click()
  btnCollapseOpen.show()
})

const plazosBoxes = $('.plazo-item')
plazosBoxes.each(function () {
  let plazoBox = $(this);
  plazoBox.click(function () {
    plazosBoxes.each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');
    //var valorMeses = $(this).find('span').attr('id');  // obtengo el valor de meses elegidos
  })
});


$('.steps').on('click', '.step--active', function () {
  $(this).removeClass('step--incomplete').addClass('step--complete');
  $(this).removeClass('step--active').addClass('step--inactive');
  $(this).next().removeClass('step--inactive').addClass('step--active');
});

$('.steps').on('click', '.step--complete', function () {
  $(this).removeClass('step--complete').addClass('step--incomplete');
  $(this).removeClass('step--inactive').addClass('step--active');
  $(this).nextAll().removeClass('step--complete').addClass('step--incomplete');
  $(this).nextAll().removeClass('step--active').addClass('step--inactive');
});

// libreria Waypoint para detectar cuando el scroll llega a una seccion en especifico y llamar funcion
$('.preguntas').addClass('hidden-opacity');
$('#testimonios-panel').addClass('hidden-opacity');
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
    $('#testimonios-panel').addClass('visible animated bounceInUp');
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
//custom slider javascript
var $element = $('input[type="range"]');
var $handle;

$element
  .rangeslider({
    polyfill: false,
    onInit: function() {
      $handle = $('.rangeslider__handle', this.$range);
      updateHandle($handle[0], this.value);
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
});

//promo-box
$("#js-promo-box").hide();
$("#promo-link").on("click", function(){
  $("#js-promo-box").slideToggle();
  return false;
});
  
});
