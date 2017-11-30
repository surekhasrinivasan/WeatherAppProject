/*global $ APIKEY*/
$(document).ready(function(){
    $.ajax({
          method: "GET",
          url: "https://http://api.openweathermap.org/data/2.5/find?",
          data: { lat: "business", country: "us", language: "en", apiKey:APIKEY},
          success:function(data){
              if(data.status === "ok"){
                  console.log(data);
                  for (var i=0; i < data.sources.length; i++){
                      var source = document.createElement("OPTION");
                      source.setAttribute("value", data.sources[i].id);
                      source.innerHTML = data.sources[i].name;
                      document.getElementById('selection').appendChild(source);
                  }
                } 
            }
        });