const CampaignModel = require('../models/campaign.model');
const htmlUtil = require('../utils/htmlUtil');
const { normalizeImagePath } = require('../utils/imageUtil');
const imageUtil = require('../utils/imageUtil');

function normalize(campaign) {
    campaign.description = htmlUtil.getPlainText(campaign.description);
    campaign.image = imageUtil.normalizeImagePath(campaign.image);
    return campaign;
}

module.exports = {
    getCampaignById: async (req, res) => {
        const id = req.params.id;
        try {
            const campaign = await CampaignModel.findById(id).exec();
            if (!campaign) {
                res.sendStatus(404);
            }
            normalize(campaign);
            return res.render('campaign', campaign);
        }
        catch(err) {
            console.log('err', err);
            res.sendStatus(500);
        }
    },
    getCampaignBySlug: async (req, res) => {
        const slug = req.params.slug;
        try {
            const campaign = await CampaignModel.findOne({slug}).exec();
            if (!campaign) {
                res.sendStatus(404);
            }
            normalize(campaign);
            return res.render('campaign', campaign);
        }
        catch(err) {
            console.log('err', err);
            res.sendStatus(500);
        }
    }
};