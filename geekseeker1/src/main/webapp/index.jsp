<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="css/login.css">
<title>Geek seeker</title>
</head>
<body>
	<img src="images/geek.png">
	<div style="text-align: center;">
		<div style= "margin-bottom: 10px">
			<form action="Login" method="post">
				<fieldset style="border-width:6px; background-color: #f2f2f2">
				    <legend>Usuarios registrados</legend>
					<p><label>Nombre: </label>
					<input type="text" name="nombre"></p>
					<p><label>Contraseña:</label>
					<input type="password" name="password"></p>
					<input type="submit" value="Entra compañer@">
				</fieldset>
			</form>
		</div>
		
		<div style= "display: inline-block;">
			<form action="home.jsp">
				<fieldset style="border: 2px solid #ff751a; background-color: #f2f2f2">
				    <legend>Regístrate compañer@</legend>
					<p><label>Nombre: </label>
					<input type="text" name="nombre"></p>
					<p><label>Contraseña: </label>
					<input type="password" name="password"></p>
					<p><label>Email: </label>
					<input type="email" name="email"></p>
					<input type="submit" value="Registrarse">
				</fieldset>
			</form>
		</div>
	</div>
</body>
</html>
