<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Geek seeker</title>
</head>
<body>
	<img src="images/geek.png">
	<div>
		<div>
			<form action="Login" method="post">
				<fieldset>
				    <legend style="font-family: Calibri">Usuarios registrados</legend>
					<label>Nombre: </label>
					<input type="text" name="nombre">
					<label>Contraseña:</label>
					<input type="password" name="password">
					<input type="submit" value="Entra compañer@">
				</fieldset>
			</form>
		</div>
		
		<div>
			<form action="vistas/home.jsp">
				<fieldset>
				    <legend style="font-family: Calibri">Regístrate compañer@</legend>
					<label>Nombre: </label>
					<input type="text" name="nombre">
					<label>Email: </label>
					<input type="email" name="email">
					<label>Contraseña: </label>
					<input type="password" name="password">
					<input type="submit" value="Entra compañer@">
				</fieldset>
			</form>
		</div>
		<div></div>
	</div>
	<h1></h1>
</body>
</html>
