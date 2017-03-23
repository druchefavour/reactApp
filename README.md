# reactApp

Create MongoDB database : 
* Connect to mongoDB by typing mongod in the command line
* Open another cmd and type mongo.
* type use "nytreact" to create a new mongoDB -called "nytreact"

*Create a models folder
	* Use mongoose to create an Article Schema (Article.js)
		* In Article.js First - Require Mongoose 	
		* Create Schema Class
		* Create a means to export our model (module.export and call our model Article Schema)
		*Define ArticleSchema as a new Schema and set up our value pair as arguments of the newSchema object
		Articles have each of the following fields:
			*title (Title of the stored article from nytimes.com)
			*date (publish date and time of the article)
			*url (URL of the article on nytimes.com)
		*Define an optional element required for title and url and set the value as true
		*Define a default element for date and set it at date now.
	*Create a public folder that will hold the index.html and bundle.js files
	* Create a Bootstrap layout for index.html. 

	* APP FOLDER
		* Create an app folder. Inside the app folder: 
		* Create an app.js file
		* Inside the app.js file
			* Include the Main React Dependencies
				* Require react
				* Require react-dom
			* Create config. directory. 
				* Inside the config directory, create a route.js file
					* Inside the route.js file, 
						* Require the react library
						* Require the react-router module	
			* Inside the app folder
			* Create the component directory. 
				* Inside the componet directory
					* Create a main.js
				
