$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 1,
        nav : true,
        dots:true,
        rtl:true,
        loop:true,
        
        autoplay:true
    });
  });



  // Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 51.558202, lng: 7.523730};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 7,
             center: uluru,
             styles: [
                {
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#f5f5f5"
                    }
                  ]
                },
                {
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#f5f5f5"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#bdbdbd"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#ffffff"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#6433cd"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#dadada"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#6433cd"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "featureType": "road.highway.controlled_access",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#6433cd"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "transit",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#6433cd"
                    }
                  ]
                },
                {
                  "featureType": "transit.line",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "transit.station",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#c9c9c9"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                }
              ]
            
            });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }

  $(document).ready(function() {
  
    $(window).scroll(function () { 
  
  
      if ($(window).scrollTop() > 100) {
        $('.navbar').addClass('fixed-menu');
      }
  
      if ($(window).scrollTop() < 100) {
        $('.navbar').removeClass('fixed-menu');
      }
    });
  });

  $(document).ready(function () {
    //save menu height because fixed element height is not counted on page
    var menuHeight = $('.fixed-menu').outerHeight();
    //add its height as padding to content
    $('body section').css('padding-top', menuHeight);
    //click function  
    $(".scroll-btn").on("click", function (e) {
        // clear default link behavour
        e.preventDefault();
        //save cliked link href atribute
        var target = $(this).attr('href');
        //save podition top of tagget element
        var	position = $(target).offset().top;
        //animate page, easy scroll to distanation except menu height
        $("html, body").animate({scrollTop: position - 0}, '500');
        return false;
    });

});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();


    // Assign active class to nav links while scolling
    $('body section').each(function(i) {
            if ($(this).position().top <= scrollDistance + 100) {
                    $('.header nav .navbar-nav .nav-item').removeClass('active');
                    $('.header nav .navbar-nav .nav-item').eq(i).addClass('active');
            }
    });
}).scroll();