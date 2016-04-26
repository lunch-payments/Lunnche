package backend;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;


 class Logowanie extends HttpServlet {
	 
	  static String userName;
	  static String password;
	  static int resp;
	 
	 
	 public void doPost(HttpServletRequest request, HttpServletResponse response) 
			 throws ServletException, IOException { 
		 		userName = request.getParameter("log");
		 		password = request.getParameter("pass");
	 }
	 

	 public interface Connection extends Wrapper, AutoCloseable{
		 public static void main(String[] args){
		 try {
			Class.forName("com.imaginary.sql.msql.MsqlDriver");
		} catch (ClassNotFoundException e1) {
			e1.printStackTrace();
		}
			 
		 String bazauz = "jbcd:mysql:/bazaogolna";
		 java.sql.Connection conn = null;
		 
		 try{
		 conn = DriverManager.getConnection(bazauz);
		 }catch(SQLException e){
			 System.out.println("Error: Cannot connect to userbase");
			 System.exit(1);
		 }
		 
		 
		 Statement wyszukaj = null;
		 
		 try{
			 wyszukaj = conn.createStatement();
			 ResultSet result;
			 result = wyszukaj.executeQuery("SELECT * FROM userbase WHERE user="+userName);
			 String passwod = result.getString(3);
			 if(password.equals(passwod)){
				 resp = HttpServletResponse.SC_OK;
				}
			 else{
				resp = HttpServletResponse.SC_UNAUTHORIZED; 
			 }
		 }
		 catch(SQLException e){
			 System.out.println("Error: No user in the database");
		 }
		 }
	 }
	 
	 }




