# auth-api

### clone the repository using HTTPS or SSH
1. install all dependencies using cammand npm i

1. install nodemon as dev dependancy or global using comman npm i nodemon

## create a env file with
1. JWT_SECRET_KEY
2. PORT

## start the server using command in terminal
npm run server

## run API
### Registration
`http://localhost:${port}/signup`

###need to pass these details
{
    "first_name":"",
    "last_name":"",
    "email":"", // proper email
    "password":"", // minimum length 8
    "mobile":"", // 10 digits
    "roles":[""] // multiple roles can be
}

## Response
jwt token

### Login
`http://localhost:${port}/signin`
### need to paas these details
{
  "email":"",
  "password":""
}

## For authentication and authorization 
In authentication authorization Bearer token accept only 
In authentication i  have used a product table. You only admin can create a product
