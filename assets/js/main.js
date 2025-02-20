function addEventDots(eventDataset, eventColor, eventMap) {
	var eventList = {};
	eventDataset.forEach((d) => {
		if (eventList[`${d.lat}, ${d.long}`]) {
			eventList[`${d.lat}, ${d.long}`].count = eventList[`${d.lat}, ${d.long}`].count + 1;
		} else {
			eventList[`${d.lat}, ${d.long}`] = {
				lat: d.lat,
				long: d.long,
				name: d.location_name,
				count: 1
			};
		}
	});
	_.each(eventList, (v,k) => {
		var circle = L.circle([v.lat, v.long], {
			color: eventColor,
			fillColor: eventColor,
			fillOpacity: 0.5,
			radius: (50 + (10 * v.count))
		}).addTo(eventMap);
		circle.bindPopup(v.name);
	});
}



async function initMap() {
	// Get the events info from the event data files
	const data_730 = await d3.csv("https://raw.githubusercontent.com/carey-james/DC-Influencers-Events-Map/main/assets/event-datasets/730.csv");
	const data_yourdcbestie = await d3.csv("https://raw.githubusercontent.com/carey-james/DC-Influencers-Events-Map/main/assets/event-datasets/yourdcbestie.csv");
	const data_popville = await d3.csv("https://raw.githubusercontent.com/carey-james/DC-Influencers-Events-Map/main/assets/event-datasets/popville.csv");
	const data_clockout = await d3.csv("https://raw.githubusercontent.com/carey-james/DC-Influencers-Events-Map/main/assets/event-datasets/clockout.csv");
	const data_washingtonian = await d3.csv("https://raw.githubusercontent.com/carey-james/DC-Influencers-Events-Map/main/assets/event-datasets/washingtonian.csv");

	var map = L.map('map').setView([38.89,-77.03], 12);
	
	L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
    	minZoom: 10,
    	maxZoom: 19,
    	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		ext: 'png'
	}).addTo(map);

	addEventDots(data_730, 'red', map);
	addEventDots(data_yourdcbestie, 'blue', map);
	addEventDots(data_popville, 'limegreen', map);
	addEventDots(data_clockout, 'orange', map);
	addEventDots(data_washingtonian, 'purple', map);
}


initMap();