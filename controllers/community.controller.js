const CommunityModel = require('../models/community.model');
const htmlUtil = require('../utils/htmlUtil');
const imageUtil = require('../utils/imageUtil');

function normalize(community) {
    community.description = htmlUtil.getPlainText(community.description);
    community.image = imageUtil.normalizeImagePath(community.image);
    return community;
}

module.exports = {
    getCommunityById: async (req, res) => {
        const id = req.params.id;
        try {
            const community = await CommunityModel.findById(id).exec();
            if (!community) {
                res.sendStatus(404);
            }
            normalize(community);
            return res.render('community', community);
        }
        catch(err) {
            console.log('err', err);
            res.sendStatus(500);
        }
    },
    getCommunityBySlug: async (req, res) => {
        const slug = req.params.slug;
        try {
            const community = await CommunityModel.findOne({slug}).exec();
            if (!community) {
                res.sendStatus(404);
            }
            normalize(community);
            return res.render('community', community);
        }
        catch(err) {
            console.log('err', err);
            res.sendStatus(500);
        }
    }
};