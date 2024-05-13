

Reveal.addEventListener( 'ready', function( event ) {
	console.log('reveal loaded');
} );

Reveal.addEventListener('stats', function () {
	console.log('stats called!');
	animatenum(112, '#stats', 0);
});




Reveal.addEventListener('rank', function () {
	console.log('rank called!');
	animatenum(4, '#ranknumber', 0);
});
Reveal.addEventListener('guage', function () {
	console.log('guags called!');
	guage();
});


Reveal.addEventListener('activity', function () {
	console.log('graphs');
	//activitygraph();
});

var animatenum = function (num, obj, dec) {
	var decimal_places = dec;
	var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);
	$(obj).animateNumber({number: num * decimal_factor,

				numberStep: function (now, tween) {
					var floored_number = Math.floor(now) / decimal_factor,
						target = $(tween.elem);

					if (decimal_places > 0) {
						// force decimal places even if they are 0
						floored_number = floored_number.toFixed(decimal_places);

						// replace '.' separator with ','
						floored_number = floored_number.toString().replace('.', ',');
					}

					target.text(floored_number);
				}
			},
			1500
		);
};
