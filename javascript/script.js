		window.onload= function(){

		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
		    if (this.readyState == 4 && this.status == 200) {
		       var data = JSON.parse(xhttp.responseText)
		       vaederforhallanden(data);
		    }
		};
		xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=2673730&APPID=e829527b93c6c8622e0e18a860f25793&units=metric", true);
		xhttp.send();

		function vaederforhallanden(data){
			var temp =  data.main.temp;
			var vindHastighet = data.wind.speed;
			var fuktighet = data.main.humidity;

			var vaederId = data.weather[0].icon;
			var celsius = document.querySelector("section p");
			var extraInfo = document.querySelector(".info p");

			celsius.textContent= temp + " celsius";
			extraInfo.innerHTML= "Vindhastighet "+ vindHastighet + "<br>" + "Fuktighet " + fuktighet;

			document.getElementsByTagName("img")[0].setAttribute("src" , "http://openweathermap.org/img/w/" + vaederId +""+".png");
		}

		$(".info i").on("click", function(){
			$(".info p").slideToggle(500);
		});
	};