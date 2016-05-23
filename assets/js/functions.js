$(document).ready(function() {

	$(document.createElement('div'))
	.attr({
		'id': 'map',
		'class': 'col s12'
	}).appendTo('.contact-map');

	smoothScroll(300);
	$(".dropdown-button").dropdown();
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

		var target = $( $(this).attr('href') );

		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}

var myCenter = new google.maps.LatLng(-23.31451329, -51.16401672);

function initialize() {
	var mapProp = {
		center: myCenter,
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById("map"), mapProp);

	var marker = new google.maps.Marker({
		position: myCenter,
	});

	marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
