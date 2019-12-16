onload = llamadaAjax;

function llamadaAjax() {

	var xhr = new XMLHttpRequest();
	var series;
	var r = "";
	var rAccion = "";
	var rAnim = "";
	var rCF = "";
	var rCom = "";
	var rDrama = "";
	var rSob = "";
	var rSus = "";

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				series = JSON.parse(xhr.responseText);

				for ( var i in series) {
					r = r
							+ "<table style = 'margin-top: 10px; margin-bottom: 10px;'>";
					r = r + "<tr>";

					r = r + "<td>";
					r = r + "<img style='width: 300px'; src='" + series[i].url
							+ "'</img>";
					r = r + "</td>";
					r = r
							+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
					r = r
							+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
							+ series[i].nombre + "</div>";
					r = r + "<div> Director: " + series[i].director + "</div>";
					r = r + "<div> años: " + series[i].años + "</div>";
					r = r + "<div> Género: " + series[i].genero + "</div>";
					r = r + "<div> Episodios: " + series[i].capitulos + "</div>";
					r = r + "</td>";

					r = r + "</tr>";
					r = r + "</table>";

					switch (series[i].genero) {
					case "Acción":
						rAccion = rAccion
								+ "<table style = 'margin-top: 10px; margin-bottom: 10px;'>";
						rAccion = rAccion + "<tr>";

						rAccion = rAccion + "<td>";
						rAccion = rAccion + "<img style='width: 300px'; src='"
								+ series[i].url + "'</img>";
						rAccion = rAccion + "</td>";
						rAccion = rAccion
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rAccion = rAccion
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ series[i].nombre + "</div>";
						rAccion = rAccion + "<div> Director: "
								+ series[i].director + "</div>";
						rAccion = rAccion + "<div> Años: " + series[i].años
								+ "</div>";
						rAccion = rAccion + "<div> Episodios: "
								+ series[i].capitulos + "</div>";
						rAccion = rAccion + "</td>";

						rAccion = rAccion + "</tr>";
						rAccion = rAccion + "</table>";
						break;

					case "Animación":
						rAnim = rAnim
								+ "<table style = 'margin-top: 10px;margin-bottom: 10px;'>";
						rAnim = rAnim + "<tr>";

						rAnim = rAnim + "<td>";
						rAnim = rAnim + "<img style='width: 300px'; src='"
								+ series[i].url + "'</img>";
						rAnim = rAnim + "</td>";
						rAnim = rAnim
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rAnim = rAnim
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ series[i].nombre + "</div>";
						rAnim = rAnim + "<div> Director: " + series[i].director
								+ "</div>";
						rAnim = rAnim + "<div> años: " + series[i].años
								+ "</div>";
						rAnim = rAnim + "<div> Episodios: " + series[i].capitulos
								+ "</div>";
						rAnim = rAnim + "</td>";

						rAnim = rAnim + "</tr>";
						rAnim = rAnim + "</table>";
						break;

					case "Ciencia Ficción":
						rCF = rCF
								+ "<table style = 'margin-top: 10px;margin-bottom: 10px;'>";
						rCF = rCF + "<tr>";

						rCF = rCF + "<td>";
						rCF = rCF + "<img style='width: 300px'; src='"
								+ series[i].url + "'</img>";
						rCF = rCF + "</td>";
						rCF = rCF
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rCF = rCF
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ series[i].nombre + "</div>";
						rCF = rCF + "<div> Director: " + series[i].director
								+ "</div>";
						rCF = rCF + "<div> años: " + series[i].años + "</div>";
						rCF = rCF + "<div> Episodios: " + series[i].capitulos
								+ "</div>";
						rCF = rCF + "</td>";

						rCF = rCF + "</tr>";
						rCF = rCF + "</table>";
						break;

					case "Comedia":
						rCom = rCom
								+ "<table style = 'margin-top: 10px;margin-bottom: 10px;'>";
						rCom = rCom + "<tr>";

						rCom = rCom + "<td>";
						rCom = rCom + "<img style='width: 300px'; src='"
								+ series[i].url + "'</img>";
						rCom = rCom + "</td>";
						rCom = rCom
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rCom = rCom
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ series[i].nombre + "</div>";
						rCom = rCom + "<div> Director: " + series[i].director
								+ "</div>";
						rCom = rCom + "<div> años: " + series[i].años
								+ "</div>";
						rCom = rCom + "<div> Episodios: " + series[i].capitulos
								+ "</div>";
						rCom = rCom + "</td>";

						rCom = rCom + "</tr>";
						rCom = rCom + "</table>";
						break;

					case "Drama":
						rDrama = rDrama
								+ "<table style ='margin-top: 10px;margin-bottom: 10px;'>";
						rDrama = rDrama + "<tr>";

						rDrama = rDrama + "<td>";
						rDrama = rDrama + "<img style='width: 300px'; src='"
								+ series[i].url + "'</img>";
						rDrama = rDrama + "</td>";
						rDrama = rDrama
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rDrama = rDrama
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ series[i].nombre + "</div>";
						rDrama = rDrama + "<div> Director: "
								+ series[i].director + "</div>";
						rDrama = rDrama + "<div> años: " + series[i].años
								+ "</div>";
						rDrama = rDrama + "<div> Episodios: "
								+ series[i].capitulos + "</div>";
						rDrama = rDrama + "</td>";

						rDrama = rDrama + "</tr>";
						rDrama = rDrama + "</table>";
						break;

					case "Sobrenatural":
						rSob = rSob
								+ "<table style = 'margin-top: 10px;margin-bottom: 10px;'>";
						rSob = rSob + "<tr>";

						rSob = rSob + "<td>";
						rSob = rSob + "<img style='width: 300px'; src='"
								+ series[i].url + "'</img>";
						rSob = rSob + "</td>";
						rSob = rSob
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rSob = rSob
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ series[i].nombre + "</div>";
						rSob = rSob + "<div> Director: " + series[i].director
								+ "</div>";
						rSob = rSob + "<div> años: " + series[i].años
								+ "</div>";
						rSob = rSob + "<div> Episodios: " + series[i].capitulos
								+ "</div>";
						rSob = rSob + "</td>";

						rSob = rSob + "</tr>";
						rSob = rSob + "</table>";
						break;

					case "Suspense":
						rSus = rSus
								+ "<table style = 'margin-top: 10px;margin-bottom: 10px;'>";
						rSus = rSus + "<tr>";

						rSus = rSus + "<td>";
						rSus = rSus + "<img style='width: 300px'; src='"
								+ series[i].url + "'</img>";
						rSus = rSus + "</td>";
						rSus = rSus
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rSus = rSus
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ series[i].nombre + "</div>";
						rSus = rSus + "<div> Director: " + series[i].director
								+ "</div>";
						rSus = rSus + "<div> años: " + series[i].años
								+ "</div>";
						rSus = rSus + "<div> Episodios: " + series[i].capitulos
								+ "</div>";
						rSus = rSus + "</td>";

						rSus = rSus + "</tr>";
						rSus = rSus + "</table>";
						break;

					}
				}
				document.getElementById("todo").innerHTML = r;
				document.getElementById("Accion").innerHTML = rAccion;
				document.getElementById("Animacion").innerHTML = rAnim;
				document.getElementById("CienciaF").innerHTML = rCF;
				document.getElementById("Comedia").innerHTML = rCom;
				document.getElementById("Drama").innerHTML = rDrama;
				document.getElementById("Sobrenatural").innerHTML = rSob;
				document.getElementById("Suspense").innerHTML = rSus;

			} else {
				resultado = "No se ha podido leer el archivo JSON";
			}
		}
	}

	var url = "js/series.json";
	xhr.open("GET", url);
	xhr.send();
}
