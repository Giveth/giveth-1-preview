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

app.get('/campaigns/:id', campaignController.getCampaignById);
app.get('/campaign/:slug', campaignController.getCampaignBySlug);

app.get('/dacs/:id', dacController.getDacById);
app.get('/dac/:slug', dacController.getDacBySlug);

app.get('/campaigns/:campaignId/milestones/:id', milestoneController.getMilestoneById);
app.get('/milestone/:slug', milestoneController.getMilestoneBySlug);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});