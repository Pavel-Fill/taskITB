(function() {
   let tabs = document.querySelectorAll('.tabItem');
	let tabSection = document.querySelectorAll('.tabSection');
	let indexElement;
	tabs.forEach(function(el, i) {
		el.addEventListener('click', function() {
			indexElement = i;	
			changeClass (tabs);
			changeClass (tabSection);
		})
	});
	function changeClass (e){
		e.forEach(function(el, index) {
			el.classList.remove('active');
			if(indexElement === index){
				el.classList.add('active');
			}	
		});
	}

})();