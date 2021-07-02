const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const campaignController = require('./controllers/campaign.controller');
const communityController = require('./controllers/community.controller');
const traceController = require('./controllers/trace.controller');
const homeController = require('./controllers/home.controller');

mongoose.connect(config.mongodb, {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
const port = config.port || 3000;
app.set('view engine', 'pug');

app.get('/', homeController.getHome);

app.get('/campaigns/:id', campaignController.getCampaignById);
app.get('/campaign/:slug', campaignController.getCampaignBySlug);

app.get('/dacs/:id', communityController.getCommunityById);
app.get('/dac/:slug', communityController.getCommunityBySlug);

app.get('/communities/:id', communityController.getCommunityById);
app.get('/community/:slug', communityController.getCommunityBySlug);

app.get('/campaigns/:campaignId/milestones/:id', traceController.getTraceById);
app.get('/milestone/:slug', traceController.getTraceBySlug);

app.get('/campaigns/:campaignId/traces/:id', traceController.getTraceById);
app.get('/trace/:slug', traceController.getTraceBySlug);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});