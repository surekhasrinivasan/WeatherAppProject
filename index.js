/*global $ APIKEY navigator*/
$(document).ready(function() {
	var lati, long;
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			lati = position.coords.latitude;
			long = position.coords.longitude;
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
					document.getElementById('location').innerHTML = data.name;
					document.getElementById('weather').innerHTML = data.weather[0].main;
					document.getElementById('weatherdes').innerHTML = data.weather[0].description;
					var wspeed = data.wind.speed * 2.23694;
					document.getElementById('windspeed').innerHTML = wspeed.toFixed(2) + " mph";
					document.getElementById('icon').src = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
					document.getElementById('temp').innerHTML = data.main.temp + "&#8451";
					$('#temp').click(function() {
						var ctemp = data.main.temp;
						var ftemp = data.main.temp * 1.8 + 32;
						var tempType = $("#temptype").val();
						if (tempType == "C") {
							document.getElementById('temp').innerHTML = ftemp + "&#8457";
							$("#temptype").val("F");
						} else {
							document.getElementById('temp').innerHTML = ctemp + "&#8451";
							$("#temptype").val("C");
						}
					});
				}
			});
		});
	}
});