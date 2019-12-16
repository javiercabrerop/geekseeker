package geekseeker1;

//import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
//import javax.persistence.TypedQuery;

import geekseeker1.User;

public class DBConector {
	
	private EntityManagerFactory factoria;
	private EntityManager entityManager;
	
	public DBConector() {
		factoria = Persistence.createEntityManagerFactory("geekseeker1");
		entityManager = factoria.createEntityManager();
	}

	public EntityManager getEntityManager() {
		return entityManager;
	}
	
	public boolean findUser(String username, String pass) {
		
		//TypedQuery<User> typedQuery = entityManager.createQuery("SELECT u FROM User u WHERE u="+username, User.class);
		
		//return typedQuery.getSingleResult();
		
		User user = entityManager.find(User.class, username);
		if (user!=null && user.getPass().equals(pass)) {
			System.out.println(user);
			return true;
		}
		else {
			return false;
		}
	}
	

}
