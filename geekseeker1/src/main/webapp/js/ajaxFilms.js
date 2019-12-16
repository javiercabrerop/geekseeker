onload = llamadaAjax;

function llamadaAjax() {

	var xhr = new XMLHttpRequest();
	var pelis;
	var r = "";
	var rAccion = "";
	var rAnim = "";
	var rCF = "";
	var rCom = "";
	var rDrama = "";
	var rFan = "";
	var rRom = "";
	var rSus = "";
	var rTerr = "";
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				pelis = JSON.parse(xhr.responseText);

				for ( var i in pelis) {
					r = r
							+ "<table style = 'margin-top: 10px; margin-bottom: 10px;'>";
					r = r + "<tr>";

					r = r + "<td>";
					r = r + "<img style='width: 300px'; src='" + pelis[i].url
							+ "'</img>";
					r = r + "</td>";
					r = r
							+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
					r = r
							+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
							+ pelis[i].nombre + "</div>";
					r = r + "<div> Director: " + pelis[i].director + "</div>";
					r = r + "<div> Año: " + pelis[i].año + "</div>";
					r = r + "<div> Género: " + pelis[i].genero + "</div>";
					r = r + "<div> Duración: " + pelis[i].duracion + "</div>";
					r = r + "</td>";

					r = r + "</tr>";
					r = r + "</table>";

					switch (pelis[i].genero) {
					case "Acción":
						rAccion = rAccion
								+ "<table style = 'margin-top: 10px; margin-bottom: 10px;'>";
						rAccion = rAccion + "<tr>";

						rAccion = rAccion + "<td>";
						rAccion = rAccion + "<img style='width: 300px'; src='"
								+ pelis[i].url + "'</img>";
						rAccion = rAccion + "</td>";
						rAccion = rAccion
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rAccion = rAccion
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ pelis[i].nombre + "</div>";
						rAccion = rAccion + "<div> Director: "
								+ pelis[i].director + "</div>";
						rAccion = rAccion + "<div> Año: " + pelis[i].año
								+ "</div>";
						rAccion = rAccion + "<div> Duración: "
								+ pelis[i].duracion + "</div>";
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
								+ pelis[i].url + "'</img>";
						rAnim = rAnim + "</td>";
						rAnim = rAnim
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rAnim = rAnim
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ pelis[i].nombre + "</div>";
						rAnim = rAnim + "<div> Director: " + pelis[i].director
								+ "</div>";
						rAnim = rAnim + "<div> Año: " + pelis[i].año + "</div>";
						rAnim = rAnim + "<div> Duración: " + pelis[i].duracion
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
								+ pelis[i].url + "'</img>";
						rCF = rCF + "</td>";
						rCF = rCF
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rCF = rCF
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ pelis[i].nombre + "</div>";
						rCF = rCF + "<div> Director: " + pelis[i].director
								+ "</div>";
						rCF = rCF + "<div> Año: " + pelis[i].año + "</div>";
						rCF = rCF + "<div> Duración: " + pelis[i].duracion
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
								+ pelis[i].url + "'</img>";
						rCom = rCom + "</td>";
						rCom = rCom
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rCom = rCom
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ pelis[i].nombre + "</div>";
						rCom = rCom + "<div> Director: " + pelis[i].director
								+ "</div>";
						rCom = rCom + "<div> Año: " + pelis[i].año + "</div>";
						rCom = rCom + "<div> Duración: " + pelis[i].duracion
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
								+ pelis[i].url + "'</img>";
						rDrama = rDrama + "</td>";
						rDrama = rDrama
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rDrama = rDrama
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ pelis[i].nombre + "</div>";
						rDrama = rDrama + "<div> Director: "
								+ pelis[i].director + "</div>";
						rDrama = rDrama + "<div> Año: " + pelis[i].año
								+ "</div>";
						rDrama = rDrama + "<div> Duración: "
								+ pelis[i].duracion + "</div>";
						rDrama = rDrama + "</td>";

						rDrama = rDrama + "</tr>";
						rDrama = rDrama + "</table>";
						break;

					case "Fantasía":
						rFan = rFan
								+ "<table style = 'margin-top: 10px;margin-bottom: 10px;'>";
						rFan = rFan + "<tr>";

						rFan = rFan + "<td>";
						rFan = rFan + "<img style='width: 300px'; src='"
								+ pelis[i].url + "'</img>";
						rFan = rFan + "</td>";
						rFan = rFan
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rFan = rFan
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ pelis[i].nombre + "</div>";
						rFan = rFan + "<div> Director: " + pelis[i].director
								+ "</div>";
						rFan = rFan + "<div> Año: " + pelis[i].año + "</div>";
						rFan = rFan + "<div> Duración: " + pelis[i].duracion
								+ "</div>";
						rFan = rFan + "</td>";

						rFan = rFan + "</tr>";
						rFan = rFan + "</table>";
						break;

					case "Romance":
						rRom = rRom
								+ "<table style = 'margin-top: 10px;margin-bottom: 10px;'>";
						rRom = rRom + "<tr>";

						rRom = rRom + "<td>";
						rRom = rRom + "<img style='width: 300px'; src='"
								+ pelis[i].url + "'</img>";
						rRom = rRom + "</td>";
						rRom = rRom
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rRom = rRom
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ pelis[i].nombre + "</div>";
						rRom = rRom + "<div> Director: " + pelis[i].director
								+ "</div>";
						rRom = rRom + "<div> Año: " + pelis[i].año + "</div>";
						rRom = rRom + "<div> Duración: " + pelis[i].duracion
								+ "</div>";
						rRom = rRom + "</td>";

						rRom = rRom + "</tr>";
						rRom = rRom + "</table>";
						break;

					case "Suspense":
						rSus = rSus
								+ "<table style = 'margin-top: 10px;margin-bottom: 10px;'>";
						rSus = rSus + "<tr>";

						rSus = rSus + "<td>";
						rSus = rSus + "<img style='width: 300px'; src='"
								+ pelis[i].url + "'</img>";
						rSus = rSus + "</td>";
						rSus = rSus
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rSus = rSus
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ pelis[i].nombre + "</div>";
						rSus = rSus + "<div> Director: " + pelis[i].director
								+ "</div>";
						rSus = rSus + "<div> Año: " + pelis[i].año + "</div>";
						rSus = rSus + "<div> Duración: " + pelis[i].duracion
								+ "</div>";
						rSus = rSus + "</td>";

						rSus = rSus + "</tr>";
						rSus = rSus + "</table>";
						break;

					case "Terror":
						rTerr = rTerr
								+ "<table style ='margin-top: 10px;margin-bottom: 10px;'>";
						rTerr = rTerr + "<tr>";

						rTerr = rTerr + "<td>";
						rTerr = rTerr + "<img style='width: 300px'; src='"
								+ pelis[i].url + "'</img>";
						rTerr = rTerr + "</td>";
						rTerr = rTerr
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rTerr = rTerr
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ pelis[i].nombre + "</div>";
						rTerr = rTerr + "<div> Director: " + pelis[i].director
								+ "</div>";
						rTerr = rTerr + "<div> Año: " + pelis[i].año + "</div>";
						rTerr = rTerr + "<div> Duración: " + pelis[i].duracion
								+ "</div>";
						rTerr = rTerr + "</td>";
						rTerr = rTerr + "</tr>";
						rTerr = rTerr + "</table>";
						break;
					}
				}
				document.getElementById("todo").innerHTML = r;
				document.getElementById("Accion").innerHTML = rAccion;
				document.getElementById("Animacion").innerHTML = rAnim;
				document.getElementById("CienciaF").innerHTML = rCF;
				document.getElementById("Comedia").innerHTML = rCom;
				document.getElementById("Drama").innerHTML = rDrama;
				document.getElementById("Fantasia").innerHTML = rFan;
				document.getElementById("Romance").innerHTML = rRom;
				document.getElementById("Suspense").innerHTML = rSus;
				document.getElementById("Terror").innerHTML = rTerr;

			} else {
				resultado = "No se ha podido leer el archivo JSON";
			}
		}
	}

	var url = "js/pelis.json";
	xhr.open("GET", url);
	xhr.send();
}
