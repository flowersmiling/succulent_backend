# succulent_backend

This is the frontend of this project you also need the [frontend]
(https://github.com/flowersmiling/succulent_frontend) to run this project.

## Configure backend Environment variable

```
PORT=5000                                       //Request port
NODE_ENV='development'
MONGO_URI                                       // MongoDB URI to connect your mongodb
STRIPE_SECRET_KEY                               // Stripe payment private key
STRIPE_PUBLISHABLE_KEY                          // Stripe payment public key
STRIPE_WEBHOOK_SECRET                           // Stripe webhook private key
STATIC_DIR=../../client/html                                         
DOMAIN=https://whale-succulent.azurewebsites.net //Deploy the backend on Azure  
 OR
DOMAIN=127.0.0.1                                 //Deploy the backend at localhost
JWT_SECRET                                      // JSON WEB token                          
EMAIL_ACCOUNT                                   // Your gmail account with 
EMAIL_PASSWORD                                  // Your gmail password
GOOGLE_CLIENT_ID                                // Google Authentication api id
```
