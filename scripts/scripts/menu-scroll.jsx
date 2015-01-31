
/**
 * scripts/menu-scroll.jsx
 * 
 * Menu scroll détection
 */

onload(function() {

	var menu = $("#menu")[0];

	if (menu) {

		function changeDetected() {

			var menu = $("#menu")[0];

			if (document.body.scrollTop > document.body.offsetHeight && (" " + menu.className + " ").indexOf(" menu--scrolled ") < 0) {

				menu.className += " menu--scrolled";

			}

			else if (document.body.scrollTop < document.body.offsetHeight && (" " + menu.className + " ").indexOf(" menu--scrolled ") > -1) {

				menu.className = (" " + menu.className + " ").replace(" menu--scrolled ", " ");

			}

		}

		on(document, "scroll", changeDetected);
		on(document, "resize", changeDetected);

	}

});