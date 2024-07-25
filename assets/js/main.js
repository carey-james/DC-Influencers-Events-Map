



async function initMap() {
	// Get the events info from the event data files
	const data_730 = await d3.csv("../event-data/730.csv");
	const data_yourdcbestie = await d3.csv("../event-data/yourdcbestie.csv");

	var map = L.map('map').setView([38,-77], 13);
	
	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    	maxZoom: 19,
    	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	

}

initMap();