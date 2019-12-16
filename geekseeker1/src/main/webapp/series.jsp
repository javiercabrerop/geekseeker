<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" href="css/films.css">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script type="text/javascript" src="js/films.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<!--La imagen del botÃ³n de bÃºsqueda -->
<script	src="js/ajaxSeries.js"></script>
</head>

<body>

	<div id="navbar">
		<a  href="home.jsp">Inicio</a> <a href="films.jsp">Peliculas</a> <a 
		class="active" href="series.jsp">Series</a>
		<a href="videojuegos.jsp">Videojuegos</a>
		<div class="search-container">
			<form action="/action_page.php">
				<input type="text" placeholder="Buscar.." name="search">
				<button type="submit">
					<i class="fa fa-search"></i>
				</button>
			</form>
		</div>
	</div>

	<div>
		<img src="images/series.png" style="width: 98.7vw;">
	</div>

	<div class="tab">
		<button class="tablinks" id= "buttonTodo" onclick="openCity(event, 'todo')">Todas</button>
		<header>
			<h3>GENEROS</h3>
		</header>
		<button id="botonAccion" class="tablinks" onclick="openCity(event, 'Accion')">Acción</button>
		<button id="botonAccion" class="tablinks" onclick="openCity(event, 'Animacion')">Animación</button>
		<button class="tablinks" onclick="openCity(event, 'CienciaF')">Ciencia Ficción</button>
		<button class="tablinks" onclick="openCity(event, 'Comedia')">Comedia</button>
		<button class="tablinks" onclick="openCity(event, 'Drama')">Drama</button>
		<button class="tablinks" onclick="openCity(event, 'Sobrenatural')">Sobrenatural</button>
		<button class="tablinks" onclick="openCity(event, 'Suspense')">Suspense</button>
		
	</div>
	
	<div id="todo" class="tabcontent"></div>

	<div id="Accion" class="tabcontent" >
	</div>
	<div id="Animacion" class="tabcontent" >
	</div>

	<div id="CienciaF" class="tabcontent">
	</div>

	<div id="Comedia" class="tabcontent">
	</div>

	<div id="Drama" class="tabcontent">
	</div>

	<div id="Suspense" class="tabcontent">
	</div>

	<div id="Sobrenatural" class="tabcontent">
	</div>

	<div class="clearfix"></div>

	<footer class="bottomnav">Geek Seeker 2019 All rights reserved</footer>

</body>
</html>
