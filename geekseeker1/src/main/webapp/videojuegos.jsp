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
<script	src="js/ajaxVideojuegos.js"></script>
</head>

<body>

	<div id="navbar">
		<a  href="home.jsp">Inicio</a> <a 
			href="films.jsp">Peliculas</a> <a href="series.jsp">Series</a>
		<a class="active" href="videojuegos.jsp">Videojuegos</a>
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
		<img src="images/juegos.png" style="width: 98.7vw;">
	</div>

	<div class="tab">
	<button class="tablinks" id= "buttonTodo" onclick="openCity(event, 'todo')">Todos</button>
		<header>
			<h3>GENEROS</h3>
		</header>
		<button class="tablinks" onclick="openCity(event, 'Accion')">Acción</button>
		<button class="tablinks" onclick="openCity(event, 'AG')">Aventura gráfica</button>
		<button class="tablinks" onclick="openCity(event, 'ARPG')">ARPG</button>
		<button class="tablinks" onclick="openCity(event, 'Metroidvania')">Metroidvania</button>
		<button class="tablinks" onclick="openCity(event, 'MMORPG')">MMORPG</button>
		<button class="tablinks" onclick="openCity(event, 'Plataformas')">Plataformas</button>
		<button class="tablinks" onclick="openCity(event, 'Puzzle')">Puzzle</button>
		<button class="tablinks" onclick="openCity(event, 'Roguelike')">Roguelike</button>
		<button class="tablinks" onclick="openCity(event, 'RTS')">RTS</button>
		<button class="tablinks" onclick="openCity(event, 'Simulacion')">Simulación</button>
		<button class="tablinks" onclick="openCity(event, 'Shooter')">Shooter</button>
		<button class="tablinks" onclick="openCity(event, 'Terror')">Terror</button>
	</div>

	<div id="todo" class="tabcontent"></div>

	<div id="Accion" class="tabcontent" >
	</div>
	<div id="AG" class="tabcontent" >
	</div>
	
	<div id="ARPG" class="tabcontent" >
	</div>

	<div id="Metroidvania" class="tabcontent">
	</div>

	<div id="MMORPG" class="tabcontent">
	</div>

	<div id="Plataformas" class="tabcontent">
	</div>

	<div id="Puzzle" class="tabcontent">
	</div>

	<div id="Roguelike" class="tabcontent">
	</div>
	
	<div id="RTS" class="tabcontent">
	</div>
	
	<div id="Simulacion" class="tabcontent">
	</div>
	
	<div id="Shooter" class="tabcontent">
	</div>
	
	<div id="Terror" class="tabcontent">
	</div>

	<div class="clearfix"></div>

	<footer class="bottomnav">Geek Seeker 2019 All rights reserved</footer>


</body>
</html>
