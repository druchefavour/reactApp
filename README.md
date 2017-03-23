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