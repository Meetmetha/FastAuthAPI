FASTAUTH - A RestAPI to Use Query Firebase auth with JSON 

Didn't Get It ?
Simply It will generate /register /login endpoints just send email and password of user on It with POST Request and Voila!! 
User Created and Response Gives you AuthToken which can further be used as AUTH Token in Your project

CONFIG Requirements: Add configs here config/google.config.ts
1) googleapikey = Add your projects Web Apikey
2) authdomain = Add your whitelisted domains so on Email verification user will be redirected to your domain you can use 
                project url check my config projectname.firebaseapp.com 

Usage: 
Clone Repository
npm install
change process.env.PORT to 8000 on line 33 file src/main.ts
npm run start 

"Remember to add Config variables"

Deployment on Heroku:
Once your app is working on your localhost
Open file src/main.ts on line 33 verify if port is process.env.PORT ( await app.listen(process.env.PORT, '0.0.0.0');)
Thats It procfile is already so you are done 

Reach me at https://miteshmetha.com or admin@miteshmetha.com for issues or Extending It 