const mongoose = require('mongoose');

const Campaign = mongoose.model('dac', 
{
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
});

module.exports = Campaign;