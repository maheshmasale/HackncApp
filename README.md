Ever had to walk around a lot just to withdraw some money out of the ATM? It wasn't fun, right? But how would it sound to have atleast 1 ATM around you at all times? Good! We know!

This is what exactly our aim was while we were making this web app. It helps banks to decide how good is a particular location for setting up a new ATM.

In this web app we have used Node.js for backend operations along with express.js for rendering data to UI and JQuery for traversing data in HTML and UI.

We fetched the locations of current ATMs from Capital One's API- Nessie (URL:http://api.reimaginebanking.com).
Using ESRI's API - ArcGIS (URL:https://www.arcgis.com/features/index.html) helped us to map the points on the map and also to implement our main function of finding nearby ATMs from the proposed location of an ATM

The web app is deployed on Heroku (URL:https://placeitt.herokuapp.com/)
The red points indicate locations of current ATMs, if you click on a particular location on the map and 1 or more red points turn into green it means there are more than enough required ATM(s) in the vicinity and setting up an ATM there would not be feasible.
