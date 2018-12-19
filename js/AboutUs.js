var hotItems = document.querySelectorAll('li.hot'); 		//Store NodeList in array

if(hotItems.length > 0) {									//It it contains items
	for (var i=0 i<hotItems.length; i++) {					// loop through each item
		hotItems[i].className = 'cool';						// Change value of glass attribute

	}
}