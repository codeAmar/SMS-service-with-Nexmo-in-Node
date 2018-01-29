### Sending SMS with Nexmo in Node Js

This repository contain the code for sending and receiving Text Message from your application.

**To send message**


- Create a file .env in the root directory of project and paste the below content.

```sh
YOUR_API_KEY=<change this with your nexmo api key>
YOUR_API_SECRET=<change this with your nexmo api secret>
NEXMO_FROM_NUMBER=<change it with your nexmo phone number>
 ```

- you can run command `node app.js` after you get the secret and app key from nexmo website.


**To receive message**
- you have to install ngork as dependency which will expose your localhost to the outside internet.
- Then you can run the project by  `node receive.js`.
- Once that is done, you have to get the current link of ngork and create a webhook in nexmo dashboard.
- Then you can send message to your nexmo number and see it in the `localhost:4040`.

