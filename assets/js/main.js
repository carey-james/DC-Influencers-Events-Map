



async function initMap() {
	// Get the events info from the event data files
	const data_730 = await d3.csv("https://raw.githubusercontent.com/carey-james/DC-Influencers-Events-Map/main/assets/event-datasets/730.csv");
	const data_yourdcbestie = await d3.csv("https://raw.githubusercontent.com/carey-james/DC-Influencers-Events-Map/main/assets/event-datasets/yourdcbestie.csv");

	var map = L.map('map').setView([38.89,-77.03], 13);
	
	L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
    	minZoom: 1,
    	maxZoom: 19,
    	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		ext: 'png'
	}).addTo(map);
}

initMap();