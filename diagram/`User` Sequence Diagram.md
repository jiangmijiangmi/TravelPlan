1. user wanna login via `JSP` page
2. `JSP` page send message with the method `post` to `UserServlet` to login
3. `UserService` gets `DBConnection`'s instance with database connection
4. `UserServlet` gets login status via `UserService`
5. `UserService` gets login status via `UserDAO`'s database query
6. `UserDAO` gets `UserVO` as an instance and returns the instance as login status
7. `UserService` gets instance `UserVO` as login status
8. `UserServlet` gets instance `UserVO` as login status
9. `UserServlet` proceeds with dispatch