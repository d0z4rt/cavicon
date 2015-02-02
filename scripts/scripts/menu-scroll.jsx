
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
			var menuItem = document.querySelectorAll("#menu li");

			var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

			if (scrollTop > document.body.offsetHeight && (" " + menu.className + " ").indexOf(" menu--scrolled ") < 0) {

				menu.className += " menu--scrolled";

				var i;
				for (i = 0; i < menuItem.length; i++) {

					menuItem[i].className += " menu__item--scrolled";

				}

			}

			else if (scrollTop < document.body.offsetHeight && (" " + menu.className + " ").indexOf(" menu--scrolled ") > -1) {

				menu.className = (" " + menu.className + " ").replace(" menu--scrolled ", " ");

				var i;
				for (i = 0; i < menuItem.length; i++) {

					menuItem[i].className = (" " + menuItem[i].className + " ").replace(" menu__item--scrolled ", " ");

				}

			}

		}

		on(document, "scroll", changeDetected);
		on(document, "resize", changeDetected);

	}

});