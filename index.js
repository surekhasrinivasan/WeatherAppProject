/*global $ APIKEY navigator*/
$(document).ready(function() {
	var lati, long;
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			console.log("gotlocation");
			lati = position.coords.latitude;
			long = position.coords.longitude;
			//$("#data").html("latitude: " + lati + "<br>longitude: " + long);
			$.ajax({
				method: "GET",
				url: "https://api.openweathermap.org/data/2.5/weather",
				data: {
					lat: lati,
					lon: long,
					units: "metric",
					appid: APIKEY
				},
				success: function(data) {
					console.log(data);
					document.getElementById('location').innerHTML = data.name;
					document.getElementById('weather').innerHTML = data.weather[0].main;
					document.getElementById('weatherdes').innerHTML = data.weather[0].description;
					document.getElementById('icon').src = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
					document.getElementById('temp').innerHTML = data.main.temp + "&#8451";
					$("#temp").click (function(){
						var ftemp = data.main.temp * 1.8 + 32;
						document.getElementById('temp').innerHTML = ftemp + "&#8457";
					});
					
				}
			});
		});
	}
});