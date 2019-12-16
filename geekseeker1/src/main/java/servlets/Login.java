package servlets;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import geekseeker1.DBConector;

@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public Login() {
        super();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		DBConector db = new DBConector();
		String username = request.getParameter("nombre");
		String pass =  request.getParameter("password");
		boolean user = db.findUser(username, pass);
		
		RequestDispatcher rd;
		
		System.out.println("Encontrado: " + user);
		if (user == true) 
			rd = request.getRequestDispatcher("home.jsp");
		else {
			rd = request.getRequestDispatcher("index.jsp");
			//alerta
		}
		
		rd.forward(request, response);
	}

}
