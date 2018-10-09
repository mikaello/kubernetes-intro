const express = require('express');
const logger = require('winston');
const app = express();
const port = 5000;

app.get('/', (request, response) => {
	response.send(`Hello, I'm alive`);
	logger.info('Responded to GET request on /')
});

app.get('/api/me', (request, response) => {
	response.send('{"name": "John Doe monster magnet", "location": "Earth"}');
	logger.info('Responded to GET request on /api/me')
});

app.get('/api/work', (request, response) => {
	response.send('[{"yearFrom": "1820", "yearTo": "2017", "place": "Cool studio", "comment": "Singin \'n stuff"}, {"yearFrom": "2017", "yearTo": "2018", "place": "Living the life", "comment": "Making coffee"}]');
	logger.info('Responded to GET request on /api/work')
});

app.get('/api/education', (request, response) => {
	response.send('[{"yearFrom": "2000", "yearTo": "2002", "place": "Middle school", "comment": "Learning stuff"}, {"yearFrom": "2010", "yearTo": "2018", "place": "Preschool", "comment": "Tar opp fag"}]');
	logger.info('Responded to GET request on /api/edu')
});

app.listen(port, (err) => {
  if (err) {
    return logger.error('Whata, John Doe??', err)
  }

  logger.info(`server is listening on ${port}`)
});
