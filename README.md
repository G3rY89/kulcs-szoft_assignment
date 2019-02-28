To run the application, please do the following steps:

1. Please download and install the free IntelliJ from this link: https://www.jetbrains.com/idea/download/download-thanks.html?platform=windows

2. Please download and install the Java Enterpise Edition SDK 8 from this link: http://download.oracle.com/otn-pub/java/java_ee_sdk/8/java_ee_sdk-8.zip

3. Please download and install the PostgreSQL from this link: https://www.postgresql.org/download/windows/

4. Please download and install the Postgres Enterprise Manager for PostgreSQL from this link: https://www.enterprisedb.com/advanced-downloads#EnterpriseManager

5. Please create a database in Postgres Enterprise Manager with the name of "kulcs-soft".
![Alt text](new_db.jpg?raw=true)

6. After the installations, please open each folder in IntelliJ in separate window by clicking File -> Open and click on the subfolder name in the ks-assignment root folder.
![Alt text](open.jpg?raw=true)

7. Before start running the servers, please set up your database username and password in the following file: ks-userservise/src/main/resources/application.properties
The spring.datasource.url property is "jdbc:postgresql://localhost:5432/kulcs-soft" by default.  
![Alt text](db_setup.jpg?raw=true)

8. Run the ks-eureka server by clicking on the play button in the IntelliJ which is located on the top right corner by default..
This server register all the microservices which you will use for your application.

9. Run the ks-userservice. This microservice connects to the previously started Eureka server and serves the Users for your application.

10. Run the ks-zuul. This service connects to the Eureka server and you can connect easily any of the microservice with the same domain.
(e.g.: http://zuul-server.com/microservice-name/endpoint-of-microservice)

11. Run the ks-frontend. This is the front-end server for your application. (by default it will run on http://localhost:8888)

    On the main page you have 2 buttons: 
    
    - "Show enrolled users" shows you the already enrolled users in a well formatted table with their ID, name and email address. By clicking the "Remove" button the selected user will be deleted from the application.
    - under "Enroll a user" you can create a new user by adding its name and email address. You have to provide both information, otherwise the application will return an error message. Both information must be unique, otherwise the application will return an error message. You have to provide a valid email address, otherwise the application will return an error message.
     
Hope you will enjoy it :)