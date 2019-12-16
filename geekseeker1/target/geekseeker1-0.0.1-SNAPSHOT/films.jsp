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

</head>

<body>

	<div id="navbar">
		<a  href="home.jsp">Inicio</a> <a class="active"
			href="peliculas.html">Peliculas</a> <a href="series.html">Series</a>
		<a href="videojuegos.html">Videojuegos</a>
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
		<img src="image/pelis.png" style="width: 98.7vw;">
	</div>

	<div class="tab">
		<header>
			<h3>Generos</h3>
		</header>
		<button class="tablinks" onclick="openCity(event, 'Accion')">Acción</button>
		<button class="tablinks" onclick="openCity(event, 'Ciencia Ficcion')">Ciencia
			Ficción</button>
		<button class="tablinks" onclick="openCity(event, 'Comedia')">Comedia</button>
		<button class="tablinks" onclick="openCity(event, 'Drama')">Drama</button>
		<button class="tablinks" onclick="openCity(event, 'Fantasia')">Fantasía</button>
		<button class="tablinks" onclick="openCity(event, 'Suspense')">Suspense</button>
		<button class="tablinks" onclick="openCity(event, 'Terror')">Terror</button>
	</div>

	<div id="Accion" class="tabcontent">
		<h3>Acción</h3>
		<p>DeberÃ­a ser una tabla.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
		<p>Aparecen las pelis de acciÃ³n.</p>
	</div>

	<div id="Ciencia Ficcion" class="tabcontent">
		<h3>Ciencia FicciÃ³n</h3>
		<p>Aparecen las pelis.</p>
	</div>

	<div id="Comedia" class="tabcontent">
		<h3>Comedia</h3>
		<p>Aparecen las pelis.</p>
	</div>

	<div id="Drama" class="tabcontent">
		<h3>Drama</h3>
		<p>Aparecen las pelis.</p>
	</div>

	<div id="Fantasia" class="tabcontent">
		<h3>FantasÃ­a</h3>
		<p>Aparecen las pelis.</p>
	</div>

	<div id="Suspense" class="tabcontent">
		<h3>Suspense</h3>
		<p>Tokyo is the capital of Japan.</p>
	</div>

	<div id="Terror" class="tabcontent">
		<h3>Terror</h3>
		<p>Tokyo is the capital of Japan.</p>
	</div>

	<div class="clearfix"></div>

	<footer class="bottomnav">wfswfwef</footer>

</body>
</html>
