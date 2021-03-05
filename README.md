# FASTAUTH - A RestAPI to Use Query Firebase auth with JSON 

### Didn't Get It ? 
Simply It will generate /register /login endpoints just send email and password of user on It with POST Request and Voila!!    
User Created and Response Gives you idToken which can further be used as AUTH Token in Your project   
So Use idToken as point of validation in ur projects and sync using refreshtoken to get session info   

### REST-API Endpoints with their Inputs : (Refer POSTMAN Folder to see Screenshots)
GET     / - Default Endpoint    
POST    /register Signup user to Google Send below json email and password   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "email":"usermail@gmail.com","password":"userpass"  }
POST    /login Login user to Google Send below json email and password   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "email":"usermail@gmail.com","password":"userpass" }
POST    /userinfo Get User Details like email,status send idToken recieved in Regsiter or Login   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{  "idToken":"TokenHere" }
POST    /sync Get user details of current user from refreshtoken it return idToken   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "refresh_token":"TokenHere" }
POST    /emailverify Send EMail verification request on User email    
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ "idToken":"TokenHere" }
        
Reference for refreshToken https://developers.google.com/identity/toolkit/reference/securetoken/rest/v1/token   
Reference for GoogleAuth Functions I have used IdentityToolkit https://cloud.google.com/identity-platform/docs/use-rest-api   

## CONFIG Requirements: Add configs here config/google.config.ts   
```bash
1) googleapikey = Add your projects Web Apikey
2) authdomain = Add your whitelisted domains so on Email verification user will be redirected to your domain you can use 
                project url check my config projectname.firebaseapp.com 
```
## Usage: 
```bash
Clone Repository
npm install
change process.env.PORT to 8000 on line 33 file src/main.ts
npm run start 
```

### "Remember to add Config variables"

## Deployment on Heroku:
```bash
Once your app is working on your localhost
Open file src/main.ts on line 33 verify if port is process.env.PORT ( await app.listen(process.env.PORT, '0.0.0.0');)
Thats It procfile is already so you are done 
```

#### Reach me at https://miteshmetha.com or admin@miteshmetha.com for issues or Extending It 