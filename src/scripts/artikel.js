export default (function() {
	if (!window.location.pathname.includes("artikel.html")) return // guard clause

	const OBSERVER = new IntersectionObserver(callback, {
		threshold: 1.0
	})

	const PARAGRAPHS = document.querySelectorAll(".artikel p")

	PARAGRAPHS.forEach(function(p) {
		OBSERVER.observe(p)
	})

	function callback(entries) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) return
			if (entry.intersectionRatio > 0.5) {
				entry.target.style.fontWeight = "bold"
			}
		})
	}

	// Tilbage til toppen funktionalitetstingelingdims
	const BUTTON = document.querySelector(".backToTop")
	const BUTTON_OBSERVER = new IntersectionObserver(buttonCallback, {
		rootMargin: "0px",
		threshold: 0.75
	})

	BUTTON_OBSERVER.observe(BUTTON)

	function buttonCallback(entries) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) return

			entry.target.style.opacity = "1"
			/* entry.target.onClick = function(event) {
				window.scrollTo(0,0)
			} */
		})
	}

})()
