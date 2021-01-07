const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const campaignController = require('./controllers/campaign.controller');
const dacController = require('./controllers/dac.controller');
const milestoneController = require('./controllers/milestone.controller');
const homeController = require('./controllers/home.controller');

mongoose.connect(config.mongodb, {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
const port = config.port || 3000;
app.set('view engine', 'pug');

app.get('/', homeController.getHome);
app.get('/campaigns/:id', campaignController.getCampaign);
app.get('/dacs/:id', dacController.getDac);
app.get('/campaigns/:campaignId/milestones/:id', milestoneController.getMilestone);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});