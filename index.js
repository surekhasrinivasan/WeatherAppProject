/*global $ APIKEY navigator*/
$(document).ready(function() {
	var lati, long;
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			console.log("gotlocation");
			lati = position.coords.latitude;
			long = position.coords.longitude;
			$("#data").html("latitude: " + lati + "<br>longitude: " + long);
			$.ajax({
				method: "GET",
				url: "https://api.openweathermap.org/data/2.5/weather",
				data: {
					lat: lati,
					lon: long,
					appid: APIKEY
				},
				success: function(data) {
					console.log(data);
				}
			});
		});
	}
});