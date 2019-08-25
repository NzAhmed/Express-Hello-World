/* Hello world example - the simplest Express app you can create :

Installing Express:
- Assuming you’ve already installed Node.js
- Create a directory to hold your application
	>mkdir myapp
	>cd myapp

- Use the npm init command to create a package.json file for your application. 

	>npm init

- This command prompts you for a number of things, such as the name and version of your application. 
For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception:
A package.json file must contain "name" and "version" fields.

- A package.json file:

    + lists the packages your project depends on
    + specifies versions of a package that your project can use using semantic versioning rules
    + makes your build reproducible, and therefore easier to share with other developers

entry point: (index.js)
or whatever you want the name of the main file to be.
Now install Express in the myapp directory and save it in the dependencies list. For example:

	>npm install express --save
*/
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

// This app sarts a server and listens on port 3000 for connections. 
app.listen(3000, () => console.log('Example app listening on port 3000!'))
/*
The app responds with "Hello World!"" for requests to the root URL (/) or route. 
For every other path, it will respond with a 404 Not Found.
Run the app with the following command:
	>node app.js

Then, load http://localhost:3000/ in a browser to see the output.
*/