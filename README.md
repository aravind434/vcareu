==>Create a seperate folder to maintain local db/server and install the json-server inside the folder use the below command
is npm i json-server
Once we run the above command it will create node_modules folder along with package.json's.

==>Now create a db.json file inside the folder and copy paste the required array object as a server data.
==>Create a file for server and copy paste the server.js copy from website and change the db name , this server.js file will handle the db.json file.

==>redirect to the created folder(json folder) and  run/start the server by run the below command is node serverfilename.js(node server.js), in server.js file default port will be 4000 and if we want to change we can change manually there inside the file only...


Steps to install  react-bootstrap...
==>Redirect to the project folder and run the below command to install the react-bootstrap
npm i react-bootstrap/bootstrap and need to import the bootstrap components whever what we required...

==>Either we can use CDN links to use bootstrap but the problem is need the internet always to run the CDN files bcz of external files...

==>Steps to install Nodem and setup in package.json of DB.
Install Nodemon to run the server automatically when db data changed...
To install ==> npm i -g nodemon (if install npm i nodemon --save locally is  not working, so better to install globally).
To run server ==> nodemon filename with extension(.js) and it will restart the server automatically when db data changed...
-> set the nodemon to a script to start with simple command is 
copy the script snippet from package.json dependencies and paste it inside the db package.json remove other things keep only the start property from that file and give the value to the start property is "start":"nodemon filename with extension" and now run the command npm start simply  at the db directory and it automatically restart on db data change also...

==>To display the available beds categorized we need to use lodash library.
    groupBy method used from lodash library to categorized beds , here we can use array methods as well to categorize.
    To install lodash => npm i --save lodash.

==> Install bootstrap-icons to display icons 
    npm install bootstrap-icons

==>Need to install the firebase and create project in firebase and configure the authentication related in app.jsx and get the user details while book the bed.
    =>To instal firebase npm i firebase.


