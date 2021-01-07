const mongoose = require('mongoose');

const Campaign = mongoose.model('milestone', 
{
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
});

module.exports = Campaign;