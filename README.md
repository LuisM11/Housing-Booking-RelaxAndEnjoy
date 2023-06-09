To visit R&D please check the follow link [Go](http://relaxandenjoy-booking.s3-website.us-east-2.amazonaws.com/Home)

### Admin Credentials:
To acces products creation page it's neccessary to login as an admin, you can use the below credentials for that.
- Mail: prueba@prueba.com
- Password: admin1

***

# What is R&D? 

Relájese y disfrute is a web application to book your rest and vacations. In our application you can choose between: Hotels, Cabins, Apartments and Glampings.


# How is it built?

Our application is divided into 2 large work areas: frontend and backend, which will be detailed below.

## Frontend:

It is built thinking that the application is easy to use for users, locating the buttons quickly and displaying the products and their details in a pleasant way, showing the user detailed information that helps to choose the best option. The application has a comfortable and harmonious color palette. The frontend is developed with the following technologies.

-Ant Design
-React Axios
-React-calendar
-React-hook form
-Sweetalert
-Tailwind

## Backend:

It is responsible for managing user requests and responses using an api that connects to a database to perform a crud. Our backend is also in charge of generating the login access credentials when the user registers in our application. To build the backend we used:

- Java
- Springboot
- JWT
- Mysql Workbench

In addition to the Frontend and Backend, it is necessary to use two other areas in the project: Testing and Infrastructure. The first ensures the quality of the product and that it complies with the standards that are requested, and the second allows the project to be deployed for access. Let's see how they conform

### Entity Relationship Diagram
![erd](resources/erd.jpg)

## Testing:

Needs various tests to ensure that our product meets the objectives of the product backlog
To test R&D the following tasks were carried out

- Creation of test suites
- Manual testing
- Automated testing
- Regression tests
- Smoke tests
- End-to-end exploratory tests
- Defect report

## Infrastructure:

It is the area in charge of the deployment in production and the continuous integration of the project, for which the following was carried out:

Creation of vpc in AWS using the following services

+ **S3** buckets to store images and our frontend.
+ **EC2** to run the api using it as a linux service in Ubuntu Machine.
+ **RDS** to manage Mysql database.
+ **IAM** to manage permissions.
+ **VPC** for the route tables, subnets and gateway.

For continuous integration and continuous CI/CD deployment, pipelines were built using scripts for the frontend and backend in 2 stages: Build and Deploy in Gitlab.

### Diagram
![infraestructure diagram](resources/infra-diagram.jpg)



***


