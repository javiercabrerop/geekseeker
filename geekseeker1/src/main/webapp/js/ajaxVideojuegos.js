onload = llamadaAjax;

function llamadaAjax() {

	var xhr = new XMLHttpRequest();
	var videojuegos;
	var r = "";
	var rAccion = "";
	var rAG = "";
	var rARPG = "";
	var rMetro = "";
	var rMM = "";
	var rPlat = "";
	var rPuz = "";
	var rRl = "";
	var rRTS = "";
	var rSim = "";
	var rSh = "";
	var rTerr = "";

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				videojuegos = JSON.parse(xhr.responseText);

				for ( var i in videojuegos) {
					r = r
							+ "<table style = 'margin-top: 10px; margin-bottom: 10px;'>";
					r = r + "<tr>";

					r = r + "<td>";
					r = r + "<img style='width: 300px'; src='" + videojuegos[i].url
							+ "'</img>";
					r = r + "</td>";
					r = r
							+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
					r = r
							+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
							+ videojuegos[i].nombre + "</div>";
					r = r + "<div> Desarrolladora: " + videojuegos[i].desarrolladora + "</div>";
					r = r + "<div> Año: " + videojuegos[i].año + "</div>";
					r = r + "<div> Género: " + videojuegos[i].genero + "</div>";
					r = r + "</td>";

					r = r + "</tr>";
					r = r + "</table>";

					switch (videojuegos[i].genero) {
					case "Acción":
						rAccion = rAccion
								+ "<table style = 'margin-top: 10px; margin-bottom: 10px;'>";
						rAccion = rAccion + "<tr>";

						rAccion = rAccion + "<td>";
						rAccion = rAccion + "<img style='width: 300px'; src='"
								+ videojuegos[i].url + "'</img>";
						rAccion = rAccion + "</td>";
						rAccion = rAccion
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rAccion = rAccion
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ videojuegos[i].nombre + "</div>";
						rAccion = rAccion + "<div> Desarrolladora: "
								+ videojuegos[i].desarrolladora + "</div>";
						rAccion = rAccion + "<div> Año: " + videojuegos[i].año
								+ "</div>";
						rAccion = rAccion + "</td>";

						rAccion = rAccion + "</tr>";
						rAccion = rAccion + "</table>";
						break;

					case "Aventura gráfica":
						rAG = rAG
								+ "<table style = 'margin-top: 10px;margin-bottom: 10px;'>";
						rAG = rAG + "<tr>";

						rAG = rAG + "<td>";
						rAG = rAG + "<img style='width: 300px'; src='"
								+ videojuegos[i].url + "'</img>";
						rAG = rAG + "</td>";
						rAG = rAG
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rAG = rAG
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ videojuegos[i].nombre + "</div>";
						rAG = rAG + "<div> Desarrolladora: " + videojuegos[i].desarrolladora
								+ "</div>";
						rAG = rAG + "<div> Año: " + videojuegos[i].año
								+ "</div>";
						rAG = rAG + "</td>";

						rAG = rAG + "</tr>";
						rAG = rAG + "</table>";
						break;
						
					case "ARPG":
						rARPG = rARPG
								+ "<table style = 'margin-top: 10px;margin-bottom: 10px;'>";
						rARPG = rARPG + "<tr>";

						rARPG = rARPG + "<td>";
						rARPG = rARPG + "<img style='width: 300px'; src='"
								+ videojuegos[i].url + "'</img>";
						rARPG = rARPG + "</td>";
						rARPG = rARPG
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rARPG = rARPG
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ videojuegos[i].nombre + "</div>";
						rARPG = rARPG + "<div> Desarrolladora: " + videojuegos[i].desarrolladora
								+ "</div>";
						rARPG = rARPG + "<div> Año: " + videojuegos[i].año
								+ "</div>";
						rARPG = rARPG + "</td>";

						rARPG = rARPG + "</tr>";
						rARPG = rARPG + "</table>";
						break;

					case "Metroidvania":
						rMetro = rMetro
								+ "<table style = 'margin-top: 10px;margin-bottom: 10px;'>";
						rMetro = rMetro + "<tr>";

						rMetro = rMetro + "<td>";
						rMetro = rMetro + "<img style='width: 300px'; src='"
								+ videojuegos[i].url + "'</img>";
						rMetro = rMetro + "</td>";
						rMetro = rMetro
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rMetro = rMetro
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ videojuegos[i].nombre + "</div>";
						rMetro = rMetro + "<div> Desarrolladora: " + videojuegos[i].desarrolladora
								+ "</div>";
						rMetro = rMetro + "<div> Año: " + videojuegos[i].año + "</div>";
						rMetro = rMetro + "</td>";

						rMetro = rMetro + "</tr>";
						rMetro = rMetro + "</table>";
						break;

					case "MMORPG":
						rMM = rMM
								+ "<table style = 'margin-top: 10px;margin-bottom: 10px;'>";
						rMM = rMM + "<tr>";

						rMM = rMM + "<td>";
						rMM = rMM + "<img style='width: 300px'; src='"
								+ videojuegos[i].url + "'</img>";
						rMM = rMM + "</td>";
						rMM = rMM
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rMM = rMM
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ videojuegos[i].nombre + "</div>";
						rMM = rMM + "<div> Desarrolladora: " + videojuegos[i].desarrolladora
								+ "</div>";
						rMM = rMM + "<div> Año: " + videojuegos[i].año
								+ "</div>";
						rMM = rMM + "</td>";

						rMM = rMM + "</tr>";
						rMM = rMM + "</table>";
						break;

					case "Plataformas":
						rPlat = rPlat
								+ "<table style ='margin-top: 10px;margin-bottom: 10px;'>";
						rPlat = rPlat + "<tr>";

						rPlat = rPlat + "<td>";
						rPlat = rPlat + "<img style='width: 300px'; src='"
								+ videojuegos[i].url + "'</img>";
						rPlat = rPlat + "</td>";
						rPlat = rPlat
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rPlat = rPlat
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ videojuegos[i].nombre + "</div>";
						rPlat = rPlat + "<div> Desarrolladora: "
								+ videojuegos[i].desarrolladora + "</div>";
						rPlat = rPlat + "<div> Año: " + videojuegos[i].año
								+ "</div>";
						rPlat = rPlat + "</td>";

						rPlat = rPlat + "</tr>";
						rPlat = rPlat + "</table>";
						break;

					case "Puzzle":
						rPuz = rPuz
								+ "<table style = 'margin-top: 10px;margin-bottom: 10px;'>";
						rPuz = rPuz + "<tr>";

						rPuz = rPuz + "<td>";
						rPuz = rPuz + "<img style='width: 300px'; src='"
								+ videojuegos[i].url + "'</img>";
						rPuz = rPuz + "</td>";
						rPuz = rPuz
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rPuz = rPuz
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ videojuegos[i].nombre + "</div>";
						rPuz = rPuz + "<div> Desarrolladora: " + videojuegos[i].desarrolladora
								+ "</div>";
						rPuz = rPuz + "<div> Año: " + videojuegos[i].año
								+ "</div>";
						rPuz = rPuz + "</td>";

						rPuz = rPuz + "</tr>";
						rPuz = rPuz + "</table>";
						break;

					case "Roguelike":
						rRl = rRl
								+ "<table style = 'margin-top: 10px;margin-bottom: 10px;'>";
						rRl = rRl + "<tr>";

						rRl = rRl + "<td>";
						rRl = rRl + "<img style='width: 300px'; src='"
								+ videojuegos[i].url + "'</img>";
						rRl = rRl + "</td>";
						rRl = rRl
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rRl = rRl
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ videojuegos[i].nombre + "</div>";
						rRl = rRl + "<div> Desarrolladora: " + videojuegos[i].desarrolladora
								+ "</div>";
						rRl = rRl + "<div> Año: " + videojuegos[i].año
								+ "</div>";
						rRl = rRl + "</td>";

						rRl = rRl + "</tr>";
						rRl = rRl + "</table>";
						break;
						
					case "RTS":
						rRTS = rRTS
								+ "<table style = 'margin-top: 10px;margin-bottom: 10px;'>";
						rRTS = rRTS + "<tr>";

						rRTS = rRTS + "<td>";
						rRTS = rRTS + "<img style='width: 300px'; src='"
								+ videojuegos[i].url + "'</img>";
						rRTS = rRTS + "</td>";
						rRTS = rRTS
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rRTS = rRTS
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ videojuegos[i].nombre + "</div>";
						rRTS = rRTS + "<div> Desarrolladora: " + videojuegos[i].desarrolladora
								+ "</div>";
						rRTS = rRTS + "<div> Año: " + videojuegos[i].año
								+ "</div>";
						rRTS = rRTS + "</td>";

						rRTS = rRTS + "</tr>";
						rRTS = rRTS + "</table>";
						break;
						
					case "Simulación":
						rSim = rSim
								+ "<table style = 'margin-top: 10px;margin-bottom: 10px;'>";
						rSim = rSim + "<tr>";

						rSim = rSim + "<td>";
						rSim = rSim + "<img style='width: 300px'; src='"
								+ videojuegos[i].url + "'</img>";
						rSim = rSim + "</td>";
						rSim = rSim
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rSim = rSim
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ videojuegos[i].nombre + "</div>";
						rSim = rSim + "<div> Desarrolladora: " + videojuegos[i].desarrolladora
								+ "</div>";
						rSim = rSim + "<div> Año: " + videojuegos[i].año
								+ "</div>";
						rSim = rSim + "</td>";

						rSim = rSim + "</tr>";
						rSim = rSim + "</table>";
						break;
						
					case "Shooter":
						rSh = rSh
								+ "<table style = 'margin-top: 10px;margin-bottom: 10px;'>";
						rSh = rSh + "<tr>";

						rSh = rSh + "<td>";
						rSh = rSh + "<img style='width: 300px'; src='"
								+ videojuegos[i].url + "'</img>";
						rSh = rSh + "</td>";
						rSh = rSh
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rSh = rSh
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ videojuegos[i].nombre + "</div>";
						rSh = rSh + "<div> Desarrolladora: " + videojuegos[i].desarrolladora
								+ "</div>";
						rSh = rSh + "<div> Año: " + videojuegos[i].año
								+ "</div>";
						rSh = rSh + "</td>";

						rSh = rSh + "</tr>";
						rSh = rSh + "</table>";
						break;
						
					case "Terror":
						rTerr = rTerr
								+ "<table style = 'margin-top: 10px;margin-bottom: 10px;'>";
						rTerr = rTerr + "<tr>";

						rTerr = rTerr + "<td>";
						rTerr = rTerr + "<img style='width: 300px'; src='"
								+ videojuegos[i].url + "'</img>";
						rTerr = rTerr + "</td>";
						rTerr = rTerr
								+ "<td style = 'padding-left: 40px; font-size: 25px;'>";
						rTerr = rTerr
								+ "<div style = 'margin-bottom: 40px; font-size: 35px;'>"
								+ videojuegos[i].nombre + "</div>";
						rTerr = rTerr + "<div> Desarrolladora: " + videojuegos[i].desarrolladora
								+ "</div>";
						rTerr = rTerr + "<div> Año: " + videojuegos[i].año
								+ "</div>";
						rTerr = rTerr + "</td>";

						rTerr = rTerr + "</tr>";
						rTerr = rTerr + "</table>";
						break;

					}
				}
				document.getElementById("todo").innerHTML = r;
				document.getElementById("Accion").innerHTML = rAccion;
				document.getElementById("AG").innerHTML = rAG;
				document.getElementById("ARPG").innerHTML = rARPG;
				document.getElementById("Metroidvania").innerHTML = rMetro;
				document.getElementById("MMORPG").innerHTML = rMM;
				document.getElementById("Plataformas").innerHTML = rPlat;
				document.getElementById("Puzzle").innerHTML = rPuz;
				document.getElementById("Roguelike").innerHTML = rRl;
				document.getElementById("RTS").innerHTML = rRTS;
				document.getElementById("Simulacion").innerHTML = rSim;
				document.getElementById("Shooter").innerHTML = rSh;
				document.getElementById("Terror").innerHTML = rTerr;

			} else {
				resultado = "No se ha podido leer el archivo JSON";
			}
		}
	}

	var url = "js/videojuegos.json";
	xhr.open("GET", url);
	xhr.send();
}