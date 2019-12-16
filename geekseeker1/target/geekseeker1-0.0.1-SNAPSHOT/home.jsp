<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- estilo y javascript de la navbar y carousel-->

<link rel="stylesheet" type="text/css" href="css/index.css">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<script type="text/javascript" src="js/index.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<!--La imagen del botón de búsqueda -->

<title>Geek Seeker</title>
<style>
.carousel-control {
	opacity: 1;
}

.carousel-control.left {
	background-image: none;
}

.carousel-control.right {
	background-image: none;
}

.glyphicon-chevron-left {
	color: #2e5cb8;
}

.glyphicon-chevron-right {
	color: #2e5cb8;
}

.sticky {
	position: sticky;
	top: 0;
	width: 100%;
}

.container {
	text-align: center;
	width: 100%;
}

.carousel-inner .item img {
	display: inline-block;
	height: 450px;
	width: auto;
	cursor: pointer;
}

.bottomnav {
	overflow: hidden;
	background-color: #b366ff;
	text-align: center;
	height: 40px;
	padding-top: 10px;
	margin-bottom: 2px;
}
</style>

</head>

<body>
	
	<!--Navbar top-->
	<div id="navbar">
		<a class="active" href="javascript:void(0)">Inicio</a> 
		<a href="films.jsp">Peliculas</a> <a href="series.html">Series</a>
		<a href="videojuegos.html">Videojuegos</a>
		
	</div>

	<div>
		<img src="../images/geek.png"
			style="display: block; width: 40%; margin: auto;">
	</div>

	<!--Carousel -->
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div id="myCarousel" class="carousel slide" data-ride="carousel">
					<!-- Indicators -->
					<ol class="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
						<li data-target="#myCarousel" data-slide-to="1"></li>
						<li data-target="#myCarousel" data-slide-to="2"></li>
						<li data-target="#myCarousel" data-slide-to="3"></li>
					</ol>

					<!-- Wrapper for slides -->
					<div class="carousel-inner">
						<div class="item active" id="car">
							<img src="../images/films/criadas_y_señoras.jpg" alt="Criadas y Señoras" id="dora"
								onclick="window.location.href='index.html'" onmouseover="">
							<div id="cuadro_lis">
								<ul style="list-style-type: none; line-height: 80px;">
									<li style="font-family: fantasy; font-size: 30px;">Criadas y Señoras</li>
									<li>Género: Drama</li>
									<li>Año: 2011</li>
								</ul>
							</div>
						</div>

						<div class="item">
							<img src="../images/series/bb.jpg" alt="Breaking Bad">
							<div id="cuadro_lis">
								<ul style="list-style-type: none; line-height: 80px;">
									<li>Breaking Bad</li>
									<li>Género: Drama</li>
									<li>Año: 2008 - 2013</li>
								</ul>
							</div>
						</div>

						<div class="item">
							<img src="../images/videojuegos/hollow_knight.jpg" alt="Hollow Knight">
							<div id="cuadro_lis">
								<ul style="list-style-type: none; line-height: 80px;">
									<li>Hollow Knight</li>
									<li>Género: Metroidvania</li>
									<li>Año: 2017</li>
								</ul>
							</div>
						</div>

						<div class="item">
							<img src="../images/films/ella.jpg" alt="Ella">
							<div id="cuadro_lis">
								<ul style="list-style-type: none; line-height: 80px;">
									<li>Ella (Her)</li>
									<li>Género: Drama</li>
									<li>Año: 2013</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Left and right controls -->
		<a class="left carousel-control" href="#myCarousel" data-slide="prev">
			<span class="glyphicon glyphicon-chevron-left"></span> <span
			class="sr-only">Previous</span>
		</a> <a class="right carousel-control" href="#myCarousel"
			data-slide="next"> <span
			class="glyphicon glyphicon-chevron-right"></span> <span
			class="sr-only">Next</span>
		</a>
	</div>

	<div>
	<div id="tablenav">LO MAS RECIENTE</div>
		<table id="ults">
			
			<tr>
				<td><img src="../images/films/gran_torino.jpg" width=300px; hspace="3"></td>
				<td><img src="../images/films/baby_diver.jpg" width=300px; hspace="3"></td>
				<td><img src="../images/films/langosta.jpg" width=300px; hspace="3"></td>
			</tr>
			<tr>
				<td><img src="../images/series/cuentosCriada.jpg" width=300px; hspace="3"></td>
				<td><img src="../images/series/haikyu.jpg" width=300px; hspace="3"></td>
				<td><img src="../images/series/elite.jpg" width=300px; hspace="3"></td>
			</tr>
			<tr>
				<td><img src="../images/videojuegos/resident-evil-7.jpg" width=300px; hspace="3"></td>
				<td><img src="../images/videojuegos/inside.jpg" width=300px; hspace="3"></td>
				<td><img src="../images/videojuegos/spyro.jpg" width=300px; hspace="3"></td>
			</tr>
		</table>
	</div>

	<div class="bottomnav">Geek Seeker 2019 All rights reserved</div>
	
</body>
</html>