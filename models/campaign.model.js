const mongoose = require('mongoose');

const Campaign = mongoose.model('campaign', 
{
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
});

module.exports = Campaign;