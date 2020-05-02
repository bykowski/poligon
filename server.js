const express = require('express');
const app = express();
const path = require('path');


// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname,  "build", "index.html"));
// });


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
  response.sendfile('./src/index.html')
});



// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 4200);

