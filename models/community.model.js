const mongoose = require('mongoose');

const Campaign = mongoose.model('community',
{
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
});

module.exports = Campaign;